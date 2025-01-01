
const express = require('express');

// ===================================== latest change  =================================


const { get_purchasedModule, } = require('../controller/course_and_modules/purchasedModule');

const purchasedModuleRoute = express.Router();

purchasedModuleRoute.get('/get_purchasedModulenew', get_purchasedModule);

module.exports = purchasedModuleRoute;