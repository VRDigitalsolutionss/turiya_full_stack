const FAQCategory = require("../../model/FAQCategory");
const FAQ = require("../../model/Faq");

const AddFaqCategory =async  (req, res) => {
    try {
        const { faqCategory } = req.body;

        // Create and save the category
        const category = new FAQCategory({ faqCategory });
        await category.save();

        res.status(201).json({
            success: true,
            message: "FAQ Category added successfully",
            data: category,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to add FAQ category",
            error: error.message,
        });
    }
};

const editAddCategory =  async (req, res) => {
    try {
        const { id } = req.params;
        const { faqCategory } = req.body;

        // Update the category
        const category = await FAQCategory.findByIdAndUpdate(
            id,
            { faqCategory },
          
        );

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "FAQ Category not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "FAQ Category updated successfully",
            data: category,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update FAQ category",
            error: error.message,
        });
    }
};

const deleteFAQCategory =async  (req, res) => {
    try {
        const { id } = req.params;

        // Delete the category
        const category = await FAQCategory.findByIdAndDelete(id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "FAQ Category not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "FAQ Category deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete FAQ category",
            error: error.message,
        });
    }
}


const toggleFAQCategoryStatus = async (req, res) => {
    try {
        const { id } = req.params; // Get testimonial ID from URL params

        // Find the testimonial by ID
        const faqCategory = await FAQCategory.findById(id);

        if (!faqCategory) {
            return res.status(404).json({
                success: false,
                message: "FAQCategory not found",
            });
        }

        // Toggle the status
        faqCategory.status = faqCategory.status === "active" ? "inactive" : "active";

        // Save the updated testimonial
        await faqCategory.save();

        res.status(200).json({
            success: true,
            message: "FAQCategory status updated successfully",
            data: faqCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle FAQCategory status",
            error: error.message,
        });
    }
}

const FAQCategorys = (req, res) => {


    FAQCategory.find().populate("faqs").then((data) => {
        res.status(200).json({ success: true, data })
    }).catch((error) => {
        res.status(500).json({ success: false, error: error.message })
    })
}


const getFAQCategory = (req, res) => {

    const { id } = req.params;

    if (id) {
        FAQCategory.findById(id).populate("faqs").then((data) => {
            res.status(200).json({ success: true, data })
        }).catch((error) => {
            res.status(500).json({ success: false, error: error.message })
        })
    } else {
        res.status(`404 Not Found`).json({ success: false })
    }
    
}



module.exports = {AddFaqCategory,editAddCategory,deleteFAQCategory,toggleFAQCategoryStatus,FAQCategorys,getFAQCategory};