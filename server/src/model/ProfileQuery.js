


const mongoose = require("../config/db"); 

const ProfileQuerySchema = new mongoose.Schema({
    transportMode: {
        type: String,
        trim: true,
    },
    arrivalTime: {
        type: String,
        trim: true,
    },
    taxi: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true, 
});


const ProfileQuery = mongoose.model("ProfileQuery", ProfileQuerySchema);

module.exports = ProfileQuery;
