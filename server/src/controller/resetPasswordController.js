const User = require("../model/User");

require("dotenv").config();
 // Make sure the User model is correctly imported

const resetPasswordController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the request body
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find the user by email and update the password
    const user = await User.findOneAndUpdate(
      { email: email },
      { password: password }, // Update the password
      { new: true } // Return the updated user
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};



module.exports = { resetPasswordController };
