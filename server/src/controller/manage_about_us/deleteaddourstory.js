const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Ourstory = require("../../model/ourstoryModel");

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
    limits: { fileSize: 10 * 1024 * 1024 },
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
}).single("Slide_Image"); // Single file upload field name: "Slide_Image"

const addOurStory = async (req, res) => {
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

            console.log("Uploaded File:", req.file); // Debugging the uploaded file
            console.log("Request Body:", req.body); // Debugging the request body

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

            // Get the uploaded file name
            const imageName = req.file ? req.file.filename : null;

            if (!imageName) {
                return res.status(400).json({
                    success: false,
                    message: "Slide_Image is required",
                });
            }

            // Create the new Our Story document
            const newOurStory = new Ourstory({
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

            // Save to the database
            const savedStory = await newOurStory.save();

            res.status(201).json({
                success: true,
                message: "Our Story added successfully",
                data: savedStory,
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




// **Edit Our Story**
const editOurStory = async (req, res) => {
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

            const ourStory = await Ourstory.findById(id);
            if (!ourStory) {
                return res.status(404).json({
                    success: false,
                    message: "Our Story not found",
                });
            }

            // If a new image is uploaded, remove the old image
            if (req.file) {
                const oldImagePath = path.join(__dirname, "../uploads", ourStory.Slide_Image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath); // Delete old image
                }
                updateFields.Slide_Image = req.file.filename; // Save the new image name
            }

            const updatedOurStory = await Ourstory.findByIdAndUpdate(id, updateFields, {
                new: true,
            });

            res.status(200).json({
                success: true,
                message: "Our Story updated successfully",
                data: updatedOurStory,
            });
        } catch (error) {
            console.error("Error editing Our Story:", error);
            res.status(500).json({
                success: false,
                message: "Failed to update Our Story",
                error: error.message,
            });
        }
    });
};

// **Delete Our Story**
const deleteOurStory = async (req, res) => {
    try {
        const { id } = req.params;

        const ourStory = await Ourstory.findById(id);
        if (!ourStory) {
            return res.status(404).json({
                success: false,
                message: "Our Story not found",
            });
        }

        // Remove the associated image
        const imagePath = path.join(__dirname, "../uploads", ourStory.Slide_Image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // Delete image file
        }

        await Ourstory.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Our Story deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting Our Story:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Our Story",
            error: error.message,
        });
    }
};

// **Get All Our Stories**
const getAllOurStories = async (req, res) => {
    try {
        const ourStories = await Ourstory.find();
        res.status(200).json({
            success: true,
            data: ourStories,
        });
    } catch (error) {
        console.error("Error fetching Our Stories:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Our Stories",
            error: error.message,
        });
    }
};

const ourStory =async  (req, res) => {
    try {
        const id = req.params.id;
    
        // Ensure the id is a valid MongoDB ObjectId
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }
    
        // Query the database by _id
        const data = await Ourstory.findById(id);
    
        if (!data) {
          return res.status(404).json({ success: false, message: 'Gallery not found' });
        }
    
        res.status(200).json({ success: true, data });
      } catch (error) {
        console.error('Error fetching gallery:', error.message);
        res.status(500).json({ success: false, error: error.message });
      } 
}

module.exports = {
    addOurStory,
    editOurStory,
    deleteOurStory,
    getAllOurStories,
    addOurStory,
    ourStory
};
