const PurchasedModule = require("../../model/PurchasedModule");
const TransactionDetail = require("../../model/TransactionDetail");


const AddTransactionDetail = async (req, res) => {
  try {
    const {
      amount,
      remark,
      totalAmount,
      totalPaidAmount,
      restAmount,
      purchasedModuleId,
    } = req.body;

    const newTransaction = new TransactionDetail({
      amount: parseFloat(amount),
      remark,
      totalAmount: parseFloat(totalAmount),
      totalPaidAmount: parseFloat(totalPaidAmount) + parseFloat(amount),
      restAmount: parseFloat(totalAmount) - (parseFloat(totalPaidAmount) + parseFloat(amount)),
    });

    const savedTransaction = await newTransaction.save();

    const purchasedModule = await PurchasedModule.findById(purchasedModuleId);
    if (!purchasedModule) {
      return res.status(404).json({
        success: false,
        message: "Purchased Module not found",
      });
    }

    purchasedModule.transactionHistory.push(savedTransaction._id);

    purchasedModule.paid_amount =
      (purchasedModule.paid_amount || 0) + parseFloat(amount);
    purchasedModule.due_amount =
      (purchasedModule.totalPrice || 0) - purchasedModule.paid_amount;

    await purchasedModule.save();

    res.status(201).json({
      success: true,
      message: "Transaction added successfully",
      data: savedTransaction,
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Error adding transaction", error });
  }
};


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