const express = require("express");
const {
    addRoom,
    editRoom,
    deleteRoom,
    getAllRooms,
    toggleRoomStatus,  // Add toggle status route
    getRoomById,       // Add get room by ID route
} = require("../controller/course_and_modules/addroomController");
const { addRoomAndUpdateModule, deleteRoomAndRemoveFromModule } = require("../controller/course_and_modules/addRoomLatest");

const roomRoutes = express.Router();

// Add a new room
roomRoutes.post("/add_room", addRoomAndUpdateModule);

// Edit a room
roomRoutes.put("/edit_room/:id", editRoom);

// Delete a room
roomRoutes.delete("/delete_room/:id", deleteRoom);

// Get all rooms
roomRoutes.get("/all_rooms/:moduleId", getAllRooms);

// Toggle room status (new route)
roomRoutes.put("/toggle_room_status/:id", toggleRoomStatus);  // This is a PUT request

// Get a single room by ID (new route)
roomRoutes.get("/get_room/:id", getRoomById);  // This is a GET request

module.exports = roomRoutes;
