


const mongoose = require("../config/db"); 


const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true,    
    },
    designation: {
        type: String,
        required: true, 
        trim: true,
    },
    feedbackContent: {
        type: String,
        required: true, 
        trim: true,
    },
    profileImage: {
        type: String,
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


const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;


