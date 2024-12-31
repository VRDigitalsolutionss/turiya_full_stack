const RegisteredUser = require("../model/Register");

require("dotenv").config();
// Make sure the User model is correctly imported

const resetPasswordController = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if(!token){
      return res.status(400).json({message: "Token is required"})
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
      return res.status(400).json({message: "Invalid or expired token"})
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
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};



module.exports = { resetPasswordController };
