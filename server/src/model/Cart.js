const mongoose = require("../config/db");

const moduleReferenceSchema = new mongoose.Schema(
  {
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "module", // Reference to the Module model
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RegisteredUser", // Reference to the Module model
      required: true,
    },
    status: {
      type: String,
      default: "active",
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const Cart = mongoose.model("Cart", moduleReferenceSchema);

module.exports = Cart;
