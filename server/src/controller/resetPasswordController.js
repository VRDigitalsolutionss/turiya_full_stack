const RegisteredUser = require("../model/Register");

require("dotenv").config();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const resetPasswordController = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if(!token){
      return res.status(400).send("Token is required")
    }

    const decoded = jwt.verify(token, process.env.secretKey);
    if(!decoded){
      return res.status(400).send("Invalid or expired token")
    }

    const user = await RegisteredUser.findOne({ email: decoded.email });
    if (!user) return res.status(404).send("User not found");

    // Update password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.create_password = hashedPassword;
    await user.save();

    res.status(200).send("Password reset successfully");
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(500).send(
      error.message
    );
  }
};



module.exports = { resetPasswordController };
