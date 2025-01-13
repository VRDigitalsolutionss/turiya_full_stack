const mongoose = require("../config/db");

const mealSchema = new mongoose.Schema(
    {
        moduleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "module",
        },
        MealOffers: {
            type: String,
            required: true,
            trim: true,
        },
        MealPrice: {
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
        strictPopulate: false,
    }
);

const Meal = mongoose.model("meal", mealSchema);

module.exports = Meal;
