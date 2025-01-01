const bcrypt = require("bcrypt");
const RegisteredUser = require("../model/Register");
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer"); // Import Nodemailer
// const mailLogo = require('../uploads/images/mail_Logo/logo.png');
const registerController = (req, res) => {
  // console.log("register",req.body)
  RegisteredUser.findOne({ email: req.body.email })
    .then((user) => {
      if (user == null) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.create_password, salt);
        req.body.create_password = hash;
        // console.log("user",user)
        const createUser = new RegisteredUser(req.body);

        const verificationToken = jwt.sign(
          { email: req.body.email }, // Payload
          process.env.secretKey, // Secret key
          { expiresIn: '1h' } // Expiration time (optional, here set to 1 hour)
        );

        createUser
          .save()
          .then((data) => {
            sendConfirmationEmail(req.body.email, req.body.First_name, req.body.Last_name, verificationToken);

            res.status(201).json({
              msg: "User Registered Successfully",
              data: createUser,
            });
          })
          .catch((error) => {
            console.log(error)
            res.status(400).json({
              msg: "Internal server error",
              error,
            });
          });
      } else {
        res.status(401).json({
          message: "Allready registered",
        });
      }
    })
    .catch((error) => {
      res.status(400).json({
        msg: "internal server error",
        error,
      });
    });
};

// Function to send email using Nodemailer
const sendConfirmationEmail = async (email, firstName, lastName, token) => {
  // Create a transporter object using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "gmail", // Change to your email service provider (e.g., 'gmail', 'hotmail', etc.)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  // const mailOption2 = {
  //   from: process.env.EMAIL_USER,
  //   to: email,
  //   subject: "Registration Successful",
  //   text: "Thank you for registering with us. Your account has been successfully created.",
  //   html: "<h1>Registration Successful</h1><p>Thank you for registering with us. Your account has been successfully created.</p>",
  // };

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "E-Mail-Adresse bestätigen",
    // text: "Hallo, vielen Dank für deine Registrierung! Bitte klicke auf den untenstehenden Link, um deine E-Mail-Adresse zu bestätigen.",
    html: `
      <html>
        <body>
          <p>Hallo ,${firstName + lastName}</p>
          <p>vielen Dank für deine Registrierung! Bitte klicke auf den untenstehenden Link, um deine E-Mail-Adresse zu bestätigen.</p>
          <p><a href="${process.env.CLIENT_URL}/verify-email/${token}">E-Mail-Adresse bestätigen</a></p>
      
          <p>Falls du dich nicht registriert hast, ignoriere bitte diese E-Mail.</p>
       
          <p>Mit freundlichen Grüßen,</p>
          <p><strong>Turiya Yoga Team</strong></p>
          <br>
       
        
        </body>
      </html>
    `,
  };
  // Send the email
  return transporter.sendMail(mailOptions);
};

module.exports = { registerController };
