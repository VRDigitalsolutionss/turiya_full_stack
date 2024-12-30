const Gallery = require("../../model/Gallery");
const multer = require("multer");
const path = require("path");

// ================================================================================================

const handleAddGallery = async (req, res) => {
  // Configure Multer
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Specify the directory for file uploads
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
    },
  });

  const upload = multer({ storage }).single("file"); // Handle single file uploads

  // Use Multer to process the file upload
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "File upload failed",
        error: err.message,
      });
    }

    try {
      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "File is required",
        });
      }

      // Construct the file URL
      const fileUrl = `${process.env.BASE_URL_IMAGE}/${req.file.filename}`;

      // Extract the name from the request body
      const { name } = req.body;

      // Validate required fields
      if (!name) {
        return res.status(400).json({
          success: false,
          message: "Name is required",
        });
      }

      // Create a new gallery entry
      const newGallery = new Gallery({
        name,
        file: fileUrl, // Store the file URL
      });

      // Save to the database
      await newGallery.save();

      // Send success response
      res.status(201).json({
        success: true,
        message: "Gallery added successfully",
        data: newGallery,
      });
    } catch (error) {
      // Handle any errors
      res.status(500).json({
        success: false,
        message: "Failed to add Gallery",
        error: error.message,
      });
    }
  });
};

// ==============================================================================================

// // Configure Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Specify the directory for file uploads
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
//   },
// });

// const upload = multer({ storage });

// // Gallery Add Handler
// const handleAddGallery = async (req, res) => {
//   try {
//     // Check if a file was uploaded
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "File is required",
//       });
//     }

//     // Construct the file URL
//     const fileUrl = `http://127.0.0.1:7000/uploads/${req.file.filename}`;

//     // Extract the name from the request body
//     const { name } = req.body;

//     // Validate required fields
//     if (!name) {
//       return res.status(400).json({
//         success: false,
//         message: "Name is required",
//       });
//     }

//     // Create a new gallery entry
//     const newGallery = new Gallery({
//       name,
//       file: fileUrl, // Store the file URL
//     });

//     // Save to the database
//     await newGallery.save();

//     // Send success response
//     res.status(201).json({
//       success: true,
//       message: "Gallery added successfully",
//       data: newGallery,
//     });
//   } catch (error) {
//     // Handle any errors
//     res.status(500).json({
//       success: false,
//       message: "Failed to add Gallery",
//       error: error.message,
//     });
//   }
// };

// // Middleware to handle file uploads
// const addGalleryMiddleware = upload.single('file'); // Handle single file uploads

// module.exports = {
//   handleAddGallery,
//   addGalleryMiddleware,
// };

// ========================================================================================================================
// const handleAddGallery = async (req,res) => {
//     try {
//         // Extract data from the request body
//         const { name,file } = req.body;

//         // Validate required fields
//         if (!name || !file ) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Name,  and file are required",
//             });
//         }

//         // Create a new testimonial document
//         const newGallery = new Gallery({
//             name,
//            file
//         });

//         // Save to the database
//         await newGallery.save();

//         // Send success response
//         res.status(201).json({
//             success: true,
//             message: "Gallery added successfully",
//             data: newGallery,
//         });
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({
//             success: false,
//             message: "Failed to add Gallery",
//             error: error.message,
//         });
//     }
// };

const editGallery = async (req, res) => {
  try {
    const id = req.params.id;
    // Extract data from the request body
    const { name, file } = req.body;

    // Validate required fields
    if (!name || !file) {
      return res.status(400).json({
        success: false,
        message: "Name and file are required",
      });
    }

    if (id) {
      // If ID is provided, update the testimonial
      const updatedGallery = await Gallery.findByIdAndUpdate(
        id,
        { name, file },
        { new: true, runValidators: true } // Return the updated document
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
        file,
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

const deleteGallery = async (req, res) => {
  try {
    const { id } = req.params; // Extract testimonial ID from URL params

    // Find and delete the testimonial
    const deletedGallery = await Gallery.findByIdAndDelete(id);

    if (!deletedGallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Gallery deleted successfully",
      data: deletedGallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Gallery",
      error: error.message,
    });
  }
};

const galleries = async (req, res) => {
  Gallery.find()
    .then((data) => {
      res.status(200).json({ success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error: error.message });
    });
};

module.exports = {
  handleAddGallery,
  editGallery,
  toggleGalleryStatus,
  deleteGallery,
  galleries,
};
