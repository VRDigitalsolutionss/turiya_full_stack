// const [category, setCategory] = useState("");
// const [question, setQuestion] = useState("");
// const [answer, setAnswer] = useState("");
// const [submittedData, setSubmittedData] = useState(null);









const mongoose = require("../config/db"); 


const faqCategorySchema = new mongoose.Schema({
    faqCategory: {
        type: String,
        required: true, 
        trim: true,    
    } ,status: {
        type: String,
        trim: true, 
        default: 'active',
    
}
   
}, {
    timestamps: true, 
});


const FAQCategory = mongoose.model("FAQCategory", faqCategorySchema);

module.exports = FAQCategory;
