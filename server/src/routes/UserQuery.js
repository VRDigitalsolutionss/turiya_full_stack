const express = require('express');
const { addUserQuery, deleteUserQuery, userQuery, userQueries } = require('../controller/userQuery');




const userQueryRoute = express.Router();


userQueryRoute.post('/add_query',addUserQuery);
userQueryRoute.delete('/delete_query/:id',deleteUserQuery);
userQueryRoute.get('/user_query',userQuery);
userQueryRoute.get('/userQueries',userQueries)


module.exports = userQueryRoute
