



const express = require("express");

const { addMealAndUpdateModule,deleteMealAndRemoveFromModule } = require("../controller/course_and_modules/addMealLatest");
const { addInvoiceType } = require("../controller/addInvoiceType");

const addInvoiceTypeRoutes = express.Router();

// Add a new meal
addInvoiceTypeRoutes.put("/addInvoiceType", addInvoiceType);


module.exports = addInvoiceTypeRoutes;
