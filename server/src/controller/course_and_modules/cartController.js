
const { default: mongoose } = require('mongoose');
const Module = require('../../model/addmodule');
const Cart = require('../../model/Cart');

const storeModuleId = async (req, res) => {
  try {
    const { moduleId,userId } = req.body;

    if (!moduleId || !userId) {
      return res.status(400).json({ error: "Module ID and userId are required." });
    }

    // Check if the module exists
    const moduleExists = await Module.findById(moduleId);
    if (!moduleExists) {
      return res.status(404).json({ error: "Module not found." });
    }

    // Store the module ID
    const newReference = new Cart({ moduleId,userId });
    await newReference.save();

    res.status(200).json({
      message: "Module ID and userId stored successfully.",
      data: newReference,
    });
  } catch (error) {
    console.error("Error storing module ID and userId", error);
    res.status(500).json({ error: "Failed to store module ID. userId" });
  }
};


const getAllModules = async (req, res) => {
    try {
      const references = await Cart.find().populate("moduleId"); // Populate module data
  
      if (references.length === 0) {
        return res.status(404).json({ error: "No modules found." });
      }
  
      res.status(200).json({
        message: "Modules retrieved successfully.",
        data: references,
      });

      
    } catch (error) {
      console.error("Error retrieving modules:", error);
      res.status(500).json({ error: "Failed to retrieve modules." });
    }
};


const getAllModuleWithId = async (req, res) => {
  try {
    const { userId } = req.params; // Extract userId from request parameters

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid or missing userId' });
    }

    // Query to find Cart entries where userId matches the given parameter
    const references = await Cart.find({ userId }).populate("moduleId"); // Populate module data

    // if (references.length === 0) {
    //   return res.status(404).json({ error: "No modules found for the given user." });
    // }

    // res.status(200).json({
    //   message: "Modules retrieved successfully.",
    //   data: references,
    // });
     return res.status(200).json({
      success: true,
      data: references,
      message: references.length === 0 ? 'No modules found for the specified user.' : undefined
    });
  } catch (error) {
    console.error("Error retrieving modules:", error);
    res.status(500).json({ error: "Failed to retrieve modules." });
  }
};
  
// Delete a module
const deleteCart = async (req, res) => {
  try {
      const { id } = req.params;

      // Fetch the module by ID
      const module = await Cart.findById(id);
      if (!module) {
          return res.status(404).json({
              success: false,
              message: 'cart not found',
          });
      }

      // Debugging: Check the current image field value
      

      // Check and remove the associated image from the uploads folder
      

      // Delete the module from the database
      await Cart.findByIdAndDelete(id);

      res.status(200).json({
          success: true,
          message: 'Cart deleted successfully, along with its associated image (if any).',
      });
  } catch (error) {
      console.error('Error deleting module:', error);
      res.status(500).json({
          success: false,
          message: 'Failed to delete module',
          error: error.message,
      });
  }
};



  module.exports={storeModuleId,getAllModules,deleteCart,getAllModuleWithId,}