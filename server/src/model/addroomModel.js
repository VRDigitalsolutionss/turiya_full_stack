const mongoose = require("../config/db");

const roomSchema = new mongoose.Schema(
    {
        moduleId: {
            type: String,
            required: true,
            trim: true,
        },
        RoomOffers: {
            type: String,
            required: true,
            trim: true,
        },
        RoomPrice: {
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
        strictPopulate: false,
    }
);

const Room = mongoose.model("room", roomSchema);

module.exports = Room;
