const express = require('express');
const {
    addModule,
    editModule,
    deleteModule,
    getAllModules,
    toggleModuleStatus,
    getModuleById
} = require('../controller/course_and_modules/addModuleController');
const { getfilteredModule, final_add_module,getUpcoming_course, getComingSoonCourses, getNextComingCoursenew, getClosestStartDateCourse, getClosestUpcomingCourses, getClosestUpcomingCourseswithhrs, getClosestUpcomingCourseswithNull, getModuleByLocation, updateModule } = require('../controller/course_and_modules/addModuleControllerLatest');

// ===================================== latest change  =================================

const { createModulelatest,
    getAllModuleslatest,
    updateModulelatest,
     updatePriceWithOfferPricelatest, } = require('../controller/course_and_modules/addmoduleControllerLatestnew');
const { reduceAvailablePlaces } = require('../controller/course_and_modules/reducePlace');
const { get_purchasedModule, get_totalpurchasedModule, get_purchasedModule2 } = require('../controller/course_and_modules/purchasedModule');
const { getInvoice, getAgreement } = require('../controller/invoice/invoiceGenerator');
const moduleRoute = express.Router();

// Add a new module
// moduleRoute.post('/add_module', addModule);
moduleRoute.post('/add_module', final_add_module);
moduleRoute.post('/add_module2', addModule);

// Edit an existing module
moduleRoute.put('/edit_module/:id', updateModule);

// Delete a module
moduleRoute.delete('/delete_module/:id', deleteModule);

// Get all modules
moduleRoute.get('/modules', getAllModules);
moduleRoute.get('/toggleModuleStatus/:id', toggleModuleStatus);
moduleRoute.get('/getModuleById/:id', getModuleById);

moduleRoute.get('/getupcoming_course', getUpcoming_course);

moduleRoute.get('/getModuleByLocation/:location',getModuleByLocation)
moduleRoute.get('/getComingSoonCourses', getComingSoonCourses);
  
  moduleRoute.get('/getClosestStartDateCourse', getClosestStartDateCourse);
moduleRoute.get('/getClosestUpcomingCourses', getClosestUpcomingCourses);
moduleRoute.get('/getClosestUpcomingCourseswithhrs', getClosestUpcomingCourseswithhrs);
moduleRoute.get('/getClosestUpcomingCourseswithNull', getClosestUpcomingCourseswithNull);
moduleRoute.get('/reduce-places/:moduleId', reduceAvailablePlaces);


moduleRoute.get('/get_purchasedModule', get_purchasedModule);
moduleRoute.get('/get_purchasedModule/:id', get_purchasedModule2);
moduleRoute.get('/get_purchasedModule_invoice/:id', getInvoice);
moduleRoute.get('/getAgreement_invoice/:id', getAgreement);
moduleRoute.get('/get_totalpurchasedModule', get_totalpurchasedModule);
moduleRoute.get('/get_totalpurchasedModule/:id', get_totalpurchasedModule);

module.exports = moduleRoute;
