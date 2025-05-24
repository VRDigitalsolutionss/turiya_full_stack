const express = require('express');
const {
    handleAddCourseCategory,
    editCourseCategory,
    toggleCourseCategoryStatus,
    deleteCourseCategory,
    getAllCourseCategories,
    getCourseCategoryById
} = require('../controller/course_and_modules/courseCategories');

const courseCategoryRoute = express.Router();

// Route to add a course category
// courseCategoryRoute.post('/add_course_category', handleAddCourseCategory);

// // Route to edit a course category
// courseCategoryRoute.put('/edit_course_category/:id', editCourseCategory);

// // Route to toggle the status of a course category
// courseCategoryRoute.put('/toggle_course_category/:id', toggleCourseCategoryStatus);

// // Route to delete a course category
// courseCategoryRoute.delete('/delete_course_category/:id', deleteCourseCategory);

// // Route to get all course categories
// courseCategoryRoute.get('/course_categories', getAllCourseCategories);

// courseCategoryRoute.get('/get_course_category/:id', getCourseCategoryById); // New route for fetching by ID
module.exports = courseCategoryRoute;
