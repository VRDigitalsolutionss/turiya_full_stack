const express = require('express');
const {
    handleAddCourseCategory,
    editCourseCategory,
    toggleCourseCategoryStatus,
    deleteCourseCategory,
    getAllCourseCategories
} = require('../controller/course_and_modules/courseCategories');
const { handleAddCourseCategorylatest, getAllCourseCategoriesLatest, editCourseCategoryLatest, getCourseCategoryById } = require('../controller/course_and_modules/courseCategoryLatest');

const courseCategoryLatestRoute = express.Router();

// Route to add a course category
courseCategoryLatestRoute.post('/add_course_category_latest', handleAddCourseCategorylatest);

// Route to edit a course category
courseCategoryLatestRoute.put('/edit_course_category/:id', editCourseCategoryLatest);

// Route to toggle the status of a course category
courseCategoryLatestRoute.put('/toggle_course_category/:id', toggleCourseCategoryStatus);

// Route to delete a course category
courseCategoryLatestRoute.delete('/delete_course_category/:id', deleteCourseCategory);

// Route to get all course categories
courseCategoryLatestRoute.get('/course_categories_latest', getAllCourseCategoriesLatest);

courseCategoryLatestRoute.get('/get_course_category/:id', getCourseCategoryById); // New route for fetching by ID
module.exports = courseCategoryLatestRoute;
