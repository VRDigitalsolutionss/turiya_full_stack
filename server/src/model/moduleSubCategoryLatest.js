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
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseCategoriesLatest",
      required: false
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const ModulecategoriesLatest = mongoose.model(
  "ModulecategoriesLatest",
  modulecategoriesschema
);

module.exports = ModulecategoriesLatest;
