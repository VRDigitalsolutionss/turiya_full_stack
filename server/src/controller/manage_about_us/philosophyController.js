const multer = require("multer");
const path = require("path");
const fs = require("fs");
const OurPhilosophy = require("../../model/philosophyModel");

// Configure Multer for single image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../../../uploads/images/our_philoshpy");
        cb(null, uploadDir); // Ensure the directory exists
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName); // Generate a unique file name
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
}).single("Slide_Image");

// **Add Our Philosophy**
const addOurphilosophy = async (req, res) => {
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

            if (
                !Slider_Heading ||
                !Slider_Paragraph ||
                !Slider_videolink ||
                !about_First_Section_heading ||
                !about_First_Section_Sub_Peragraph ||
                !about_First_Section_Peragraph_Content ||
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

            const newOurPhilosophy = new OurPhilosophy({
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

            const savedPhilosophy = await newOurPhilosophy.save();

            res.status(201).json({
                success: true,
                message: "Our Philosophy added successfully",
                data: savedPhilosophy,
            });
        } catch (error) {
            console.error("Error adding Our Philosophy:", error);
            res.status(500).json({
                success: false,
                message: "Failed to add Our Philosophy",
                error: error.message,
            });
        }
    });
};

// **Edit Our Philosophy**
const editOurphilosophy = async (req, res) => {
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

            const ourPhilosophy = await OurPhilosophy.findById(id);
            if (!ourPhilosophy) {
                return res.status(404).json({
                    success: false,
                    message: "Our Philosophy not found",
                });
            }

            // If a new image is uploaded, remove the old image
            if (req.file) {
                const oldImagePath = path.join(__dirname, "../uploads", ourPhilosophy.Slide_Image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath); // Delete old image
                }
                updateFields.Slide_Image = req.file.filename; // Save the new image name
            }

            const updatedOurPhilosophy = await OurPhilosophy.findByIdAndUpdate(id, updateFields, {
                new: true,
            });

            res.status(200).json({
                success: true,
                message: "Our Philosophy updated successfully",
                data: updatedOurPhilosophy,
            });
        } catch (error) {
            console.error("Error editing Our Philosophy:", error);
            res.status(500).json({
                success: false,
                message: "Failed to update Our Philosophy",
                error: error.message,
            });
        }
    });
};

// **Delete Our Philosophy**
const deleteOurphilosophy = async (req, res) => {
    try {
        const { id } = req.params;

        const ourPhilosophy = await OurPhilosophy.findById(id);
        if (!ourPhilosophy) {
            return res.status(404).json({
                success: false,
                message: "Our Philosophy not found",
            });
        }

        const imagePath = path.join(__dirname, "../uploads", ourPhilosophy.Slide_Image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // Delete image file
        }

        await OurPhilosophy.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Our Philosophy deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting Our Philosophy:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Our Philosophy",
            error: error.message,
        });
    }
};

// **Get All Our Philosophies**
const getAllOurphilosophy = async (req, res) => {
    try {
        const ourPhilosophies = await OurPhilosophy.find();
        res.status(200).json({
            success: true,
            data: ourPhilosophies,
        });
    } catch (error) {
        console.error("Error fetching Our Philosophies:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Our Philosophies",
            error: error.message,
        });
    }
};


const getOurphilosophyById = async (req, res) => {
    try {
        const { id } = req.params;

        const philosophy = await OurPhilosophy.findById(id);
        if (!philosophy) {
            return res.status(404).json({
                success: false,
                message: "Our Philosophy not found",
            });
        }

        res.status(200).json({
            success: true,
            data: philosophy,
        });
    } catch (error) {
        console.error("Error fetching Our Philosophy by ID:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Our Philosophy",
            error: error.message,
        });
    }
};

// **Toggle Our Philosophy Status**
const toggleOurPhilosophyStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const philosophy = await OurPhilosophy.findById(id);
        if (!philosophy) {
            return res.status(404).json({
                success: false,
                message: "Our Philosophy not found",
            });
        }

        // Toggle the status between 'active' and 'inactive'
        philosophy.status = philosophy.status === "active" ? "inactive" : "active";
        await philosophy.save();

        res.status(200).json({
            success: true,
            message: "Our Philosophy status updated successfully",
            data: philosophy,
        });
    } catch (error) {
        console.error("Error toggling Our Philosophy status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle Our Philosophy status",
            error: error.message,
        });
    }
};



module.exports = {
    addOurphilosophy,
    editOurphilosophy,
    deleteOurphilosophy,
    getAllOurphilosophy,
    getOurphilosophyById,
    toggleOurPhilosophyStatus
};
