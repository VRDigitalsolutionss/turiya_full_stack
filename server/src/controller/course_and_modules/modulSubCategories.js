// const Modulecategories = require('../../model/module-subcategories'); 
const CourseCategoriesLatest = require('../../model/CourseCategoriesLatest');
const Modulecategories = require('../../model/moduleSubCategoryLatest'); 

// Add a module category
// const addModuleCategory = async (req, res) => {
//     try {
//         const { category, modulecategory } = req.body;

//         if (!category || !modulecategory) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Category and module category are required",
//             });
//         }

//         const newModuleCategory = new Modulecategories({ category, modulecategory });
//         await newModuleCategory.save();

//         res.status(201).json({
//             success: true,
//             message: "Module category added successfully",
//             data: newModuleCategory,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to add module category",
//             error: error.message,
//         });
//     }
// };

const addModuleCategory = async (req, res) => {
    try {
        const { category, modulecategory } = req.body;

        if (!category || !modulecategory) {
            return res.status(400).json({
                success: false,
                message: "Category and module category are required",
            });
        }

        // Create a new Module Category
        const newModuleCategory = new Modulecategories({ category, modulecategory });
        await newModuleCategory.save();

        // Update the courseSubCategory field in the CourseCategoriesLatest model
        const updatedCourseCategory = await CourseCategoriesLatest.findByIdAndUpdate(
            category, // The ID of the course category to update
            { courseSubCategory: newModuleCategory._id }, // Set the courseSubCategory field
            { new: true } // Return the updated document
        );

        if (!updatedCourseCategory) {
            return res.status(404).json({
                success: false,
                message: "Course category not found",
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
        res.status(500).json({
            success: false,
            message: "Failed to add module category or update course category",
            error: error.message,
        });
    }
};
// Edit a module category
const editModuleCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, modulecategory } = req.body;

        if (!category || !modulecategory) {
            return res.status(400).json({
                success: false,
                message: "Category and module category are required for update",
            });
        }

        const updatedModuleCategory = await Modulecategories.findByIdAndUpdate(
            id,
            { category, modulecategory },
            { new: true }
        );

        if (!updatedModuleCategory) {
            return res.status(404).json({
                success: false,
                message: "Module category not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Module category updated successfully",
            data: updatedModuleCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update module category",
            error: error.message,
        });
    }
};

// Toggle module category status
const toggleModuleCategoryStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const moduleCategory = await Modulecategories.findById(id);

        if (!moduleCategory) {
            return res.status(404).json({
                success: false,
                message: "Module category not found",
            });
        }

        moduleCategory.status = moduleCategory.status === "active" ? "inactive" : "active";
        await moduleCategory.save();

        res.status(200).json({
            success: true,
            message: "Module category status updated successfully",
            data: moduleCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle module category status",
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

// Get all module categories
// const getAllModuleCategories = async (req, res) => {
//     try {
//         const moduleCategories = await Modulecategories.find().populate("Coursecategories");
//         res.status(200).json({
//             success: true,
//             data: moduleCategories,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch module categories",
//             error: error.message,
//         });
//     }
// };


// ==============================================================================

const getAllModuleCategories = async (req, res) => {
    try {
      // Correct the populate to use "courseSubCategory" (field name from schema)
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


// ===========================================================================================
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
    addModuleCategory,
    editModuleCategory,
    toggleModuleCategoryStatus,
    deleteModuleCategory,
    getAllModuleCategories,
    getCourseCategoryById
};
