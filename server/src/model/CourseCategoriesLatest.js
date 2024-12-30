const mongoose = require("../config/db");

const coursecategoriesschema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: "active",
    },
    courseSubCategory: {
      // Add this field to store the reference to Coursecategories
      type: mongoose.Schema.Types.ObjectId,
      ref: "ModulecategoriesLatest", // The model name for Coursecategories
      required:false
    },
  },
  {
      timestamps: true,
      strictPopulate: false,
  }
);

const CourseCategoriesLatest = mongoose.model(
  "CourseCategoriesLatest",
  coursecategoriesschema
);

module.exports = CourseCategoriesLatest;
