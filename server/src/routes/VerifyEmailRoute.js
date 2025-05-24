

const express = require('express');
const verifyEmailController = require('../controller/verifyEmail');


const veriEmailRoute  = express.Router();


veriEmailRoute.post('/verify-email',verifyEmailController);




module.exports = veriEmailRoute;



