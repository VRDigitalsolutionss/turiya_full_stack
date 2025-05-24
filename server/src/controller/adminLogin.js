
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const AdminLogin = require('../model/adminLogin');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Admin login
const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await AdminLogin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }


    // Verify password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const verifyAdminToken = async (req,res) => {
  const {token} = req.body;
  try{
    const decoded = jwt.verify(token, JWT_SECRET);
    const {email, role} = decoded;

    if(role !== 'admin'){
      return res.status(401).json({message: 'Unauthorized'});
    }

    const admin = await AdminLogin.findOne({email: email});
    if(!admin){
      return res.status(404).json({message: 'Admin not found'});
    }
    res.status(200).json({message: 'Token verified', admin});
  }catch(error){
    res.status(500).json({message: 'Server error', error: error.message});
  }
}

module.exports = { adminLogin, verifyAdminToken };
