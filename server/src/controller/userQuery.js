const UserQuery = require("../model/UserQuery");
const nodemailer = require("nodemailer");

const addUserQuery = async (req, res) => {
  try {
    const { name, number, email, message } = req.body;

    const newUserQuery = new UserQuery({
      name,
      number,
      email,
      message,
    });

    // Save to database
    await newUserQuery.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Turiyoga Notifications" <${process.env.EMAIL_USER}>`,
      to: "info@turiyoga.com",
      subject: 'New User Query Received',
      html: `
          <h2>New User Query</h2>
          <p><strong>Name: </strong> ${name}</p>
          <p><strong>Number: </strong> ${number}</p>
          <p><strong>Email: </strong> ${email}</p>
          <p><strong>Message: </strong></p> ${message}
          <p>This is an automated email. Please do not reply.</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: 'User query added successfully!',
      data: newUserQuery,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user query', error: error.message });
  }
};


const deleteUserQuery = async (req, res) => {


  try {
    const { id } = req.params; // Extract the ID from the route parameter

    const deletedQuery = await UserQuery.findOneAndDelete(id);
    console.log("hi===============================================")
    if (!deletedQuery) {
      return res.status(404).json({ message: 'User query not found' });
    }

    res.status(200).json({
      message: 'User query deleted successfully!',
      data: deletedQuery,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user query', error: error.message });
  }
};

const userQuery = (req, res) => {
  UserQuery.find().then((data) => {
    res.status(200).json({ success: true, data })
  }).catch((error) => {
    res.status(500).json({ success: false, error: error.message })
  })
}


const userQueries = (req, res) => {
  UserQuery.find().then((data) => {

    if (data.length > 0) {
      res.status(200).json({ success: true, data: data.length })
    } else {
      res.status(400).json({ success: false, message: "no query found" })
    }

  }).catch((error) => {
    res.status(500).json({ success: false, error: error.message })
  })
}
module.exports = {
  userQuery,
  addUserQuery,
  deleteUserQuery,
  userQueries
};


