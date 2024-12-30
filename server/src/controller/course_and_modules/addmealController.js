const Meal = require("../../model/addmealModel");

// **Add Meal**
const addMeal = async (req, res) => {
    try {
        const { MealOffers, MealPrice } = req.body;

        if (!MealOffers || !MealPrice) {
            return res.status(400).json({
                success: false,
                message: "MealOffers and MealPrice are required",
            });
        }

        const newMeal = new Meal({ MealOffers, MealPrice });
        const savedMeal = await newMeal.save();

        res.status(201).json({
            success: true,
            message: "Meal added successfully",
            data: savedMeal,
        });
    } catch (error) {
        console.error("Error adding meal:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add meal",
            error: error.message,
        });
    }
};

// **Edit Meal**
const editMeal = async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const meal = await Meal.findById(id);
        if (!meal) {
            return res.status(404).json({
                success: false,
                message: "Meal not found",
            });
        }

        const updatedMeal = await Meal.findByIdAndUpdate(id, updateFields, { new: true });

        res.status(200).json({
            success: true,
            message: "Meal updated successfully",
            data: updatedMeal,
        });
    } catch (error) {
        console.error("Error editing meal:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update meal",
            error: error.message,
        });
    }
};

// **Delete Meal**
const deleteMeal = async (req, res) => {
    try {
        const { id } = req.params;

        const meal = await Meal.findById(id);
        if (!meal) {
            return res.status(404).json({
                success: false,
                message: "Meal not found",
            });
        }

        await Meal.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Meal deleted successfully",
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

// **Get All Meals**
const getAllMeals = async (req, res) => {
    try {
        const meals = await Meal.find();
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

// **Toggle Meal Status**
const toggleMealStatus = async (req, res) => {
    try {
        const { id } = req.params; // Get meal ID from URL params

        // Ensure the id is a valid MongoDB ObjectId
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }

        // Find the meal by ID
        const meal = await Meal.findById(id);

        if (!meal) {
            return res.status(404).json({
                success: false,
                message: "Meal not found",
            });
        }

        // Toggle the status
        meal.status = meal.status === "active" ? "inactive" : "active";

        // Save the updated meal
        await meal.save();

        res.status(200).json({
            success: true,
            message: "Meal status updated successfully",
            data: meal,
        });
    } catch (error) {
        console.error("Error toggling meal status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle meal status",
            error: error.message,
        });
    }
};

// **Get Meal by ID**
const getMealById = async (req, res) => {
    try {
        const { id } = req.params;

        // Ensure the id is a valid MongoDB ObjectId
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }

        // Query the database by _id
        const meal = await Meal.findById(id);

        if (!meal) {
            return res.status(404).json({ success: false, message: 'Meal not found' });
        }

        res.status(200).json({
            success: true,
            data: meal,
        });
    } catch (error) {
        console.error('Error fetching meal:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch meal',
            error: error.message,
        });
    }
};

module.exports = {
    addMeal,
    editMeal,
    deleteMeal,
    getAllMeals,
    toggleMealStatus,
    getMealById,
};
