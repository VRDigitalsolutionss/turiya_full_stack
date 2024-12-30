const mongoose = require("../config/db");

const faqCategorySchema = new mongoose.Schema(
  {
    faqCategory: {
      type: String,
      required: true,  // The name of the FAQ category (e.g., "General Questions", "Shipping", etc.)
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: 'active', // Default status is 'active'
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
  }
);

// Create a model from the schema
const FAQCategoryLatest = mongoose.model("FAQCategoryLatest", faqCategorySchema);

module.exports = FAQCategoryLatest;

