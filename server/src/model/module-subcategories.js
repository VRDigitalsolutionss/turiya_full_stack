const mongoose = require("../config/db"); // Ensure the database connection is correct


const modulecategoriesschema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    modulecategory: {
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
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// ===============================================


const Modulecategories = mongoose.model(
  "Modulecategories",
  modulecategoriesschema
);

module.exports = Modulecategories;
