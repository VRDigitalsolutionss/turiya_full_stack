const express = require("express");
const {
    addCourseWebpage,
    editCourseWebpage,
    deleteCourseWebpage,
    getAllCourseWebpages,
    toggleCourseWebpageStatus,
    getCourseWebpageById,
    getCourseWebpageByCategory,
} = require("../controller/webpages/coursewebpageController");

const {toggleCourseWebpageStatus2} = require('../controller/webpages/toggleCoursewebPage')

const courseWebPageRoutes = express.Router();

// Add Course Webpage

courseWebPageRoutes.get('/course_web_page_by_course_category/:courseCategory',getCourseWebpageByCategory)
courseWebPageRoutes.post("/add_course_webpage", addCourseWebpage);

// Edit Course Webpage
courseWebPageRoutes.put("/edit_course_webpage/:id", editCourseWebpage);

// Delete Course Webpage
courseWebPageRoutes.delete("/delete_course_webpage/:id", deleteCourseWebpage);

// Get All Course Webpages
courseWebPageRoutes.get("/all_course_webpages", getAllCourseWebpages);
courseWebPageRoutes.get("/course_webpages_byId/:id", getCourseWebpageById);

// Toggle Course Webpage Status
// courseWebPageRoutes.put("/toggle_course_webpage_status/:id", toggleCourseWebpageStatus);
courseWebPageRoutes.get("/toggle_course_webpage_status2/:id", toggleCourseWebpageStatus2);
courseWebPageRoutes.get("/getCourseWebpageById/:id", getCourseWebpageById);

module.exports = courseWebPageRoutes;
