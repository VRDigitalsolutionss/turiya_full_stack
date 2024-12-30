
const Module = require('../../model/addmodule');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const Meal = require('../../model/addmealModel');
const Room = require('../../model/addroomModel');


const addRoomAndUpdateModule = async (req, res) => {
  try {

    console.log("req.body",req.body)
    const { moduleId, RoomOffers, RoomPrice, status } = req.body;

    // Step 1: Create the Room
    const newRoom = new Room({
      moduleId, 
      RoomOffers,
      RoomPrice,
      status,
    });

    // Save the Room
    await newRoom.save();

    // Step 2: Find the Module and update it with the newly created roomId
    const updatedModule = await Module.findByIdAndUpdate(
      moduleId,
      { room: newRoom._id }, // Update the room reference in the module
     // Return the updated module
    );

    if (!updatedModule) {
      return res.status(404).json({
        success: false,
        message: "Module not found with the given moduleId",
      });
    }

    res.status(201).json({
      success: true,
      message: "Room added and Module updated successfully",
      data: updatedModule,
    });
  } catch (error) {
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

      // Step 1: Find and delete the Room by its ID
      const roomToDelete = await Room.findByIdAndDelete(roomId);
      if (!roomToDelete) {
          return res.status(404).json({
              success: false,
              message: "Room not found with the given roomId",
          });
      }

      res.status(200).json({
          success: true,
          message: "Room deleted successfully",
          data: roomToDelete, // Optionally return the deleted room's details
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
