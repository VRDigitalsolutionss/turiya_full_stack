const PurchasedModule = require("../../model/PurchasedModule");
const TransactionDetail = require("../../model/TransactionDetail");


const AddTransactionDetail = async (req, res) => {
  try {
    const { purchasedModuleId,transactionId, amount, ...transactionData } = req.body;

    // Get the current transaction record based on purchasedModuleId or create a new one if none exists
    let transaction = await TransactionDetail.findOne({ transactionId });

    if (!transaction) {
      // Create a new transaction if none exists for the provided purchasedModuleId
      transaction = new TransactionDetail({
        ...transactionData,
        totalAmount: transactionData.totalAmount || "0", // Default to 0 if not provided
        totalPaidAmount: "0", // Initial paid amount is 0
        restAmount: transactionData.totalAmount || "0", // Initially, restAmount is same as totalAmount
      });
    }

    // Update totalPaidAmount by adding the incoming amount
    transaction.totalPaidAmount = (parseFloat(transaction.totalPaidAmount) + parseFloat(amount)).toString();

    // Update restAmount by subtracting the incoming amount
    transaction.restAmount = (parseFloat(transaction.restAmount) - parseFloat(amount)).toString();

    // Ensure restAmount doesn't go below zero
    if (parseFloat(transaction.restAmount) <= 0) {
      transaction.restAmount = "0";
    }


    if (parseFloat(transaction.totalPaidAmount) === parseFloat(transaction.totalAmount)) {
      transaction.remark = "Full Paid";
    } else {
      transaction.remark = "Partially Paid";
    }


    // Save the transaction
    await transaction.save();


    // =================================================
    // Find the related PurchasedModule by ID
    const purchasedModule = await PurchasedModule.findById(purchasedModuleId);

    if (!purchasedModule) {
      return res.status(404).json({
        message: "Purchased module not found",
      });
    }

  

    if (!Array.isArray(purchasedModule.transactionDetail)) {
      purchasedModule.transactionDetail = []; // Initialize as an array if not already
    }
    
    // Add the new transaction to the array
    purchasedModule.transactionDetail.push(transaction);


    await purchasedModule.save();

    res.status(201).json({
      message: "Transaction added and purchased module updated successfully",
      transaction: transaction,
      remark:transaction.remark
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding transaction", error });
  }
};





// const AddTransactionDetail = async (req, res) => {
//   try {
//     const {total_amount, amount, remark } = req.body;

//     // Fetch the most recent transaction for dynamic calculation
//     const lastTransaction = await TransactionDetail.findOne().sort({ createdAt: -1 });

    
//     // Get the current values or default to 0
//     const currentTotalPaidAmount = lastTransaction ? parseFloat(lastTransaction.total_amount) : 0;
//     const currentRestAmount = lastTransaction ? parseFloat(lastTransaction.restAmount) : 0;

//     // Calculate the new values dynamically
//     const updatedTotalPaidAmount = currentTotalPaidAmount + parseFloat(total_amount);
//     const updatedRestAmount = currentRestAmount - parseFloat(total_amount);

//     // Create a new transaction record
//     const newTransaction = new TransactionDetail({
//       amount,
//       remark,
//       total_amount,
//       total_amount: updatedTotalPaidAmount.toString(),
//       restAmount: updatedRestAmount.toString(),
//     });

//     // Save the new transaction
//     await newTransaction.save();

//     res.status(201).json({
//       message: "Transaction added successfully",
//       transaction: newTransaction,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding transaction", error });
//   }
// };






const getTransactionDetail = async (req, res) => {
  try {
    // Extract transactionId from request parameters
    const { transactionId } = req.params;

    // Find the transaction by its id
    const transaction = await TransactionDetail.findById(transactionId);

    // If no transaction is found, return a 404 error
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // If transaction is found, return the transaction details
    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching transaction", error });
  }
};


module.exports ={AddTransactionDetail,getTransactionDetail}