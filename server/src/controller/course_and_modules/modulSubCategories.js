// const Modulecategories = require('../../model/module-subcategories'); 
const CourseCategoriesLatest = require('../../model/CourseCategoriesLatest');
const Modulecategories = require('../../model/moduleSubCategoryLatest');


const editModuleCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, modulecategory, slug } = req.body;

        if (!category || !modulecategory || !slug) {
            return res.status(400).json({
                success: false,
                message: "Category, module category, and slug are required for update",
            });
        }

        // Fetch the current subcategory to check if the parent category changes
        const existingModuleCategory = await Modulecategories.findById(id);
        if (!existingModuleCategory) {
            return res.status(404).json({
                success: false,
                message: "Module category not found",
            });
        }

        // Check if the parent category has changed
        if (existingModuleCategory.category.toString() !== category) {
            // Remove subcategory reference from the old category
            await CourseCategoriesLatest.findByIdAndUpdate(existingModuleCategory.category, {
                $pull: { courseSubCategories: id },
            });

            // Add subcategory reference to the new category
            await CourseCategoriesLatest.findByIdAndUpdate(category, {
                $addToSet: { courseSubCategories: id }, // Use $addToSet to avoid duplicates
            });
        } else {
            // If the parent category hasn't changed, ensure the subcategory ID exists
            await CourseCategoriesLatest.findByIdAndUpdate(category, {
                $addToSet: { courseSubCategories: id }, // Add if not already present
            });
        }

        // Update the module category
        const updatedModuleCategory = await Modulecategories.findByIdAndUpdate(
            id,
            { category, modulecategory, slug },
            { new: true }
        );

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
  
      // Find the module category to delete
      const moduleCategoryToDelete = await Modulecategories.findById(id);
  
      if (!moduleCategoryToDelete) {
        return res.status(404).json({
          success: false,
          message: "Module category not found",
        });
      }
  
      // Remove the subcategory reference from its parent category
      await CourseCategoriesLatest.findByIdAndUpdate(moduleCategoryToDelete.category, {
        $pull: { courseSubCategories: id }, // Remove subcategory ID from the array
      });
  
      // Delete the module category
      const deletedModuleCategory = await Modulecategories.findByIdAndDelete(id);
  
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
  


module.exports = {
    editModuleCategory,
    toggleModuleCategoryStatus,
    deleteModuleCategory,
};
