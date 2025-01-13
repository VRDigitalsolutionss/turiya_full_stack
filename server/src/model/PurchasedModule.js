const mongoose = require("../config/db");


const PurchasedModuleschema = new mongoose.Schema(
  {
    productNumber: { type: String, required: false },
    invoiceNumber: { type: String, required: false },
    customerNumber: { type: String, required: false },
    orderNumber: { type: String, required: false },
    dueDate: { type: Date, required: false },
    due_amount: { type: Number, required: false },
    customerName: { type: String, required: false },
    customerAddress: { type: String, required: false },
    productDescription: { type: String, required: false },
    quantity: { type: Number, required: false },
    totalPrice: { type: Number, required: false },
    email: { type: String, required: false },
    user_type: { type: String, required: false },
    price: { type: Number, required: false },
    courseData: { type: mongoose.Schema.Types.Mixed, required: false },
    userDetails: { type: mongoose.Schema.Types.Mixed, required: false },
    invoice: { type: Buffer, required: false }, // Store PDF as a binary buffer
    agreement: { type: Buffer, required: false }, // Store PDF as a binary buffer
    transactionDetail: { type: mongoose.Schema.Types.Mixed, required: false },
    paid_amount: { type: Number, required: true },
    invoiceType: { type: String, required: true },
    selectedMeal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "meal",
    },
    selectedRoom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "room",
    },
    transactionHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TransactionDetail",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const PurchasedModule = mongoose.model(
  "PurchasedModule",
  PurchasedModuleschema
);

module.exports = PurchasedModule;
