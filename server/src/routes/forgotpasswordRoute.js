

const express = require('express');
const { forgotPasswordController } = require('../controller/forgotPasswordController');





const forgotPasswordRoute  = express.Router();


forgotPasswordRoute.post('/forgot-password',forgotPasswordController);




module.exports = forgotPasswordRoute;



