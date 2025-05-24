
const Module = require('../../model/addmodule');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const Meal = require('../../model/addmealModel');
const Room = require('../../model/addroomModel');


const addRoomAndUpdateModule = async (req, res) => {
  try {

    const { moduleId, RoomOffers, RoomPrice, status } = req.body;

    if (!moduleId || !RoomOffers || !RoomPrice) {
      return res.status(400).json({
        success: false,
        message: "moduleId, RoomOffers, and RoomPrice are required",
      });
    }

    // Create a new room
    const newRoom = await Room.create({
      moduleId,
      RoomOffers,
      RoomPrice,
      status: status || "active",
    });

    // Update the corresponding module to add the room to availableRooms
    const updatedModule = await Module.findByIdAndUpdate(
      moduleId,
      { $push: { availableRooms: newRoom._id } },
      { new: true } // Return the updated module
    );

    if (!updatedModule) {
      return res.status(404).json({
        success: false,
        message: "Module not found",
      });
    }

    // Respond with success
    res.status(201).json({
      success: true,
      message: "Room added and module updated successfully",
      data: { room: newRoom, module: updatedModule },
    });


  } catch (error) {
    console.error("Error adding room and updating module:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to add room and update module",
      error: error.message,
    });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params; // Extract roomId from route parameters

    if (!roomId) {
      return res.status(400).json({
        success: false,
        message: "roomId is required",
      });
    }

    // Find the room to get its associated moduleId
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    // Delete the room from the Room collection
    await Room.findByIdAndDelete(roomId);

    // Remove the room from the associated module's availableRooms array
    await Module.findByIdAndUpdate(
      room.moduleId,
      { $pull: { availableRooms: roomId } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Room deleted successfully and module updated",
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




module.exports = { addRoomAndUpdateModule, deleteRoom };
