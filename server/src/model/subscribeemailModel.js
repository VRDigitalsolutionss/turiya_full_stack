const mongoose = require("../config/db");

const suscribeSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            trim: true,
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

const SubscribeEmail = mongoose.model("subscribe_email", suscribeSchema);

module.exports = SubscribeEmail;
