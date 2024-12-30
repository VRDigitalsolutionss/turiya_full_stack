
const bcrypt = require('bcrypt');

var jwt = require("jsonwebtoken");
const User = require('../model/User');

const loginController = (req, res) => {
    // console.log("LoginController",req.body);
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user !== null) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({ user: req.body.email }, "rishuam", {
            expiresIn: "1d",
          });

          res.status(200).json({
            msg: "User Logged Successfully",
            token,
            user,
          });
        } else {
          res.status(403).json({
            msg: "invalid credential",
            error,
          });
        }
      } else {
        res.status(200).json({
          msg: "User is not Registered"
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

const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find user by _id
    const user = await User.findById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }}

module.exports = { loginController,getUserDetails };
