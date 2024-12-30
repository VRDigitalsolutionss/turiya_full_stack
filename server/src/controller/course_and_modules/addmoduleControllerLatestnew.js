// controllers/moduleController.js


const Module = require('../../model/addmodule');
const fs = require('fs');
const path = require('path'); // Import the helper function
const { applyOfferPrice } = require('./applyOfferPrice'); // Import the helper function
// const {updatePriceWithOfferPrice} = require('./updatePriceWithOfferPrice'); // Import the helper function
// Create a new Module
const multer = require('multer');


// Existing updatePriceWithOfferPrice controller (if you still need it elsewhere)
const updatePriceWithOfferPrice = async (req, res) => {
    try {
      // Step 1: Get today's date
      const today = new Date();
  
      // Step 2: Find all modules where:
      // - Offerprice exists
      // - OfferEndDate is today or in the future
      const modulesWithActiveOffers = await Module.find({
        Offerprice: { $exists: true, $ne: null },
        OfferEndDate: { $gte: today }
      });
  
      if (modulesWithActiveOffers.length === 0) {
       res.status(404).json({
          success: false,
          message: "No modules with active offers found."
        });
      }
  
      // Step 3: Update the price field with Offerprice for each module
      const updatePromises = modulesWithActiveOffers.map(module => {
        // Only update if the current price is different from Offerprice
        if (module.price !== module.Offerprice) {
          module.price = module.Offerprice;
          return module.save();
        }
        return Promise.resolve();
      });
  
      await Promise.all(updatePromises);
  
      res.status(200).json({
        success: true,
        message: "Prices updated to Offerprice for active offers.",
        data: modulesWithActiveOffers
      });
  
    } catch (error) {
      console.error("Error updating prices with Offerprice:", error);
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: error.message
      });
    }
  };

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../../../uploads/images/module'); // specify the directory for image storage
    },
    filename: (req, file, cb) => {
      // Use the original filename or create a unique name to avoid overwriting
      cb(null, Date.now() + path.extname(file.originalname)); // eg: 1616262250000.jpg
    }
  });
  

  // Initialize multer
  const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // limit file size to 5MB
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = fileTypes.test(file.mimetype);
      if (extname && mimetype) {
        return cb(null, true);
      }
      cb('Error: Only image files are allowed!');
    }
  });


const createModulelatest = async (req, res) => {
  try {
    const { 
      modulecategory, 
      modulesubcategory, 
      moduleheading, 
      Ausbildung, 
      StartDate, 
      EndDate, 
      Location, 
      price, 
      Offerprice, 
      OfferEndDate, 
      Place, 
      AboutCourse, 
      Homepage_cardcontent, 
      status 
    } = req.body;

    let imagePath = req.file ? req.file.path : null;

    const newModule = new Module({
      modulecategory,
      modulesubcategory,
      moduleheading,
      Ausbildung,
      StartDate: StartDate ? new Date(StartDate) : undefined,
      EndDate: EndDate ? new Date(EndDate) : undefined,
      Location,
      price,
      Offerprice,
      OfferEndDate: OfferEndDate ? new Date(OfferEndDate) : undefined,
      Place,
      AboutCourse,
      Homepage_cardcontent,
      status,
      Images: imagePath,
    });

    await newModule.save();

    // Apply Offerprice if applicable
    // await applyOfferPrice(newModule);
    await updatePriceWithOfferPrice(newModule);

    res.status(201).json(newModule);
  } catch (error) {
    console.error("Error creating module:", error);
    res.status(500).json({ message: 'Error creating module', error: error.message });
  }
};

// Get all Modules
const getAllModuleslatest = async (req, res) => {
  try {
    const modules = await Module.find().populate('meal').populate('room'); // Populate if needed
    res.status(200).json(modules);
  } catch (error) {
    console.error("Error retrieving modules:", error);
    res.status(500).json({ message: 'Error retrieving modules', error: error.message });
  }
};

// Update a Module
const updateModulelatest = async (req, res) => {
  try {
    const moduleId = req.params.id;
    const { 
      modulecategory, 
      modulesubcategory, 
      moduleheading, 
      Ausbildung, 
      StartDate, 
      EndDate, 
      Location, 
      price, 
      Offerprice, 
      OfferEndDate, 
      Place, 
      AboutCourse, 
      Homepage_cardcontent, 
      status 
    } = req.body;

    let updatedFields = {
      modulecategory,
      modulesubcategory,
      moduleheading,
      Ausbildung,
      Location,
      price,
      Offerprice,
      Place,
      AboutCourse,
      Homepage_cardcontent,
    };

    // Convert date strings to Date objects if provided
    if (StartDate) updatedFields.StartDate = new Date(StartDate);
    if (EndDate) updatedFields.EndDate = new Date(EndDate);
    if (OfferEndDate) updatedFields.OfferEndDate = new Date(OfferEndDate);

    if (req.file) {
      // If there's a new image, delete the old one
      const module = await Module.findById(moduleId);
      if (module && module.Images) {
        const oldImagePath = module.Images;
        fs.unlink(path.join(__dirname, '../../../uploads/images/module', oldImagePath), (err) => {
          if (err) console.error("Error deleting old image:", err);
        });
      }
      updatedFields.Images = req.file.path; // Set new image path
    }

    const updatedModule = await Module.findByIdAndUpdate(moduleId, updatedFields);

    if (!updatedModule) {
      return res.status(404).json({ message: 'Module not found' });
    }

    // Apply Offerprice if applicable
    // await applyOfferPrice(updatedModule);
    await updatePriceWithOfferPrice(updatedModule);
    res.status(200).json(updatedModule);
  } catch (error) {
    console.error("Error updating module:", error);
    res.status(500).json({ message: 'Error updating module', error: error.message });
  }
};



module.exports = {
  createModulelatest,
  getAllModuleslatest,
  updateModulelatest,
  updatePriceWithOfferPrice, // Export if needed elsewhere
};
