


const mongoose = require("../config/db");



const transactionSchema = new mongoose.Schema(
  {
    amount: { type: String, required: false },
    remark: { type: String, required: false },
    totalAmount: { type: String, required: false },
    totalPaidAmount: { type: String, required: false, default: "0" },
    restAmount: { type: String, required: false, default: "0" },
  },
  {
    timestamps: true,
  });



const TransactionDetail = mongoose.model("TransactionDetail", transactionSchema);
module.exports = TransactionDetail;


