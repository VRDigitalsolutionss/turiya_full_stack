const multer = require("multer");
const path = require("path");
const fs = require("fs");
const TuriyaYogaTeam = require("../../model/turiyayogateamModel");

// Configure Multer for single image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../../../uploads/images/team");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true }); // Ensure the directory exists
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedFileTypes = /jpeg|jpg|png|webp/;
        const isValidExt = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
        const isValidMime = allowedFileTypes.test(file.mimetype);

        if (isValidExt && isValidMime) {
            cb(null, true);
        } else {
            cb(new Error("Only JPEG, JPG, and PNG files are allowed!"));
        }
    },
}).single("Slide_Image");

// Add Team
const addTuriyaYogaTeam = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
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

            if (!req.file) {
                return res.status(400).json({
                    success: false,
                    message: "Slide_Image is required",
                });
            }

            const newEntry = new TuriyaYogaTeam({
                Slider_Heading,
                Slider_Paragraph,
                Slider_videolink,
                Slide_Image: req.file.filename,
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

            const savedEntry = await newEntry.save();

            res.status(201).json({
                success: true,
                message: "Turiya Yoga Team entry added successfully",
                data: savedEntry,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to add Turiya Yoga Team entry",
                error: error.message,
            });
        }
    });
};

// Edit Team
const editTuriyaYogaTeam = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Image upload failed",
                error: err.message,
            });
        }

        try {
            const { id } = req.params;

            const entry = await TuriyaYogaTeam.findById(id);
            if (!entry) {
                return res.status(404).json({
                    success: false,
                    message: "Turiya Yoga Team entry not found",
                });
            }

            if (req.file) {
                const oldImagePath = path.join(__dirname, "../uploads", entry.Slide_Image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
                req.body.Slide_Image = req.file.filename;
            }

            const updatedEntry = await TuriyaYogaTeam.findByIdAndUpdate(id, req.body, { new: true });

            res.status(200).json({
                success: true,
                message: "Turiya Yoga Team entry updated successfully",
                data: updatedEntry,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to update Turiya Yoga Team entry",
                error: error.message,
            });
        }
    });
};

// Delete Team
const deleteTuriyaYogaTeam = async (req, res) => {
    try {
        const { id } = req.params;

        const entry = await TuriyaYogaTeam.findById(id);
        if (!entry) {
            return res.status(404).json({
                success: false,
                message: "Turiya Yoga Team entry not found",
            });
        }

        const imagePath = path.join(__dirname, "../uploads", entry.Slide_Image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await TuriyaYogaTeam.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Turiya Yoga Team entry deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Turiya Yoga Team entry",
            error: error.message,
        });
    }
};

// Get All Teams
const getAllTuriyaYogaTeam = async (req, res) => {
    try {
        const entries = await TuriyaYogaTeam.find();
        res.status(200).json({
            success: true,
            data: entries,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Turiya Yoga Team entries",
            error: error.message,
        });
    }
};

// **Get Team by ID**
const getTuriyaYogaTeamById = async (req, res) => {
    try {
        const { id } = req.params;

        const entry = await TuriyaYogaTeam.findById(id);
        if (!entry) {
            return res.status(404).json({
                success: false,
                message: "Turiya Yoga Team entry not found",
            });
        }

        res.status(200).json({
            success: true,
            data: entry,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Turiya Yoga Team entry",
            error: error.message,
        });
    }
};

// **Toggle Team Status**
const toggleTuriyaYogaTeamStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const entry = await TuriyaYogaTeam.findById(id);
        if (!entry) {
            return res.status(404).json({
                success: false,
                message: "Turiya Yoga Team entry not found",
            });
        }

        // Toggle the status between 'active' and 'inactive'
        entry.status = entry.status === "active" ? "inactive" : "active";
        await entry.save();

        res.status(200).json({
            success: true,
            message: "Turiya Yoga Team status updated successfully",
            data: entry,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle Turiya Yoga Team status",
            error: error.message,
        });
    }
};

module.exports = {
    addTuriyaYogaTeam,
    editTuriyaYogaTeam,
    deleteTuriyaYogaTeam,
    getAllTuriyaYogaTeam,
    getTuriyaYogaTeamById,
    toggleTuriyaYogaTeamStatus,
};