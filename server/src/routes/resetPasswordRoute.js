
const express = require('express');
const { resetPasswordController } = require('../controller/resetPasswordController');

const resetPasswordRoute  = express.Router();


resetPasswordRoute.post('/reset-password',resetPasswordController);




module.exports = resetPasswordRoute;



;