const mongoose = require("../config/db");

const coursecategoriesschema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    status: {
      type: String,
      trim: true,
      default: "active",
    },
    courseSubCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ModulecategoriesLatest",
      },
    ],
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
