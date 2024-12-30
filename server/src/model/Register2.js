const mongoose = require("../config/db"); 

const otherAddressschema = new mongoose.Schema({
    userType: {
        type: String,
        trim: true,   
    },
    company: {
        type: String,
        trim: true,    
    },
    email: {
        type: String,
        trim: true,
    },
    phone: {
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
    }
}, {
    timestamps: true, 
});


const OtherAddress = mongoose.model("OtherAddress", otherAddressschema);

module.exports = OtherAddress;


