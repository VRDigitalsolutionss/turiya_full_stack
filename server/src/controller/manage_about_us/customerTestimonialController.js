const multer = require("multer");
const path = require("path");
const fs = require("fs");
const CustomerTestimonial = require("../../model/customertestimonialModel");

// Configure Multer for single image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../../../uploads/images/custumer_testimonial");
        cb(null, uploadDir); // Ensure the directory exists
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName); // Unique file name
    },
});

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
            cb(new Error("Only JPEG, JPG, and PNG files are allowed!"));
        }
    },
}).single("Slide_Image"); // Single file upload field name: "Slide_Image"

// **Add Customer Testimonial**
const addCustomerTestimonial = async (req, res) => {
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
                Slider_Heading,
                Slider_Paragraph,
                Slider_videolink,
                about_First_Section_heading,
                about_First_Section_Sub_Peragraph,
                about_First_Section_Peragraph_Content,
                about_Second_Section_Heading,
                about_Second_Section_Sub_Peragraph,
                about_Second_Section_Peragraph_Content,
                meta_Title,
                meta_Description,
                meta_Keywords,
            } = req.body;

            // Validate required fields
            if (
                !Slider_Heading ||
                !Slider_Paragraph ||
                !Slider_videolink ||
                !about_First_Section_heading ||
                !about_First_Section_Sub_Peragraph ||
                !about_First_Section_Peragraph_Content ||
                !about_Second_Section_Heading ||
                !about_Second_Section_Sub_Peragraph ||
                !about_Second_Section_Peragraph_Content ||
                !meta_Title ||
                !meta_Description ||
                !meta_Keywords
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Required fields are missing",
                });
            }

            const imageName = req.file ? req.file.filename : null;

            if (!imageName) {
                return res.status(400).json({
                    success: false,
                    message: "Slide_Image is required",
                });
            }

            const newCustomerTestimonial = new CustomerTestimonial({
                Slider_Heading,
                Slider_Paragraph,
                Slider_videolink,
                Slide_Image: imageName,
                about_First_Section_heading,
                about_First_Section_Sub_Peragraph,
                about_First_Section_Peragraph_Content,
                about_Second_Section_Heading,
                about_Second_Section_Sub_Peragraph,
                about_Second_Section_Peragraph_Content,
                meta_Title,
                meta_Description,
                meta_Keywords,
            });

            const savedTestimonial = await newCustomerTestimonial.save();

            res.status(201).json({
                success: true,
                message: "Customer Testimonial added successfully",
                data: savedTestimonial,
            });
        } catch (error) {
            console.error("Error adding Customer Testimonial:", error);
            res.status(500).json({
                success: false,
                message: "Failed to add Customer Testimonial",
                error: error.message,
            });
        }
    });
};

// **Edit Customer Testimonial**
const editCustomerTestimonial = async (req, res) => {
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
            const { id } = req.params;
            const updateFields = req.body;

            const testimonial = await CustomerTestimonial.findById(id);
            if (!testimonial) {
                return res.status(404).json({
                    success: false,
                    message: "Customer Testimonial not found",
                });
            }

            // If a new image is uploaded, remove the old image
            if (req.file) {
                const oldImagePath = path.join(__dirname, "../uploads", testimonial.Slide_Image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath); // Delete old image
                }
                updateFields.Slide_Image = req.file.filename; // Save the new image name
            }

            const updatedTestimonial = await CustomerTestimonial.findByIdAndUpdate(
                id,
                updateFields,
                { new: true }
            );

            res.status(200).json({
                success: true,
                message: "Customer Testimonial updated successfully",
                data: updatedTestimonial,
            });
        } catch (error) {
            console.error("Error editing Customer Testimonial:", error);
            res.status(500).json({
                success: false,
                message: "Failed to update Customer Testimonial",
                error: error.message,
            });
        }
    });
};

// **Delete Customer Testimonial**
const deleteCustomerTestimonial = async (req, res) => {
    try {
        const { id } = req.params;

        const testimonial = await CustomerTestimonial.findById(id);
        if (!testimonial) {
            return res.status(404).json({
                success: false,
                message: "Customer Testimonial not found",
            });
        }

        // Remove the associated image
        const imagePath = path.join(__dirname, "../uploads", testimonial.Slide_Image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // Delete image file
        }

        await CustomerTestimonial.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Customer Testimonial deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting Customer Testimonial:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Customer Testimonial",
            error: error.message,
        });
    }
};

// **Get All Customer Testimonials**
const getAllCustomerTestimonial = async (req, res) => {
    try {
        const testimonials = await CustomerTestimonial.find();
        res.status(200).json({
            success: true,
            data: testimonials,
        });
    } catch (error) {
        console.error("Error fetching Customer Testimonials:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Customer Testimonials",
            error: error.message,
        });
    }
};


const getCustomerTestimonial =async  (req, res) => {
    try {
        const id = req.params.id;
    
        // Ensure the id is a valid MongoDB ObjectId
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }
    
        // Query the database by _id
        const data = await CustomerTestimonial.findById(id);
    
        if (!data) {
          return res.status(404).json({ success: false, message: 'custumer testimonial not found' });
        }
    
        res.status(200).json({ success: true, data });
      } catch (error) {
        console.error('Error fetching gallery:', error.message);
        res.status(500).json({ success: false, error: error.message });
      } 
}


// **Get Customer Testimonial by ID**
const getCustomerTestimonialById = async (req, res) => {
    try {
        const { id } = req.params;

        const testimonial = await CustomerTestimonial.findById(id);
        if (!testimonial) {
            return res.status(404).json({
                success: false,
                message: "Customer Testimonial not found",
            });
        }

        res.status(200).json({
            success: true,
            data: testimonial,
        });
    } catch (error) {
        console.error("Error fetching Customer Testimonial by ID:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Customer Testimonial",
            error: error.message,
        });
    }
};

// **Toggle Customer Testimonial Status**
const toggleCustomerTestimonialStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const testimonial = await CustomerTestimonial.findById(id);
        if (!testimonial) {
            return res.status(404).json({
                success: false,
                message: "Customer Testimonial not found",
            });
        }

        testimonial.status = testimonial.status === "active" ? "inactive" : "active";
        await testimonial.save();

        res.status(200).json({
            success: true,
            message: "Customer Testimonial status updated successfully",
            data: testimonial,
        });
    } catch (error) {
        console.error("Error toggling Customer Testimonial status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle Customer Testimonial status",
            error: error.message,
        });
    }
};

module.exports = {
    addCustomerTestimonial,
    editCustomerTestimonial,
    deleteCustomerTestimonial,
    getAllCustomerTestimonial,
    getCustomerTestimonial,
    getCustomerTestimonialById,
    toggleCustomerTestimonialStatus
};
