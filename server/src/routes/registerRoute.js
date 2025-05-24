const express = require('express');
const { registerController } = require('../controller/registerController');
const { loginController } = require('../controller/loginnewController');
const registerRoute = express.Router();


registerRoute.post('/register', registerController);
registerRoute.post('/loginnew', loginController);


module.exports = registerRoute;