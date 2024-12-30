


const mongoose = require("../config/db"); 


const reportSchema = new mongoose.Schema({

        orderId: {
            type: String,
            required: true,
            trim: true,
        },
        orderDate:{
            type: String,
            required: true,
            trim: true,
        },
        orderTime: {
            type: String,
            required: true,
            trim: true,
        },
        comingFrom: {
            type: String,
            required: true,
            trim: true,
        },
        trainNo: {
            type: String,
            required: true,
            trim: true,
        },
        departure: {
            type: String,
            required: true,
            trim: true,
        },
        arrival: {
            type: String,
            required: true,
            trim: true,
        },
        arrivalTime: {
            type: String,
            required: true,
            trim: true,
        },
        taxiTime: {
            type: String,
            required: true,
            trim: true,
        },
        customerDetails: {
            type: String,
            required: true,
            trim: true,
        },
    
   
}, {
    timestamps: true, 
});


const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
