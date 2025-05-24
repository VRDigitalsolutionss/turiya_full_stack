const Room = require("../../model/addroomModel");

// **Add Room**
const addRoom = async (req, res) => {
    try {
        const { RoomOffers, RoomPrice } = req.body;

        if (!RoomOffers || !RoomPrice) {
            return res.status(400).json({
                success: false,
                message: "RoomOffers and RoomPrice are required",
            });
        }

        const newRoom = new Room({ RoomOffers, RoomPrice });
        const savedRoom = await newRoom.save();

        res.status(201).json({
            success: true,
            message: "Room added successfully",
            data: savedRoom,
        });
    } catch (error) {
        console.error("Error adding room:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add room",
            error: error.message,
        });
    }
};

// **Edit Room**
const editRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found",
            });
        }

        const updatedRoom = await Room.findByIdAndUpdate(id, updateFields, { new: true });

        res.status(200).json({
            success: true,
            message: "Room updated successfully",
            data: updatedRoom,
        });
    } catch (error) {
        console.error("Error editing room:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update room",
            error: error.message,
        });
    }
};

// **Delete Room**
const deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;

        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found",
            });
        }

        await Room.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Room deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting room:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete room",
            error: error.message,
        });
    }
};

// **Get All Rooms**
const getAllRooms = async (req, res) => {
    try {
        const { moduleId } = req.params; // Get moduleId from query parameters

        // Query to find rooms
        const query = moduleId ? { moduleId } : {};
        const rooms = await Room.find(query);

        // console.log(rooms)

        res.status(200).json({
            success: true,
            data: rooms,
        });
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch rooms",
            error: error.message,
        });
    }
};

// **Toggle Room Status** (New)
const toggleRoomStatus = async (req, res) => {
    try {
        const { id } = req.params;  // Get room ID from URL params

        // Find the room by ID
        const room = await Room.findById(id);

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found",
            });
        }

        // Toggle the room's status between active and inactive
        room.status = room.status === "active" ? "inactive" : "active";

        // Save the updated room status
        await room.save();

        res.status(200).json({
            success: true,
            message: "Room status updated successfully",
            data: room,
        });
    } catch (error) {
        console.error("Error toggling room status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle room status",
            error: error.message,
        });
    }
};

// **Get Room By ID** (New)
const getRoomById = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the room by ID
        const room = await Room.findById(id);

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found",
            });
        }

        res.status(200).json({
            success: true,
            data: room,
        });
    } catch (error) {
        console.error("Error fetching room by ID:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch room",
            error: error.message,
        });
    }
};

module.exports = {
    addRoom,
    editRoom,
    deleteRoom,
    getAllRooms,
    toggleRoomStatus,  // Export toggle function
    getRoomById,       // Export get room by ID function
};