


const mongoose = require("../config/db"); 


const transactionSchema = new mongoose.Schema(
    {
        amount: { type: String, required: true },
        remark: { type: String, required: true },

      },
 {
    timestamps: true, 
});



const TransactionDetail = mongoose.model("TransactionDetail", transactionSchema);
module.exports = TransactionDetail;


