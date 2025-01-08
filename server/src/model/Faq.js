


const mongoose = require("../config/db");


const faqSchema = new mongoose.Schema({

    // category: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'FAQCategory', // Reference to the FAQCategory model
    //     required: true, 
    // },
    question: {
        type: String,
        required: true,
        trim: true,
    },
    answer: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
        default: 'active',
    }
}, {
    timestamps: true,
});


const FAQ = mongoose.model("FAQ", faqSchema);

module.exports = FAQ;
