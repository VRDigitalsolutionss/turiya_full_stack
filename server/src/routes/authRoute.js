const express = require('express');
const { loginController,getUserDetails } = require('../controller/loginController');
const { registerController } = require('../controller/registerController');

// const { forgotPasswordController } = require('../controller/ForgotPasswordController');

// const {forgotPasswordController} = require('../controller/forgotPasswordController')
const { resetPasswordController } = require('../controller/resetPasswordController');
const { getUserDetailById } = require('../controller/loginnewController');
const { addOtherAddress, getOtherAddress } = require('../controller/addOtherAddress');
const { getRegisteredUser } = require('../controller/register2');
const verifyEmail = require('../controller/verifyEmail');
// const { getUserDetailById } = require('../controller/loginnewController');

const authRoute = express.Router();

authRoute.post('/register', registerController);
authRoute.post('/login',loginController);
authRoute.post('/verify-email',verifyEmail);
// authRoute.post('/forgot_password', forgotPasswordController);
authRoute.post('/send_reset_password', resetPasswordController);
authRoute.get('/getUserDetailById/:id', getUserDetailById);
authRoute.post('/add_otherAddress',  addOtherAddress);
authRoute.get('/get_otherAddress/:registeredUserId', getOtherAddress);
authRoute.get('/getRegisteredUser', getRegisteredUser);

module.exports = authRoute