const { mongoose } = require("mongoose");
require("dotenv").config();

// mongoose.connect(process.env.mongo_DB_URL).then((d) => { 5CvPByxENO1NcHzV
// mongoose.connect('mongodb+srv://rishuam120:rishuam@cluster1.wevrnmq.mongodb.net/').then((d) => {
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log("error", error);
  });

module.exports = mongoose;
