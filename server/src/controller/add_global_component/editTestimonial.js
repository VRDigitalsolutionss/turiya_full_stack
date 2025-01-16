


// ==================================================
const Testimonial = require("../../model/Testimonial");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ================================================================================

// Configure Multer for single image upload (profile image)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../../../uploads/images/testimonial");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }); // Ensure the directory exists
    }
    cb(null, uploadDir); // Ensure the directory exists
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); // Unique file name
  },
});

// Multer instance for handling the file upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|webp/; // Allow only specific file types
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG, JPG, and PNG files are allowed!"));
    }
  },
}).single("profileImage"); // Field name: "profileImage"

// ===================================================================================

// API to edit an existing testimonial using `findOneAndUpdate`
const handleEditTestimonial = async (req, res) => {
  const { id } = req.params; // Get testimonialId from the request parameters
  const { name, designation, feedbackContent, status } = req.body;

  // Use Multer to handle the file upload (if any)
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
      // Find the testimonial by ID
      const testimonial = await Testimonial.findOne({ _id: id });
      if (!testimonial) {
        return res.status(404).json({
          success: false,
          message: "Testimonial not found",
        });
      }

      // If a new image is uploaded, delete the old image from the server
      if (testimonial.profileImage && req.file) {
        const oldImagePath = path.join(__dirname, "../uploads", testimonial.profileImage);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath); // Delete the old image
        }
      }

      // Set new image name if a new image is uploaded, otherwise keep the old one
      const profileImageName = req.file ? req.file.filename : testimonial.profileImage;

      // Update testimonial using `findOneAndUpdate`
      const updatedTestimonial = await Testimonial.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: name || testimonial.name,
            designation: designation || testimonial.designation,
            feedbackContent: feedbackContent || testimonial.feedbackContent,
            status: status || testimonial.status,
            profileImage: profileImageName, // Update profile image if a new one is uploaded
          },
        },
        { new: true } // Return the updated document
      );

      if (!updatedTestimonial) {
        return res.status(500).json({
          success: false,
          message: "Failed to update testimonial",
        });
      }

      // Successfully updated testimonial
      res.status(200).json({
        success: true,
        message: "Testimonial updated successfully",
        data: updatedTestimonial,
      });
    } catch (error) {
      console.error("Error updating testimonial:", error);
      res.status(500).json({
        success: false,
        message: "Failed to update testimonial",
        error: error.message,
      });
    }
  });
};

module.exports = handleEditTestimonial;
