
const bcrypt = require('bcrypt');

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
          const token = jwt.sign({ user: req.body.email }, "rishuam", {
            expiresIn: "1d",
          });

          console.log("Generated Token:", token);

          // Respond with the token
          res.status(200).json({
            msg: "User Logged Successfully",
            token,
            user,
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
  }}



module.exports = { loginController,getUserDetailById };
