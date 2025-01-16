const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ModuleWebpages = require("../../model/modulewebpageModel");

// Configure Multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../uploads/");
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error("Only JPEG, JPG, and PNG files are allowed!"));
        }
    },
}).fields([
    { name: "yogaTeamSlideImage", maxCount: 1 },
    { name: "about_first_section_Image", maxCount: 1 },
]);

// **Add Module Webpage**
const addModuleWebpage = async (req, res) => {
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
                pageUrl,
                metaTitle,
                metaDescription,
                metaKeywords,
                yogaTeamSliderHeading,
                yogaTeamSliderParagraph,
                yogaTeamSliderVideoLink,
                about_first_section_Heading,
                about_first_section_Paragraph,
                about_first_section_VideoLink,
                faqs,
                modules,
                selectedButton,
                selectedSections,
            } = req.body;

            const files = req.files;
            const yogaTeamSlideImage = files.yogaTeamSlideImage ? files.yogaTeamSlideImage[0].filename : null;
            const aboutFirstSectionImage = files.about_first_section_Image
                ? files.about_first_section_Image[0].filename
                : null;

            if (
                !pageUrl ||
                !metaTitle ||
                !metaDescription ||
                !metaKeywords ||
                !yogaTeamSliderHeading ||
                !yogaTeamSliderParagraph ||
                !yogaTeamSliderVideoLink ||
                !yogaTeamSlideImage ||
                !about_first_section_Heading ||
                !about_first_section_Paragraph ||
                !about_first_section_VideoLink ||
                !aboutFirstSectionImage ||
                !faqs ||
                !modules ||
                !selectedButton ||
                !selectedSections
            ) {
                return res.status(400).json({
                    success: false,
                    message: "Required fields are missing",
                });
            }

            const newModuleWebpage = new ModuleWebpages({
                pageUrl,
                metaTitle,
                metaDescription,
                metaKeywords,
                yogaTeamSliderHeading,
                yogaTeamSliderParagraph,
                yogaTeamSliderVideoLink,
                yogaTeamSlideImage,
                about_first_section_Heading,
                about_first_section_Paragraph,
                about_first_section_VideoLink,
                about_first_section_Image: aboutFirstSectionImage,
                faqs: JSON.parse(faqs),
                modules: JSON.parse(modules),
                selectedButton: JSON.parse(selectedButton),
                selectedSections: JSON.parse(selectedSections),
            });

            const savedModuleWebpage = await newModuleWebpage.save();

            res.status(201).json({
                success: true,
                message: "Module Webpage added successfully",
                data: savedModuleWebpage,
            });
        } catch (error) {
            console.error("Error adding Module Webpage:", error);
            res.status(500).json({
                success: false,
                message: "Failed to add Module Webpage",
                error: error.message,
            });
        }
    });
};

// **Edit Module Webpage**
const editModuleWebpage = async (req, res) => {
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
            const updateFields = { ...req.body };

            const moduleWebpage = await ModuleWebpages.findById(id);
            if (!moduleWebpage) {
                return res.status(404).json({
                    success: false,
                    message: "Module Webpage not found",
                });
            }

            const files = req.files;

            // Handle yogaTeamSlideImage update
            if (files.yogaTeamSlideImage && files.yogaTeamSlideImage.length > 0) {
                const oldYogaImagePath = path.join(__dirname, "../uploads", moduleWebpage.yogaTeamSlideImage);
                if (moduleWebpage.yogaTeamSlideImage && fs.existsSync(oldYogaImagePath)) {
                    fs.unlinkSync(oldYogaImagePath); // Remove the old image
                }
                updateFields.yogaTeamSlideImage = files.yogaTeamSlideImage[0].filename;
            }

            // Handle about_first_section_Image update
            if (files.about_first_section_Image && files.about_first_section_Image.length > 0) {
                const oldFirstSectionImagePath = path.join(
                    __dirname,
                    "../uploads",
                    moduleWebpage.about_first_section_Image
                );
                if (moduleWebpage.about_first_section_Image && fs.existsSync(oldFirstSectionImagePath)) {
                    fs.unlinkSync(oldFirstSectionImagePath); // Remove the old image
                }
                updateFields.about_first_section_Image = files.about_first_section_Image[0].filename;
            }

            // Update the document in the database
            const updatedModuleWebpage = await ModuleWebpages.findByIdAndUpdate(id, updateFields, { new: true });

            res.status(200).json({
                success: true,
                message: "Module Webpage updated successfully",
                data: updatedModuleWebpage,
            });
        } catch (error) {
            console.error("Error editing Module Webpage:", error);
            res.status(500).json({
                success: false,
                message: "Failed to update Module Webpage",
                error: error.message,
            });
        }
    });
};


