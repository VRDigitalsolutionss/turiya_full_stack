const Module = require('../models/Module');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/addmodule'); // specify the directory for image storage
  },
  filename: (req, file, cb) => {
    // Use the original filename or create a unique name to avoid overwriting
    cb(null, Date.now() + path.extname(file.originalname)); // eg: 1616262250000.jpg
  }
});

// Initialize multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // limit file size to 5MB
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

// Create a new Module
const createModule = async (req, res) => {
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
      StartDate,
      EndDate,
      Location,
      price,
      Offerprice,
      OfferEndDate,
      Place,
      AboutCourse,
      Homepage_cardcontent,
      status,
      Images: imagePath,
    });

    await newModule.save();
    res.status(201).json(newModule);
  } catch (error) {
    res.status(500).json({ message: 'Error creating module', error });
  }
};

// Get all Modules
const getAllModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving modules', error });
  }
};

// Update a Module
const updateModule = async (req, res) => {
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
    };

    if (req.file) {
      // If there's a new image, delete the old one
      const module = await Module.findById(moduleId);
      if (module && module.Images) {
        const oldImagePath = module.Images;
        fs.unlinkSync(path.join(__dirname, '../', oldImagePath)); // Delete the old image from the filesystem
      }
      updatedFields.Images = req.file.path; // Set new image path
    }

    const updatedModule = await Module.findByIdAndUpdate(moduleId, updatedFields, { new: true });
    res.status(200).json(updatedModule);
  } catch (error) {
    res.status(500).json({ message: 'Error updating module', error });
  }
};

// Delete a Module
const deleteModule = async (req, res) => {
  try {
    const moduleId = req.params.id;
    const module = await Module.findById(moduleId);
    if (module && module.Images) {
      // Delete the associated image from the server
      fs.unlinkSync(path.join(__dirname, '../', module.Images));
    }

    await Module.findByIdAndDelete(moduleId);
    res.status(200).json({ message: 'Module deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting module', error });
  }
};

module.exports = {
  createModule,
  getAllModules,
  updateModule,
  deleteModule
};
