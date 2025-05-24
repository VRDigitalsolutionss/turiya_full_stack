const express = require('express');
const { addreports, reports, deleteReport} = require('../controller/reports')



const reportRoute = express.Router();


reportRoute.post('/add_report',addreports);
reportRoute.get('/report',reports);
reportRoute.delete('/delete_report/:id',deleteReport);





module.exports = reportRoute
