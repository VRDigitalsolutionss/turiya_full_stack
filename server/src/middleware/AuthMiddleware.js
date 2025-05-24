require("dotenv").config();
var jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader) {
    try {
      const token = authHeader.split(" ")[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.secretKey);

        req.user = decoded.email;
        req.token = token;
        next();
      } else {
        res.status(400).json({
          message: "No token found",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "something went wrong",
      });
    }
  } else {
    res.status(400).json({
      message: "No Authorization header found",
    });
  }
};

module.exports = auth;
