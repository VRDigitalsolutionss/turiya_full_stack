



const express = require('express');

const { storeModuleId, getAllModules, deleteCart, getAllModuleWithId } = require('../controller/course_and_modules/cartController');

const cartRoute = express.Router();


cartRoute.post('/add_course_in_cart', storeModuleId);
cartRoute.get('/getAllModuleWithId/:userId',getAllModuleWithId)
cartRoute.get('/get_all_cart_module',getAllModules);
cartRoute.delete('/delete_cart/:id', deleteCart);




module.exports = cartRoute
