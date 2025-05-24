

const mongoose = require("../config/db");

const faqSchema = new mongoose.Schema(
  {
    faqCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FAQCategoryLatest", // Reference to the FAQCategory model
     // Ensure every FAQ is linked to a category
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const FAQLatest = mongoose.model("FAQLatest", faqSchema);

module.exports = FAQLatest;

