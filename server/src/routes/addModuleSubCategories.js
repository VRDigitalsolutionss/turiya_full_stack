const express = require('express');
const {
    deleteModuleCategory,
    editModuleCategory,
    toggleModuleCategoryStatus,
} = require('../controller/course_and_modules/modulSubCategories'); // Correct path
const { addModuleCategoryLatest, getAllModuleCategoriesLatest, getCourseCategoryById } = require('../controller/course_and_modules/moduleSubCategoriesLatest');

const moduleCategoryLatestRoute = express.Router();

// Route to add a module category
moduleCategoryLatestRoute.post('/add_module_category_latest', addModuleCategoryLatest);

// Route to edit a module category
moduleCategoryLatestRoute.put('/edit_module_category/:id', editModuleCategory);

// Route to toggle the status of a module category
moduleCategoryLatestRoute.put('/toggle_module_category/:id', toggleModuleCategoryStatus);

// Route to delete a module category
moduleCategoryLatestRoute.delete('/delete_module_category/:id', deleteModuleCategory);

// Route to get all module categories
moduleCategoryLatestRoute.get('/module_categories_latest', getAllModuleCategoriesLatest);
moduleCategoryLatestRoute.get('/module_categories/:id', getCourseCategoryById);
module.exports = moduleCategoryLatestRoute;
