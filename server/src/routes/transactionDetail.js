const express = require('express');
const { AddTransactionDetail, getTransactionDetail } = require('../controller/sales/transactionDetail');



const transactionDetailRoute = express.Router();


transactionDetailRoute.post('/add_transactionDetail',AddTransactionDetail);
transactionDetailRoute.get('/get_transactionDetail/:transactionId',getTransactionDetail);



module.exports = transactionDetailRoute
