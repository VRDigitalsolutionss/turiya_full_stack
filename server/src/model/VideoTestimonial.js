


const mongoose = require("../config/db"); 

const videoTestimonialSchema = new mongoose.Schema({
    feedbackType: {
        type: String,
       
        trim: true,    
    },
    youtubeLink: {
        type: String,
        
        trim: true,
    },
    feedbackContent: {
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


const VideoTestimonial = mongoose.model("VideoTestimonial", videoTestimonialSchema);

module.exports = VideoTestimonial;


