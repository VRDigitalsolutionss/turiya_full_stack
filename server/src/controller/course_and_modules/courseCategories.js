const Coursecategories = require("../../model/course-categories");
const CourseCategoriesLatest = require("../../model/CourseCategoriesLatest");
// const Coursecategories = require("../../model/course-categories");


// Add a course category
const handleAddCourseCategory = async (req, res) => {
    try {
        const { category } = req.body;

        if (!category) {
            return res.status(400).json({
                success: false,
                message: "Category is required",
            });
        }

        const newCategory = new Coursecategories({ category });

        await newCategory.save();

        res.status(201).json({
            success: true,
            message: "Course category added successfully",
            data: newCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add course category",
            error: error.message,
        });
    }
};

// Edit or update a course category
const editCourseCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category } = req.body;

        if (!category) {
            return res.status(400).json({
                success: false,
                message: "Category is required for update",
            });
        }

        const updatedCategory = await CourseCategoriesLatest.findByIdAndUpdate(
            id,
            { category }
        );

        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: "Course category not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Course category updated successfully",
            data: updatedCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update course category",
            error: error.message,
        });
    }
};

// Toggle course category status
const toggleCourseCategoryStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Coursecategories.findById(id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Course category not found",
            });
        }

        category.status = category.status === "active" ? "inactive" : "active";

        await category.save();

        res.status(200).json({
            success: true,
            message: "Course category status updated successfully",
            data: category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle course category status",
            error: error.message,
        });
    }
};

// Delete a course category
const deleteCourseCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCategory = await CourseCategoriesLatest.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({
                success: false,
                message: "Course category not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Course category deleted successfully",
            data: deletedCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete course category",
            error: error.message,
        });
    }
};

// Get all course categories
const getAllCourseCategories = async (req, res) => {
    try {
        const categories = await Coursecategories.find().populate("Coursecategories");
        res.status(200).json({
            success: true,
            data: categories,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch course categories",
            error: error.message,
        });
    }
};


const getCourseCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Coursecategories.findById(id).populate("moduleCategories");
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Course category not found",
            });
        }

        res.status(200).json({
            success: true,
            data: category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch course category",
            error: error.message,
        });
    }
};



module.exports = {
    handleAddCourseCategory,
    editCourseCategory,
    toggleCourseCategoryStatus,
    deleteCourseCategory,
    getAllCourseCategories,
    getCourseCategoryById
};