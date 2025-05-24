const mongoose = require("../config/db");

const moduleSchema = new mongoose.Schema({
    modulecategory: {
        type: String,
        required: false,
        trim: true,
    },
    modulesubcategory: {
        type: String,
        required: false,
        trim: true,
    },
    moduleheading: {
        type: String,
        required: false,
        trim: true,
    },
    modulesubheading: {
        type: String,
        required: false,
        trim: true,
    },
    Ausbildung: {
        type: String,
        required: false,
        trim: true,
    },
    StartDate: {
        type: String,
        required: false,
        trim: true,
    },
    EndDate: {
        type: String,
        required: false,
        trim: true,
    },
    Location: {
        type: String,
        required: false,
        trim: true,
    },
    price: {
        type: String,
        required: false,
        trim: true,
    },
    Offerprice: {
        type: String,
        required: false,
        trim: true,
    },
    OfferEndDate: {
        type: String,
        required: false,
        trim: true,
    },
    Place: {
        type: String,
        required: false,
        trim: true,
    },
    AboutCourse: {
        type: String,
        required: false,
        trim: true,
    },
    Homepage_cardcontent: {
        type: String,
        required: false,
        trim: true,
    },
    Images: {
        type: String,
        required: false,
        trim: true,
    },
    redirectUrl: {
        type: String,
        required: false,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
        default: 'active',
    },
    availableMeals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "meal",
        },
    ],
    availableRooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "room",
        },
    ],
}, {
    timestamps: true,
    strictPopulate: false,
});


const Module = mongoose.model("module", moduleSchema);

module.exports = Module;


