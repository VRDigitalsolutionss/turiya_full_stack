const TransactionDetail = require("../../model/TransactionDetail");

const AddTransactionDetail = async  (req, res) => {
    try {
        const { amount, remark } = req.body;
        const newTransaction = new TransactionDetail({ amount, remark });
        await newTransaction.save();
        res.status(201).json({ message: "Transaction added successfully", transaction: newTransaction });
      } catch (error) {
        res.status(500).json({ message: "Error adding transaction", error });
      }
};


const getTransactionDetail = async (req, res) => {
    
    try {
        const transactions = await TransactionDetail.find();
        res.status(200).json(transactions);
      } catch (error) {
        res.status(500).json({ message: "Error fetching transactions", error });
      }

};


module.exports ={AddTransactionDetail,getTransactionDetail}