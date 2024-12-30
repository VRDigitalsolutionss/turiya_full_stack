const Gallery = require("../../model/Gallery");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// ================================================================================

// Configure Multer for single image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      const uploadDir = path.join(__dirname, "../uploads/");
      cb(null, uploadDir); // Ensure the directory exists
  },
  filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueName); // Unique file name
  },
});


const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png/; // Allow only specific file types
      const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = fileTypes.test(file.mimetype);

      if (extname && mimetype) {
          cb(null, true);
      } else {
          cb(new Error("Only JPEG, JPG, and PNG files are allowed!"));
      }
  },
}).single("file"); // Single file upload field name: "Slide_Image"


// ===================================================================================
const handleAddGallery = async (req, res) => {
  // Use Multer to upload the file
  upload(req, res, async (err) => {
      if (err) {
          console.error("Multer Error:", err);
          return res.status(500).json({
              success: false,
              message: "Image upload failed",
              error: err.message,
          });
      }

      try {
          const {
          name
          } = req.body;

          console.log("Uploaded File:", req.file); // Debugging the uploaded file
          console.log("Request Body:", req.body); // Debugging the request body

          // Validate required fields
          if (
              !name
          ) {
              return res.status(400).json({
                  success: false,
                  message: "Required fields are missing",
              });
          }

          // Get the uploaded file name
          const imageName = req.file ? req.file.filename : null;

          if (!imageName) {
              return res.status(400).json({
                  success: false,
                  message: "gllery_Image is required",
              });
          }

          // Create the new Our Story document
          const newGallery = new Gallery({
             name
          });

          // Save to the database
          const savedGallery = await newGallery.save();

          res.status(201).json({
              success: true,
              message: "Gallery added successfully",
              data: savedGallery,
          });
      } catch (error) {
          console.error("Error adding Our Story:", error);
          res.status(500).json({
              success: false,
              message: "Failed to add Our Story",
              error: error.message,
          });
      }
  });
};


const editGallery = async (req, res) => {
  
  console.log(req.body)
    try {

        const id = req.params.id;
        // Extract data from the request body
        const {  name, file } = req.body;

        // Validate required fields
        if (!name || !file ) {
            return res.status(400).json({
                success: false,
                message: "Name and file are required",
            });
        }

        if (id) {
            // If ID is provided, update the testimonial
            const updatedGallery = await Gallery.findByIdAndUpdate(
                id,
                { name, file }
            );

            if (!updatedGallery) {
                return res.status(404).json({
                    success: false,
                    message: "Gallery not found for update",
                });
            }

            // Send success response for update
            return res.status(200).json({
                success: true,
                message: "Gallery updated successfully",
                data: updatedGallery,
            });
        } else {
            // If no ID is provided, create a new testimonial
            const newGallery = new Gallery({
                name,
             file
            });

            // Save to the database
            await newGallery.save();

            // Send success response for creation
            return res.status(201).json({
                success: true,
                message: "Gallery added successfully",
                data: newGallery,
            });
        }
    } catch (error) {
        // Handle any errors
        res.status(500).json({
            success: false,
            message: "Failed to add or update Gallery",
            error: error.message,
        });
    }
};


const toggleGalleryStatus = async (req, res) => {
    try {
        const { id } = req.params; // Get testimonial ID from URL params

        // Find the testimonial by ID
        const gallery = await Gallery.findById(id);

        if (!gallery) {
            return res.status(404).json({
                success: false,
                message: "Gallery not found",
            });
        }

        // Toggle the status
        gallery.status = gallery.status === "active" ? "inactive" : "active";

        // Save the updated testimonial
        await gallery.save();

        res.status(200).json({
            success: true,
            message: "Gallery status updated successfully",
            data: gallery,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle Gallery status",
            error: error.message,
        });
    }
};



// =============================================================================
// Delete Gallery Function
const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params; // Get the gallery ID from the URL params

    // Validate if ID is provided
    if (!id) {
      return res.status(400).json({ success: false, message: 'Gallery ID is required' });
    }

    // Find the gallery by ID
    const gallery = await Gallery.findById(id);

    // Check if the gallery exists
    if (!gallery) {
      return res.status(404).json({ success: false, message: 'Gallery not found' });
    }

    // Get the file path of the image to delete
    const filePath = path.join(__dirname, '../../uploads/images/gallery', gallery.file);

    // Delete the file from the file system
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // Deletes the file
    } else {
      console.warn(`File not found: ${filePath}`);
    }

    // Delete the gallery entry from the database
    await gallery.deleteOne();

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Gallery deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting gallery:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete Gallery',
      error: error.message,
    });
  }
};




// ====================================================================


const galleries = async (req,res) => {
    Gallery.find().then((data) => {
        res.status(200).json({ success: true, data })
    }).catch((error) => {
        res.status(500).json({ success: false, error: error.message })
    })
}


const gallery = async (req, res) => {
    try {
      const id = req.params.id;
  
      // Ensure the id is a valid MongoDB ObjectId
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ success: false, message: 'Invalid ID format' });
      }
  
      // Query the database by _id
      const data = await Gallery.findById(id);
  
      if (!data) {
        return res.status(404).json({ success: false, message: 'Gallery not found' });
      }
  
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error fetching gallery:', error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  };
  

module.exports= {handleAddGallery,editGallery,toggleGalleryStatus,deleteGallery,galleries,gallery}