

const multer = require("multer");
const path = require("path");
const fs = require("fs");
const  CourseWebpages = require('../../model/coursewebpageModel')
const FAQ = require("../../model/Faq");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../../../uploads/images/coursewebpage");
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
        const fileTypes = /jpeg|jpg|png|webp/; // Allow only specific file types
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error("Only JPEG, JPG, and PNG files are allowed!"));
        }
    },
}).single("yogaTeamSlideImage"); // Single file upload field name: "Slide_Image"



// Configure Multer for image uploads


// **Add Course Webpage**
const addCourseWebpage = async (req, res) => {
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
                courseCategory,
                slug,
                bannerButton,
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
  
            const yogaTeamSlideImage = req.file ? req.file.filename : null;
            if (
                !courseCategory ||
                !slug ||
                !bannerButton ||
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

            const newCourseWebpage = new CourseWebpages({
                courseCategory,
                slug,
                bannerButton,
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
                message: "Course Webpage added successfully",
                data: savedCourseWebpage,
            });
        } catch (error) {
            console.error("Error adding Course Webpage:", error);
            res.status(500).json({
                success: false,
                message: "Failed to add Course Webpage",
                error: error.message,
            });
        }
    });
};

// **Edit Course Webpage**
const editCourseWebpage = async (req, res) => {
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

            const courseWebpage = await CourseWebpages.findById(id);
            if (!courseWebpage) {
                return res.status(404).json({
                    success: false,
                    message: "Course Webpage not found",
                });
            }

            const yogaTeamSlideImage = req.file ? req.file.filename : null;
            const files = req.files;

            // Handle yogaTeamSlideImage update
            if (yogaTeamSlideImage) {
                const oldYogaImagePath = path.join(__dirname, "../../../uploads/images/coursewebpage", courseWebpage.yogaTeamSlideImage);
                if (courseWebpage.yogaTeamSlideImage && fs.existsSync(oldYogaImagePath)) {
                    fs.unlinkSync(oldYogaImagePath); // Remove the old image
                }
                updateFields.yogaTeamSlideImage = yogaTeamSlideImage;
            }

            const updatedCourseWebpage = await CourseWebpages.findByIdAndUpdate(id, updateFields);

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
const deleteCourseWebpage = async (req, res) => {
    try {
        const { id } = req.params;

        const courseWebpage = await CourseWebpages.findById(id);
        if (!courseWebpage) {
            return res.status(404).json({
                success: false,
                message: "Course Webpage not found",
            });
        }

        const yogaImagePath = courseWebpage.yogaTeamSlideImage
            ? path.join(__dirname, "../../../uploads/images/coursewebpage", courseWebpage.yogaTeamSlideImage)
            : null;

        if (yogaImagePath && fs.existsSync(yogaImagePath)) {
            try {
                fs.unlinkSync(yogaImagePath);
            } catch (err) {
                console.error(`Error deleting file ${yogaImagePath}:`, err.message);
            }
        }

        await CourseWebpages.findByIdAndDelete(id);

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
const getAllCourseWebpages = async (req, res) => {
    try {
        const courseWebpages = await CourseWebpages.find();
        res.status(200).json({
            success: true,
            data: courseWebpages,
        });
    } catch (error) {
        console.error("Error fetching Course Webpages:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Course Webpages",
            error: error.message,
        });
    }
};

// **Toggle Course Webpage Status**
const toggleCourseWebpageStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const courseWebpage = await CourseWebpages.findById(id);
        if (!courseWebpage) {
            return res.status(404).json({
                success: false,
                message: "Course Webpage not found",
            });
        }

        courseWebpage.status = courseWebpage.status === "active" ? "inactive" : "active";

        await courseWebpage.save();

        res.status(200).json({
            success: true,
            message: "Course Webpage status updated successfully",
            data: courseWebpage,
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
const getCourseWebpageById = async (req, res) => {
    try {
        const { id } = req.params;

        const courseWebpage = await CourseWebpages.findById(id);
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

const getCourseWebpageByCategory = async (req, res) => {
    const { slug } = req.params;
    
    try {
        const response = await CourseWebpages.find({slug: slug});
        // console.log(response)
        if (response && response.length > 0) {
            console.log(response)
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
    addCourseWebpage,
    editCourseWebpage,
    deleteCourseWebpage,
    getAllCourseWebpages,
    toggleCourseWebpageStatus,
    getCourseWebpageById,
    getCourseWebpageByCategory
}
