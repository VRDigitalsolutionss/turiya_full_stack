

const path = require('path');
const fs = require('fs');
const multer = require('multer');
const Gallery = require('../../model/Gallery'); // Adjust the path if necessary

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '../../../uploads/images/gallery');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Edit Gallery Function
const editGallery = async (req, res) => {
  console.log("edit request", req.body);
  try {
    // Get the gallery ID from the request parameters
    const { id } = req.params;

    // Search for the existing gallery entry
    const gallery = await Gallery.findById(id);

    if (!gallery) {
      return res.status(404).json({ success: false, message: 'Gallery not found' });
    }

    // Configure Multer for File Upload
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    });

    const upload = multer({ 
      storage,
      limits: { fileSize: 10 * 1024 * 1024 }, 
    }).single('file');

    // Handle the file upload
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'File upload failed',
          error: err.message,
        });
      }

      // If a new file is uploaded, construct the new file URL
      let fileUrl = gallery.file; // Use the existing file URL if no new file is uploaded
      if (req.file) {
        // If a new file is uploaded, delete the old file if it exists
        if (gallery.file) {
          const oldFilePath = path.join(__dirname, '../uploads', gallery.file.split('/').pop());
          if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath); // Delete the old file
          }
        }

        // Sanitize filename and construct new file URL
        const sanitizedFilename = req.file.filename.replace(/\s+/g, '');

        fileUrl = sanitizedFilename;
        // fileUrl = `http://127.0.0.1:7000/uploads/${sanitizedFilename}`;
      }

      // Extract the name field from the request body
      const { name } = req.body;

      // Validate the name field
      if (!name) {
        return res.status(400).json({ success: false, message: 'Name is required' });
      }

      // Update the gallery entry with the new name and file URL
      gallery.name = name;
      gallery.file = fileUrl;

      // Save the updated gallery entry to the database
      await gallery.save();

      // Send success response
      res.status(200).json({
        success: true,
        message: 'Gallery updated successfully',
        data: gallery,
      });
    });
  } catch (error) {
    console.error('Error editing gallery:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to edit Gallery',
      error: error.message,
    });
  }
};

// Export the function
module.exports = {
  editGallery,
};
