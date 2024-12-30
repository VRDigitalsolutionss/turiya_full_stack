
const Modulecategories = require('../../model/moduleSubCategoryLatest'); 
const CourseCategoriesLatest = require("../../model/CourseCategoriesLatest");
// Add a module category
const addModuleCategoryLatest = async (req, res) => {
    try {
        const { modulecategory, courseSubCategory,coursCategoryId, status } = req.body;

        // Check for required fields
        if (!modulecategory || !coursCategoryId) {
            return res.status(400).json({
                success: false,
                message: "modulecategory and courseSubCategory are required",
            });
        }

        // Create the new module category
        const newModuleCategory = new Modulecategories(req.body);
        await newModuleCategory.save();

        // Update the CourseCategoriesLatest document
        // We are assuming that `courseSubCategory` in the request body is the Course Category's ID 
        // that we want to link with this newly created module category.
        const updatedCourseCategory = await CourseCategoriesLatest.findByIdAndUpdate(
            coursCategoryId, 
            { courseSubCategory: newModuleCategory._id }, // Assign the module category's ID
           // Return the updated document
        );

        if (!updatedCourseCategory) {
            return res.status(404).json({
                success: false,
                message: "Course category not found to update",
            });
        }

        res.status(201).json({
            success: true,
            message: "Module category added and course category updated successfully",
            data: {
                newModuleCategory,
                updatedCourseCategory,
            },
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to add module category",
            error: error.message,
        });
    }
};

// Delete a module category
const deleteModuleCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedModuleCategory = await Modulecategories.findByIdAndDelete(id);

        if (!deletedModuleCategory) {
            return res.status(404).json({
                success: false,
                message: "Module category not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Module category deleted successfully",
            data: deletedModuleCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete module category",
            error: error.message,
        });
    }
};


const getAllModuleCategoriesLatest = async (req, res) => {
    try {
      // Populate the courseSubCategory field which references CourseCategoriesLatest
      const moduleCategories = await Modulecategories.find().populate("courseSubCategory");
      res.status(200).json({
        success: true,
        data: moduleCategories,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch module categories",
        error: error.message,
      });
    }
};


// Get a single Course Category by ID (for Modulecategories)
const getCourseCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Modulecategories.findById(id);

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
    addModuleCategoryLatest,
    deleteModuleCategory,
    getAllModuleCategoriesLatest,
    getCourseCategoryById
};
