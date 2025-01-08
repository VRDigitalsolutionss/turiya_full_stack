

const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ModuleWebpages = require("../../model/modulewebpageModel");
const FAQ = require("../../model/Faq");


// Configure Multer for image uploads modulewebpage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../../../uploads/images/modulewebpage");
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage: storage,
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
}).fields([{ name: "yogaTeamSlideImage", maxCount: 1 }]);

// **Add Course Webpage**
const addCourseModuleWebpage = async (req, res) => {




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
                courseModuleCategory,
                slug,
                pageUrl,
                metaTitle,
                metaDescription,
                metaKeywords,
                yogaTeamSliderHeading,
                yogaTeamSliderParagraph,
                yogaTeamSliderVideoLink,
                about_first_section_Heading,
                about_first_section_sub_Paragraph,
                about_first_section_Paragraph_Content,
                faqs,
                modules,
                selectedButton,
                selectedSections,
            } = req.body;

            const files = req.files;
            const yogaTeamSlideImage = files.yogaTeamSlideImage ? files.yogaTeamSlideImage[0].filename : null;

            if (
                !courseModuleCategory ||
                !slug ||
                !pageUrl ||
                !metaTitle ||
                !metaDescription ||
                !metaKeywords ||
                !yogaTeamSliderHeading ||
                !yogaTeamSliderParagraph ||
                !yogaTeamSliderVideoLink ||
                !yogaTeamSlideImage ||
                !about_first_section_Heading ||
                !about_first_section_sub_Paragraph ||
                !about_first_section_Paragraph_Content ||
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
            // console.log("testing................................")
            const newCourseWebpage = new ModuleWebpages({
                courseModuleCategory,
                pageUrl,
                metaTitle,
                metaDescription,
                metaKeywords,
                yogaTeamSliderHeading,
                yogaTeamSliderParagraph,
                yogaTeamSliderVideoLink,
                yogaTeamSlideImage,
                about_first_section_Heading,
                about_first_section_sub_Paragraph,
                about_first_section_Paragraph_Content,
                faqs: JSON.parse(faqs),
                modules: JSON.parse(modules),
                selectedButton: JSON.parse(selectedButton),
                selectedSections: JSON.parse(selectedSections),
            });

            const savedCourseWebpage = await newCourseWebpage.save();

            res.status(201).json({
                success: true,
                message: "Course module Webpage added successfully",
                data: savedCourseWebpage,
            });
        } catch (error) {
            console.error("Error adding Course module Webpage:", error);
            res.status(500).json({
                success: false,
                message: "Failed to add Course Webpage",
                error: error.message,
            });
        }
    });
};

// **Edit Course Webpage**
const editCourseModuleWebpage = async (req, res) => {
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
            
            const selectedSections = JSON.parse(req.body.selectedSections);
            const selectedFAQs = JSON.parse(req.body.faqs);
            const updateFields = { ...req.body, selectedSections, faqs: selectedFAQs };

            console.log(updateFields)


            const courseWebpage = await ModuleWebpages.findById(id);
            if (!courseWebpage) {
                return res.status(404).json({
                    success: false,
                    message: "Course Webpage not found",
                });
            }

            const files = req.files;

            // Handle yogaTeamSlideImage update
            if (files.yogaTeamSlideImage && files.yogaTeamSlideImage.length > 0) {
                const oldYogaImagePath = path.join(__dirname, "../../../uploads/images/modulewebpage", courseWebpage.yogaTeamSlideImage);
                if (courseWebpage.yogaTeamSlideImage && fs.existsSync(oldYogaImagePath)) {
                    fs.unlinkSync(oldYogaImagePath); // Remove the old image
                }
                updateFields.yogaTeamSlideImage = files.yogaTeamSlideImage[0].filename;
            }

            const updatedCourseWebpage = await ModuleWebpages.findByIdAndUpdate(id, updateFields, { new: true });

            res.status(200).json({
                success: true,
                message: "Course Webpage updated successfully",
                data: updatedCourseWebpage,
            });
        } catch (error) {
            console.error("Error editing Course Webpage:", error);
            res.status(500).json({
                success: false,
                message: "Failed to update Course Webpage",
                error: error.message,
            });
        }
    });
};

// **Delete Course Webpage**
const deleteCourseModuleWebpage = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("module id ", id)
        const courseWebpage = await ModuleWebpages.findById(id);
        if (!courseWebpage) {
            return res.status(404).json({
                success: false,
                message: "Course Webpage not found",
            });
        }

        const yogaImagePath = courseWebpage.yogaTeamSlideImage
            ? path.join(__dirname, "../../../uploads/images/modulewebpage", courseWebpage.yogaTeamSlideImage)
            : null;

        if (yogaImagePath && fs.existsSync(yogaImagePath)) {
            try {
                fs.unlinkSync(yogaImagePath);
            } catch (err) {
                console.error(`Error deleting file ${yogaImagePath}:`, err.message);
            }
        }

        await ModuleWebpages.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Course Webpage deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting Course Webpage:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Course Webpage",
            error: error.message,
        });
    }
};

// **Get All Course Webpages**
const getAllModuleModuleWebpages = async (req, res) => {
    try {
        const getModuleWebpages = await ModuleWebpages.find().populate("faqs");
        res.status(200).json({
            success: true,
            data: getModuleWebpages,
        });
    } catch (error) {
        console.error("Error fetching Course module Webpages:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Course module Webpages",
            error: error.message,
        });
    }
};

// **Toggle Course Webpage Status**
const toggleModuleWebpagestatus3 = async (req, res) => {
    try {
        const { id } = req.params;

        // Toggle the status directly using findOneAndUpdate
        const updatedWebpage = await ModuleWebpages.findOneAndUpdate(
            { _id: id },
            [
                { $set: { status: { $cond: { if: { $eq: ["$status", "active"] }, then: "inactive", else: "active" } } } }
            ],
            { new: true }
        );

        if (!updatedWebpage) {
            return res.status(404).json({
                success: false,
                message: "Course module Webpage not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Course Webpage status updated successfully",
            data: updatedWebpage,
        });
    } catch (error) {
        console.error("Error toggling Course Webpage status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle Course Webpage status",
            error: error.message,
        });
    }
};


// **Get Course Webpage By ID**
const getCourseModuleWebpageById = async (req, res) => {
    try {
        const { id } = req.params;

        const courseWebpage = await ModuleWebpages.findById(id).populate("faqs");
        if (!courseWebpage) {
            return res.status(404).json({
                success: false,
                message: "Course Webpage not found",
            });
        }

        res.status(200).json({
            success: true,
            data: courseWebpage,
        });
    } catch (error) {
        console.error("Error fetching Course Webpage by ID:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Course Webpage by ID",
            error: error.message,
        });
    }
};


const findModuleWebpagesByCategory = async (req, res) => {
    const { slug } = req.params;
    
    try {
        const response = await ModuleWebpages.find({ slug: slug }).populate("faqs");

        if (response && response.length > 0) {
            res.status(200).json({
                success: true,
                data: response
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No module webpages found for the given course category."
            });
        }
    } catch (error) {
        console.error("Error fetching Module Webpages by Category:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Module Webpages by Category",
            error: error.message,
        });
    }
}



module.exports = {
    addCourseModuleWebpage,
    editCourseModuleWebpage,
    deleteCourseModuleWebpage,
    getAllModuleModuleWebpages,
    toggleModuleWebpagestatus3,
    getCourseModuleWebpageById,
    findModuleWebpagesByCategory
};
