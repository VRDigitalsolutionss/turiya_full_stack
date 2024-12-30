require("dotenv").config();
const nodemailer = require("nodemailer");



const forgotPasswordController = async (req, res) => {
    const { email } = req.body;
  
    // ==============================================================================================
    
// Set up transporter for Nodemailer
const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email provider (e.g., Gmail, Outlook)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


    // ===========================================================================================================================

    const resetLink = `http://localhost:3000/reset_password`;
  //   const resetLink = `https://yourapp.com/reset-password?token=${resetToken}`;
      
      
    if (!email || !resetLink) {
      return res.status(400).json({ message: "Email and reset link are required" });
    }
  
    try {
      // Configure the email details
      const mailOptions = {
        from: `"Support Team" <${process.env.EMAIL_USER}>`, // Sender address
        to: email, // Receiver's email
        subject: "Reset Your Password", // Subject line
        html: `
          <p>Hello,</p>
          <p>Click the link below to reset your password:</p>
          <a href="${resetLink}" style="color: blue; text-decoration: underline;">Reset Password</a>
          <p>If you did not request a password reset, please ignore this email.</p>
        `,
      };
  
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Reset password email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email", error: error.message });
    }
}
  

module.exports = {forgotPasswordController}