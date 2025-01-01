const mongoose = require("../config/db"); 

const registerschema = new mongoose.Schema({
    userType: {
        type: String,
        trim: true,   
    },

    company: {
        type: String,
        trim: true,    
    },
    First_name: {
        type: String,
        trim: true,    
    },
    Last_name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    Confirm_email_address : {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        trim: true,
    },
    create_password: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    federal_state: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    postal_code: {
        type: String,
        trim: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    otherAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OtherAddress", // Reference to OtherAddress model
        required: false,
    },
    invoiceType: {          // Add this new field
        type: String,        // It can be a string or any other type you need (e.g., Enum for specific invoice types)
        trim: true,
    },
}, {
    timestamps: true, 
});


const RegisteredUser = mongoose.model("RegisteredUser", registerschema);

module.exports = RegisteredUser;


