const express = require('express');
const {
    addModuleCategory,
    editModuleCategory,
    toggleModuleCategoryStatus,
    deleteModuleCategory,
    getAllModuleCategories,
    getCourseCategoryById,
} = require('../controller/course_and_modules/modulSubCategories'); // Correct path

const moduleCategoryRoute = express.Router();

// Route to add a module category
// moduleCategoryRoute.post('/add_module_category', addModuleCategory);

// // Route to edit a module category
// moduleCategoryRoute.put('/edit_module_category/:id', editModuleCategory);

// // Route to toggle the status of a module category
// moduleCategoryRoute.put('/toggle_module_category/:id', toggleModuleCategoryStatus);

// // Route to delete a module category
// moduleCategoryRoute.delete('/delete_module_category/:id', deleteModuleCategory);

// // Route to get all module categories
// moduleCategoryRoute.get('/module_categories', getAllModuleCategories);
// moduleCategoryRoute.get('/module_categories/:id', getCourseCategoryById);

module.exports = moduleCategoryRoute;
