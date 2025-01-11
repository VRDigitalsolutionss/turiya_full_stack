const express = require('express');
const { adminLogin, verifyAdminToken } = require('../controller/adminLogin');
const router = express.Router();

// Admin login route
router.post('/admin-login', adminLogin);
router.post('/verify-admin-token', verifyAdminToken);

module.exports = router;