// **Delete Module Webpage**
const deleteModuleWebpage = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the module webpage by ID
        const moduleWebpage = await ModuleWebpages.findById(id);
        if (!moduleWebpage) {
            return res.status(404).json({
                success: false,
                message: "Module Webpage not found",
            });
        }

        // Paths for images
        const yogaImagePath = moduleWebpage.yogaTeamSlideImage
            ? path.join(__dirname, "../uploads", moduleWebpage.yogaTeamSlideImage)
            : null;
        const aboutFirstSectionImagePath = moduleWebpage.about_first_section_Image
            ? path.join(__dirname, "../uploads", moduleWebpage.about_first_section_Image)
            : null;

        // Delete yoga image if it exists
        if (yogaImagePath && fs.existsSync(yogaImagePath)) {
            try {
                fs.unlinkSync(yogaImagePath);
                console.log(`Deleted file: ${yogaImagePath}`);
            } catch (err) {
                console.error(`Error deleting file ${yogaImagePath}:`, err.message);
            }
        }

        // Delete about first section image if it exists
        if (aboutFirstSectionImagePath && fs.existsSync(aboutFirstSectionImagePath)) {
            try {
                fs.unlinkSync(aboutFirstSectionImagePath);
                console.log(`Deleted file: ${aboutFirstSectionImagePath}`);
            } catch (err) {
                console.error(`Error deleting file ${aboutFirstSectionImagePath}:`, err.message);
            }
        }

        // Delete the module webpage from the database
        await ModuleWebpages.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Module Webpage deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting Module Webpage:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Module Webpage",
            error: error.message,
        });
    }
};


// **Get All Module Webpages**
const getAllModuleWebpages = async (req, res) => {
    try {
        const moduleWebpages = await ModuleWebpages.find();
        res.status(200).json({
            success: true,
            data: moduleWebpages,
        });
    } catch (error) {
        console.error("Error fetching Module Webpages:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Module Webpages",
            error: error.message,
        });
    }
};

// **Toggle Module Webpage Status**
const toggleModuleWebpageStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const moduleWebpage = await ModuleWebpages.findById(id);
        if (!moduleWebpage) {
            return res.status(404).json({
                success: false,
                message: "Module Webpage not found",
            });
        }

        moduleWebpage.status = moduleWebpage.status === "active" ? "inactive" : "active";

        await moduleWebpage.save();

        res.status(200).json({
            success: true,
            message: "Module Webpage status updated successfully",
            data: moduleWebpage,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle Module Webpage status",
            error: error.message,
        });
    }
};

// **Get Module Webpage by ID**
const getModuleWebpageById = async (req, res) => {
    try {
        const { id } = req.params; // Extract the ID from the request parameters

        // Fetch the module webpage by ID from the database
        const moduleWebpage = await ModuleWebpages.findById(id);
        
        if (!moduleWebpage) {
            return res.status(404).json({
                success: false,
                message: "Module Webpage not found",
            });
        }

        res.status(200).json({
            success: true,
            data: moduleWebpage,
        });
    } catch (error) {
        console.error("Error fetching Module Webpage by ID:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Module Webpage by ID",
            error: error.message,
        });
    }
};

module.exports = {
    addModuleWebpage,
    editModuleWebpage,
    deleteModuleWebpage,
    getAllModuleWebpages,
    toggleModuleWebpageStatus,
    getModuleWebpageById, 
};
