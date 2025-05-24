const express = require("express");
const {
    addModuleWebpage,
    editModuleWebpage,
    deleteModuleWebpage,
    getAllModuleWebpages,
    toggleModuleWebpageStatus,
    getModuleWebpageById,
} = require("../controller/webpages/modulewebpageController");


const {
    addCourseModuleWebpage,
    editCourseModuleWebpage,
    deleteCourseModuleWebpage,
    getAllModuleModuleWebpages,
    toggleModuleWebpagestatus,
    getCourseModuleWebpageById,
    toggleModuleWebpagestatus3,
    findModuleWebpagesByCategory
} = require("../controller/webpages/modulewebpageController");
const moduleRoute = require("./moduleRoute");
const { reduceAvailablePlaces } = require("../controller/course_and_modules/reducePlace");



const moduleWebPageRoutes = express.Router();

// Add Module Webpage
moduleWebPageRoutes.post("/add_module_webpage", addCourseModuleWebpage);

// Edit Module Webpage
moduleWebPageRoutes.put("/edit_module_webpage/:id", editCourseModuleWebpage);

// Delete Module Webpage
moduleWebPageRoutes.delete("/delete_module_webpage/:id", deleteCourseModuleWebpage);

// Get All Module Webpages
moduleWebPageRoutes.get("/all_module_webpages", getAllModuleModuleWebpages);

moduleWebPageRoutes.get("/module_webpages_byId/:id", getCourseModuleWebpageById);
moduleWebPageRoutes.get("/module_webpages_by_category/:slug", findModuleWebpagesByCategory);
// Toggle Module Webpage Status
moduleWebPageRoutes.put("/toggle_module_webpage_status/:id", toggleModuleWebpagestatus3);

module.exports = moduleWebPageRoutes;
