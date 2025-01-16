// Import the Mongoose model

const Contact = require("../../model/contact");

// Add a new yoga center


const multer = require("multer");
const path = require("path");
const fs = require("fs");


// Configure Multer for single image upload (for Contact image)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../../../uploads/images/contact_image");
    // Ensure the directory exists, if not create it
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir); // Set the upload directory
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); // Set the unique file name
  },
});

// File filter to allow only image types (JPEG, PNG, etc.)
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|webp/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG, JPG, PNG, and WEBP files are allowed!"));
    }
  },
}).single("image"); // Image field name in the form (e.g., 'image')

// Add new contact with image upload
const addcontact = async (req, res) => {
  try {
    // Use Multer to upload the image file
    upload(req, res, async (err) => {
      if (err) {
        console.error("Multer Error:", err);
        return res.status(500).json({
          success: false,
          message: "Image upload failed",
          error: err.message,
        });
      }

      // Extract form data from request body
      const {
        name,
        contactPerson,
        address,
        phone,
        email,
        description,
        instructions,
      } = req.body;

      // If an image was uploaded, the path to the image is available in `req.file.path`
      const image = req.file ? req.file.path : null;
console.log("Image",req.file)
      // Create a new contact document
      const addcontactDetail = new Contact({
        name,
        contactPerson,
        address,
        phone,
        email,
        description,
        instructions,
        image, // Save image path
      });

      // Save to the database
      await addcontactDetail.save();

      res.status(201).json({
        message: "Contact added successfully!",
        data: addcontactDetail,
      });


      
    });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({
      success: false,
      message: "Error adding contact",
      error: error.message,
    });
  }
};



// =======================================================

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../../../uploads/images/contact_image");
    // Ensure the directory exists, if not create it
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir); // Set the upload directory
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); // Set the unique file name
  },
});

// File filter to allow only image types (JPEG, PNG, etc.)
const upload2 = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|webp/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG, JPG, PNG, and WEBP files are allowed!"));
    }
  },
}).single("image"); // Image field name in the form (e.g., 'image')


const addcontact2 = async (req, res) => {
  try {
    const {
      name,
      contactPerson,
      address,
      phone,
      email,
      description,
      instructions,
      image,
    } = req.body;

    // Create a new yoga center
    const addcontactDetail = new Contact({
      name,
      contactPerson,
      address,
      phone,
      email,
      description,
      instructions,
      image,
    });

    // Save to database
    await addcontactDetail.save();
    res.status(201).json({
      message: "Yoga center added successfully!",
      data: addcontactDetail,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding yoga center", error: error.message });
  }
};






// Edit an existing yoga center
const editcontact = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the route parameter
    const { name, contactPerson, address, phone, email, description } =
      req.body;

    // Find and update the yoga center
    const updateContact = await Contact.findByIdAndUpdate(
      id,
      { name, contactPerson, address, phone, email, description },
      { new: true } // Return the updated document
    );

    if (!updateContact) {
      return res.status(404).json({ message: "Yoga center not found" });
    }

    res.status(200).json({
      message: "Yoga center updated successfully!",
      data: updateContact,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating yoga center", error: error.message });
  }
};

const getallcontact = async (req, res) => {

  try {


    // Ensure the id is a valid MongoDB ObjectId
    

    // Query the database by _id
    const data = await Contact.find();
    console.log("contact")

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "data not found" });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;

    // Ensure the id is a valid MongoDB ObjectId
    if (!id) {
      return res.status(400).json({ success: false, message: "id not found" });
    }

    // Query the database by _id
    const data = await Contact.findByIdAndDelete(id);

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "data not found" });
    }

    res.status(200).json({ message: "contact deleted successfully" ,success: true, data });
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};


const getContact = async (req, res) => {
  try {
    const id = req.params.id;

    // Ensure the id is a valid MongoDB ObjectId
    if (!id) {
      return res.status(400).json({ success: false, message: "id not found" });
    }

    // Query the database by _id
    const data = await Contact.findById(id);

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "data not found" });
    }

    res.status(200).json({ message: "contact" ,success: true, data });
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}


module.exports = {
  getallcontact,
  addcontact,
  editcontact,
  deleteContact,
  getContact
};
