
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
var jwt = require("jsonwebtoken");
const RegisteredUser = require("../model/Register");


// const loginController = (req, res) => {
//     // console.log("LoginController",req.body);
//     RegisteredUser.findOne({ email: req.body.email })
//         .then((user) => {


//             if (user !== null) {



//                 console.log("req.body.password", req.body.password);
//                 console.log("user.create_password", user.create_password);
//         if (bcrypt.compareSync(req.body.password, user.create_password)) {



//           const token = jwt.sign({ user: req.body.email }, "rishuam", {
//             expiresIn: "1d",
//           });

//           res.status(200).json({
//             msg: "User Logged Successfully",
//             token,
//             user,
//           });
//         } else {
//           res.status(403).json({
//             msg: "invalid credential",
//             error,
//           });
//         }
//       } else {
//         res.status(200).json({
//           msg: "User is not Registered"
//         });
//       }
//     })
//     .catch((error) => {
//       res.status(400).json({
//         msg: "internal server error",
//         error,
//       });
//     });
// };

// ============================================================




const loginController = (req, res) => {
  // Log the incoming request body
  console.log("Request body:", req.body);

  // Look for the user by email
  RegisteredUser.findOne({ email: req.body.email })
    .then((user) => {
      if (user !== null) {

        // console.log("Request body password:", req.body.password);
        // console.log("User password (hashed):", user.create_password);

        // Compare the passwords
        const isPasswordValid = bcrypt.compareSync(req.body.password, user.create_password);
        // console.log("bcrypt compare result:", isPasswordValid);

        if (isPasswordValid) {
          const token = jwt.sign({ user: req.body.email }, process.env.secretKey, {
            expiresIn: "1d",
          });

          const verificationToken = jwt.sign(
            { email: req.body.email }, // Payload
            process.env.secretKey, // Secret key
            { expiresIn: '1h' } // Expiration time (optional, here set to 1 hour)
          );

          if (user.isVerified === false) {
            sendConfirmationEmail(user.email, user.First_name, user.Last_name, verificationToken);
            res.status(200).json({
              msg: "Your email is not verified. Please check your email, we have sent you an verification email",
              isVerified: false
            })
          }

          // Respond with the token
          res.status(200).json({
            msg: "User Logged Successfully",
            token,
            user,
            isVerified: true
          });
        } else {
          res.status(403).json({
            msg: "Invalid credentials",
          });
        }
      } else {
        res.status(404).json({
          msg: "User is not registered",
        });
      }
    })
    .catch((error) => {
      console.error('Error:', error);  // Log the error for debugging
      res.status(400).json({
        msg: "Internal server error",
        error: error.message || error,
      });
    });
};

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
          <p>Hallo, ${firstName + " " + lastName}</p>
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


const getUserDetailById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find user by _id
    const user = await RegisteredUser.findById(userId).populate("otherAddress");
    ;

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}



module.exports = { loginController, getUserDetailById };
