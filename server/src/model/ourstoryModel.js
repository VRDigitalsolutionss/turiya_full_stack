const mongoose = require("../config/db"); 

const ourstoryschema = new mongoose.Schema({
    Slider_Heading: {
        type: String,
        required: true, 
        trim: true,    
    },
    Slider_Paragraph: {
        type: String,
        required: true, 
        trim: true,
    },
    Slider_videolink: {
        type: String,
        required: true, 
        trim: true,
    },
    Slide_Image: {
        type: String,
        required: true, 
        trim: true,
    },
    about_First_Section_heading: {
        type: String,
        required: true, 
        trim: true,
    },
    about_First_Section_Sub_Peragraph: {
        type: String,
        required: true, 
        trim: true,
    },
    about_First_Section_Peragraph_Content: {
        type: String,
        required: true, 
        trim: true,
    },
    about_Second_Section_Heading: {
        type: String,
        required: true, 
        trim: true,
    },
    about_Second_Section_Sub_Peragraph: {
        type: String,
        required: true, 
        trim: true,
    },
    about_Second_Section_Peragraph_Content: {
        type: String,
        trim: true,
    },
    meta_Title: {
        type: String,
        required: true, 
        trim: true,
    },
    meta_Description: {
        type: String,
        required: true, 
        trim: true,
    },
    meta_Keywords: {
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


const Ourstory = mongoose.model("Our_story", ourstoryschema);

module.exports = Ourstory;


