require("dotenv").config();
const nodemailer = require("nodemailer");
const RegisteredUser = require("../model/Register");


const forgotPasswordController = async (req, res) => {
  const { email } = req.body;

  try {

    const user = await RegisteredUser.findOne({ email });

    if (!user) return res.status(404).send("User not found");

    // Generate reset token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Send email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

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
    res.status(200).json({ message: "Reset password link sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
}


module.exports = { forgotPasswordController }