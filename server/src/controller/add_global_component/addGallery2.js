
// ===================================== encapsiluate =====================================================


const path = require('path');
const fs = require('fs');
const multer = require('multer');
const Gallery = require('../../model/Gallery'); // Adjust the path if necessary

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '../../../uploads/images/gallery');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Add Gallery Function
const addGallery = async (req, res) => {

  console.log("added",req.body)
  try {
    // Configure Multer for File Upload
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    });

    const upload = multer({ storage }).single('file');

    // Handle the file upload
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'File upload failed',
          error: err.message,
        });
      }

      // Check if file is uploaded
      if (!req.file) {
        return res.status(400).json({ success: false, message: 'File is required' });
      }

      // Construct the file URL
    //   const fileUrl = `http://127.0.0.1:7000/uploads/${req.file.filename}`;
      const sanitizedFilename = req.file.filename.replace(/\s+/g, '');


      const fileUrl = sanitizedFilename;
      // const fileUrl = `http://127.0.0.1:7000/uploads/${sanitizedFilename}`;
      // Extract name from request body
      const { name } = req.body;

      // Validate name field
      if (!name) {
        return res.status(400).json({ success: false, message: 'Name is required' });
      }

      // Create a new gallery entry
      const newGallery = new Gallery({ name, file: fileUrl });

      // Save to the database
      await newGallery.save();

      // Send success response
      res.status(201).json({
        success: true,
        message: 'Gallery added successfully',
        data: newGallery,
      });
    });
  } catch (error) {
    console.error('Error adding gallery:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to add Gallery',
      error: error.message,
    });
  }
};

// Export the function
module.exports = {
  addGallery,
};
