const mongoose = require("../config/db"); // Ensure the database connection is correct

const modulecategoriesschema = new mongoose.Schema(
  {
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
      strictPopulate: false,
  }
);

const ModulecategoriesLatest = mongoose.model(
  "ModulecategoriesLatest",
  modulecategoriesschema
);

module.exports = ModulecategoriesLatest;
