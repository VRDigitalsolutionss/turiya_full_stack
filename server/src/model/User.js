const {mongoose} = require("../config/db");

const userScema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
      required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  password: {
    type: String,
      required: true,
  },
});

const User = mongoose.model("User", userScema);

module.exports = User;



