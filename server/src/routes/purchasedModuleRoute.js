
const express = require('express');

// ===================================== latest change  =================================


const { get_purchasedModule, get_purchasedModuleById, } = require('../controller/course_and_modules/purchasedModule');

const purchasedModuleRoute = express.Router();

purchasedModuleRoute.get('/get_purchasedModulenew', get_purchasedModule);
purchasedModuleRoute.get('/get_purchasedModule/:id', get_purchasedModuleById);

module.exports = purchasedModuleRoute;