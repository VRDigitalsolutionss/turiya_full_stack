const express = require('express');
const { add_ProfileQuery, get_profile_query } = require('../controller/ProfileQueryController');
const profileRoute = express.Router();




// ===================================== latest change  =================================



// Add a new module add_ProfileQuery,get_profile_query
// moduleRoute.post('/add_module', addModule);
profileRoute.post('/add_profile_query', add_ProfileQuery);
profileRoute.post('/get_profile_query', get_profile_query);


module.exports=profileRoute