

const path = require('path');
const fs = require('fs');
const multer = require('multer');
const Testimonial = require("../../model/Testimonial");



// Configure Multer for single image upload (profile image)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../../../uploads/images/testimonial");
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


// API to add a testimonial
const handleAddTestimonial = async (req, res) => {
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
      const { name, designation, feedbackContent, status } = req.body;

      console.log("Uploaded File:", req.file); // Debugging the uploaded file
      console.log("Request Body:", req.body); // Debugging the request body

      // Validate required fields
      if (!name || !designation || !feedbackContent) {
        return res.status(400).json({
          success: false,
          message: "Required fields are missing",
        });
      }

      // Get the uploaded file name
      const profileImageName = req.file ? req.file.filename : null;

      // Create the new Testimonial document
      const newTestimonial = new Testimonial({
        name,
        designation,
        feedbackContent,
        status: status || "active",  // Default status is 'active'
        profileImage: profileImageName,  // Set the uploaded file name
      });

      // Save to the database
      const savedTestimonial = await newTestimonial.save();

      res.status(201).json({
        success: true,
        message: "Testimonial added successfully",
        data: savedTestimonial,
      });
    } catch (error) {
      console.error("Error adding testimonial:", error);
      res.status(500).json({
        success: false,
        message: "Failed to add testimonial",
        error: error.message,
      });
    }
  });
};


// const handleAddTestimonial = async (req,res) => {
//     try {
//         // Extract data from the request body
//         const { name, designation, feedbackContent, profileImage } = req.body;

//         // Validate required fields
//         if (!name || !designation || !feedbackContent) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Name, designation, and feedback content are required",
//             });
//         }

//         // Create a new testimonial document
//         const newTestimonial = new Testimonial({
//             name,
//             designation,
//             feedbackContent,
//             profileImage,
//         });

//         // Save to the database
//         await newTestimonial.save();

//         // Send success response
//         res.status(201).json({
//             success: true,
//             message: "Testimonial added successfully",
//             data: newTestimonial,
//         });
//     } catch (error) {
//         // Handle any errors
//         res.status(500).json({
//             success: false,
//             message: "Failed to add testimonial",
//             error: error.message,
//         });
//     }
// };


const toggleTestimonialStatus = async (req, res) => {
    try {
        const { id } = req.params; // Get testimonial ID from URL params

        // Find the testimonial by ID
        const testimonial = await Testimonial.findById(id);

        if (!testimonial) {
            return res.status(404).json({
                success: false,
                message: "Testimonial not found",
            });
        }

        // Toggle the status
        testimonial.status = testimonial.status === "active" ? "inactive" : "active";

        // Save the updated testimonial
        await testimonial.save();

        res.status(200).json({
            success: true,
            message: "Testimonial status updated successfully",
            data: testimonial,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle testimonial status",
            error: error.message,
        });
    }
};


const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params; // Extract testimonial ID from URL params

        // Find and delete the testimonial
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

        if (!deletedTestimonial) {
            return res.status(404).json({
                success: false,
                message: "Testimonial not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Testimonial deleted successfully",
            data: deletedTestimonial,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete testimonial",
            error: error.message,
        });
    }
};


const testimonials = async (req,res) => {
    Testimonial.find().then((data) => {
        res.status(200).json({ success: true, data })
    }).catch((error) => {
        res.status(500).json({ success: false, error: error.message })
    })
}


const testimonial = async (req, res) => {
    try {
      const id = req.params.id;
  
      // Ensure the id is a valid MongoDB ObjectId
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ success: false, message: 'Invalid ID format' });
      }
  
      // Query the database by _id
      const data = await Testimonial.findById(id);
  
      if (!data) {
        return res.status(404).json({ success: false, message: 'testimonial not found' });
      }
  
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error fetching testimonial:', error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  };
  

module.exports= {handleAddTestimonial,deleteTestimonial,toggleTestimonialStatus,testimonials,testimonial} 