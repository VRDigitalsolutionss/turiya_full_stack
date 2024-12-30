


const mongoose = require("../config/db"); 


const gallerySchema = new mongoose.Schema({
    file: {
        type: String,
        required: true, 
        trim: true,    
    },
    name: {
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


const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;


