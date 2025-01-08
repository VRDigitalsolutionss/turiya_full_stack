const Modulecategories = require('../../model/moduleSubCategoryLatest'); 
const CourseCategoriesLatest = require("../../model/CourseCategoriesLatest");
const addModuleCategoryLatest = async (req, res) => {
    try {
      const { category, modulecategory, slug, status } = req.body;
  
      if (!category || !modulecategory || !slug) {
        return res.status(400).json({
          success: false,
          message: "Category, module category, and slug are required",
        });
      }
  
      const parentCategory = await CourseCategoriesLatest.findById(category);
      if (!parentCategory) {
        return res.status(404).json({
          success: false,
          message: "Parent category not found",
        });
      }
  
      const newModuleCategory = new Modulecategories({
        modulecategory,
        status,
        category,
        slug,
      });
      const savedModuleCategory = await newModuleCategory.save();
  
      parentCategory.courseSubCategories.push(savedModuleCategory._id);
      await parentCategory.save();
  
      res.status(201).json({
        success: true,
        message: "Module category added successfully",
        data: savedModuleCategory,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to add module category",
        error: error.message,
      });
    }
  };


const getAllModuleCategoriesLatest = async (req, res) => {
    try {
      // Correct the populate to use "courseSubCategory" (field name from schema) .populate("courseSubCategory")
      const moduleCategories = await Modulecategories.find().populate("category");
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
    addModuleCategoryLatest,
    getAllModuleCategoriesLatest,
    getCourseCategoryById
};
