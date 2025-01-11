const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const AdminLogin = mongoose.model('Admin', adminSchema);

module.exports = AdminLogin
