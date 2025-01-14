const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer"); // Import Nodemailer
const RegisteredUser = require("../model/Register");

const registerController = (req, res) => {

    RegisteredUser.findOne({ email: req.body.email })
      .then((user) => {
        if (user == null) {
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(req.body.create_password, salt);
            req.body.create_password = hash;

            const createUser = new RegisteredUser(req.body);

            createUser
              .save()
              .then((data) => {
                // Send registration confirmation email
                sendConfirmationEmail(req.body.email)
                  .then(() => {
                    res.status(201).json({
                      msg: "User Registered Successfully, Confirmation email sent!",
                      data: createUser
                    });
                  })
                  .catch((error) => {
                    res.status(400).json({
                      msg: "Error sending confirmation email",
                      error,
                    });
                  });
              })
              .catch((error) => {
                res.status(400).json({
                  msg: "Internal server error",
                  error,
                });
              });
        } else {
            res.status(401).json({
              message: "Already registered"
            });
        }
      })
      .catch((error) => {
        res.status(400).json({
          msg: "Internal server error",
          error
        });
      });
};

// Function to send email using Nodemailer
const sendConfirmationEmail = async (email) => {
  // Create a transporter object using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Change to your email service provider (e.g., 'gmail', 'hotmail', etc.)
    auth: {
      user: 'your-email@gmail.com', // Your email address
      pass: 'your-email-password', // Your email password (use environment variables for security)
    }
  });

  // Email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Registration Successful',
    text: 'Thank you for registering with us. Your account has been successfully created.',
    html: '<h1>Registration Successful</h1><p>Thank you for registering with us. Your account has been successfully created.</p>',
  };

  // Send the email
  return transporter.sendMail(mailOptions);
};


const getRegisteredUser = (req,res) => {
  RegisteredUser.find().then((users) => {

    if (users.length > 0) {
      res.status(200).json({
        msg: "User details",
        data: users.length
      });
    } else {
      res.status(400).json({
        msg: "User details",
        data: 'user not found'
      });
    }

  }).catch((error) => {
    res.status(400).json({
      msg: "error",
      error: error
    });
  })
}


const getallRegisteredUser = (req,res) => {
  RegisteredUser.find().then((users) => {

    if (users.length > 0) {
      res.status(200).json({
        msg: "User details",
        data: users
      });
    } else {
      res.status(400).json({
        msg: "User details",
        data: 'user not found'
      });
    }

  }).catch((error) => {
    res.status(400).json({
      msg: "error",
      error: error
    });
  })
}

const deleteUser = async (req, res) => {
  try {
      const { id } = req.params;

      const customer = await RegisteredUser.findById(id);
      if (!customer) {
          return res.status(404).json({
              success: false,
              message: "User not found",
          });
      }

      await RegisteredUser.findByIdAndDelete(id);

      res.status(200).json({
          success: true,
          message: "User deleted successfully",
      });
  } catch (error) {
      console.error("Error deleting customer:", error);
      res.status(500).json({
          success: false,
          message: "Failed to delete customer",
          error: error.message,
      });
  }
};

module.exports = { getallRegisteredUser,registerController ,getRegisteredUser, deleteUser};
