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

  },
  {
    timestamps: true,
  }
);

const Coursecategories = mongoose.model(
  "Coursecategories",
  coursecategoriesschema
);

module.exports = Coursecategories;
