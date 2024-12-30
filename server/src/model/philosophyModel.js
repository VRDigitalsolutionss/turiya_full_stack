const mongoose = require("../config/db"); 

const ourphilosophyschema = new mongoose.Schema({
    Slider_Heading: {
        type: String,
        trim: true,    
    },
    Slider_Paragraph: {
        type: String,
        trim: true,
    },
    Slider_videolink: {
        type: String,
        trim: true,
    },
    Slide_Image: {
        type: String,
        trim: true,
    },
    about_First_Section_heading: {
        type: String,
        trim: true,
    },
    about_First_Section_Sub_Peragraph: {
        type: String,
        trim: true,
    },
    about_First_Section_Peragraph_Content: {
        type: String,
        trim: true,
    },
    about_Second_Section_Heading: {
        type: String,
        trim: true,
    },
    about_Second_Section_Sub_Peragraph: {
        type: String,
        trim: true,
    },
    about_Second_Section_Peragraph_Content: {
        type: String,
        trim: true,
    },
    meta_Title: {
        type: String,
        trim: true,
    },
    meta_Description: {
        type: String,
        trim: true,
    },
    meta_Keywords: {
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


const OurPhilosophy = mongoose.model("our_philosophy", ourphilosophyschema);

module.exports = OurPhilosophy;


