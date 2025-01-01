const mongoose = require("../config/db"); 

const invoiceschema = new mongoose.Schema({
    
    order_details: {
        type: String,
        required: true, 
        trim: true,    
    },
    product_details: {
        type: String,
        required: true, 
        trim: true,
    },
    customer_details: {
        type: String,
        required: true, 
        trim: true,
    },
    amount_due: {
        type: String,
        required: true, 
        trim: true,
    },
    due_amount: {
        type: String,
        required: true, 
        trim: true,
    },
    payment_status: {
        type: String,
        trim: true,
        default: 'unpaid',
    },
    status: {
        type: String,
        trim: true, 
        default: 'active',   
}
}, {
    timestamps: true, 
});


const Invoice = mongoose.model("invoice", invoiceschema);

module.exports = Invoice;


