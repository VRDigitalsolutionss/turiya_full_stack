
const Module = require('../../model/addmodule');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const Meal = require('../../model/addmealModel');

const getAllMeals = async (req, res) => {
  try {
    const { moduleId } = req.params; 

    // Query to find rooms
    const query = moduleId ? { moduleId } : {};
      const meals = await Meal.find(query);

      res.status(200).json({
          success: true,
          data: meals,
      });
  } catch (error) {
      console.error("Error fetching meals:", error);
      res.status(500).json({
          success: false,
          message: "Failed to fetch meals",
          error: error.message,
      });
  }
};

const addMealAndUpdateModule = async (req, res) => {
// console.log("req body",req.body)
    try {
      const {
        moduleId,  // The ID of the module to be updated with the meal
        MealOffers,
        MealPrice,
        status
      } = req.body;

      if (!moduleId || !MealOffers || !MealPrice) {
        return res.status(400).json({
          success: false,
          message: "moduleId, MealOffers, and MealPrice are required",
        });
      }
  
      // Create a new Meal
      const newMeal = await Meal.create({
        moduleId,
        MealOffers,
        MealPrice,
        status: status || "active",
      });
  
      // Update the corresponding module to add the Meal to availableMeals
      const updatedModule = await Module.findByIdAndUpdate(
        moduleId,
        { $push: { availableMeals: newMeal._id } },
        { new: true } // Return the updated module
      );
  
      if (!updatedModule) {
        return res.status(404).json({
          success: false,
          message: "Module not found",
        });
      }
  
      // Respond with success
      res.status(201).json({
        success: true,
        message: "Meal added and module updated successfully",
        data: { Meal: newMeal, module: updatedModule },
      });
  
  
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to add meal and update module",
        error: error.message,
      });
    }

  
};



const deleteMealAndRemoveFromModule = async (req, res) => {
    try {
      
        const { mealId } = req.params;
    const { moduleId } = req.body;

    // Step 1: Find and delete the Meal by its ID
    const mealToDelete = await Meal.findByIdAndDelete(mealId);
    if (!mealToDelete) {
      return res.status(404).json({
        success: false,
        message: "Meal not found with the given mealId",
      });
    }

    // Step 2: Update the Module by removing the meal reference (set meal to null)
    const updatedModule = await Module.findByIdAndUpdate(
      moduleId,
      { meal: null }, // Remove the meal reference in the module
      { new: true } // Return the updated module
    );

    if (!updatedModule) {
      return res.status(404).json({
        success: false,
        message: "Module not found with the given moduleId",
      });
    }

    res.status(200).json({
      success: true,
      message: "Meal deleted and Module updated successfully",
      data: updatedModule,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete meal and update module",
      error: error.message,
    });
  }
};

const deleteMeal = async (req, res) => {
  try {
      const { mealId } = req.params; // Extract mealId from route parameters

      // Find and delete the Meal by its ID
      const mealToDelete = await Meal.findByIdAndDelete(mealId);
      if (!mealToDelete) {
          return res.status(404).json({
              success: false,
              message: "Meal not found with the given mealId",
          });
      }

      res.status(200).json({
          success: true,
          message: "Meal deleted successfully",
          data: mealToDelete, // Optionally return the details of the deleted meal
      });
  } catch (error) {
      console.error("Error deleting meal:", error);
      res.status(500).json({
          success: false,
          message: "Failed to delete meal",
          error: error.message,
      });
  }
};


module.exports = {addMealAndUpdateModule,deleteMeal,deleteMealAndRemoveFromModule,getAllMeals};