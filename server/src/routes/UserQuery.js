const express = require('express');
const { addUserQuery, deleteUserQuery, userQuery, userQueries, addUserQueryGermany } = require('../controller/userQuery');




const userQueryRoute = express.Router();


userQueryRoute.post('/add_query',addUserQuery);
userQueryRoute.post('/add_query_germany',addUserQueryGermany);

userQueryRoute.delete('/delete_query/:id',deleteUserQuery);
userQueryRoute.get('/user_query',userQuery);
userQueryRoute.get('/userQueries',userQueries)


module.exports = userQueryRoute
