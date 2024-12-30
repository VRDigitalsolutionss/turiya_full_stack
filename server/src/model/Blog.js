


const mongoose = require("../config/db"); 



const blogSchema = new mongoose.Schema({
    blogHeading: {
        type: String,
        required: true, 
        trim: true,    
    },
    blogContent: {
        type: String,
        required: true, 
        trim: true,
    },
    blogImage: {
        type: String,
    required:false,
       
    },
    status: {
        type: String,
        trim: true, 
        default: 'active',
    
}
}, {
    timestamps: true, 
});


const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;


