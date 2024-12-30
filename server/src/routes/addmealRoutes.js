const express = require("express");
const {
    addMeal,
    editMeal,
    deleteMeal,
    getAllMeals,
    toggleMealStatus,
    getMealById,
} = require("../controller/course_and_modules/addmealController");
const { addMealAndUpdateModule,deleteMealAndRemoveFromModule } = require("../controller/course_and_modules/addMealLatest");

const mealRoutes = express.Router();

// Add a new meal
mealRoutes.post("/add_meal", addMealAndUpdateModule);

// Edit a meal
mealRoutes.put("/edit_meal/:id", editMeal);

// Delete a meal
mealRoutes.delete("/delete_meal/:id", deleteMeal);

// Get all meals
mealRoutes.put("/toggle_meal_status/:id", toggleMealStatus);

mealRoutes.get("/get_meal/:id", getMealById);

mealRoutes.get("/all_meals/:moduleId", getAllMeals);

module.exports = mealRoutes;
