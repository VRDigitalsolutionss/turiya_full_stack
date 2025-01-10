
const FAQ = require("../../model/Faq");
const FAQCategory = require("../../model/FAQCategory");


const handleAddFAQ = async (req, res) => {
    try {
        const { category, question, answer } = req.body;

        // Check if the category exists
        const categoryData = await FAQCategory.findById(category);
        if (!categoryData) {
            return res.status(400).json({ success: false, message: "Category not found" });
        }

        if (!question || !answer) {
            return res.status(400).json({
                success: false,
                message: "Question and answer are required",
            });
        }

        // Create a new FAQ document
        const newFAQ = new FAQ({
            category,
            question,
            answer,
        });

        // Save the FAQ document to the database
        const savedFAQ = await newFAQ.save();

        // Add the FAQ to the category's `faqs` array
        categoryData.faqs.push(savedFAQ._id);
        await categoryData.save();

        res.status(201).json({ success: true, data: savedFAQ });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};



const editFAQ = async (req, res) => {
    const id = req.params.id;

    try {
        const { category, question, answer } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: "FAQ ID is required" });
        }

        if (!category || !question || !answer) {
            return res.status(400).json({
                success: false,
                message: "Category, question, and answer are required",
            });
        }

        // Update the FAQ document
        const updatedFAQ = await FAQ.findByIdAndUpdate(
            id,
            { category, question, answer },
            { new: true }
        );

        if (!updatedFAQ) {
            return res.status(404).json({
                success: false,
                message: "FAQ not found for update",
            });
        }

        // Check if the FAQ is already in the category's `faqs` array
        const categoryData = await FAQCategory.findById(category);
        if (!categoryData) {
            return res.status(400).json({ success: false, message: "Category not found" });
        }

        if (!categoryData.faqs.includes(id)) {
            categoryData.faqs.push(id);
            await categoryData.save();
        }

        res.status(200).json({
            success: true,
            message: "FAQ updated successfully",
            data: updatedFAQ,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update FAQ",
            error: error.message,
        });
    }
};



const toggleFAQStatus = async (req, res) => {
    try {
        const { id } = req.params; // Get testimonial ID from URL params

        // Find the testimonial by ID
        const faq = await FAQ.findById(id);

        if (!faq) {
            return res.status(404).json({
                success: false,
                message: "faq not found",
            });
        }

        // Toggle the status
        faq.status = faq.status === "active" ? "inactive" : "active";

        // Save the updated testimonial
        await faq.save();

        res.status(200).json({
            success: true,
            message: "faq status updated successfully",
            data: faq,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle faq status",
            error: error.message,
        });
    }
};


const deleteFAQ = async (req, res) => {
    try {
        const { id } = req.params; // Extract testimonial ID from URL params

        // Find and delete the testimonial
        const deletedFAQ = await FAQ.findByIdAndDelete(id);

        if (!deletedFAQ) {
            return res.status(404).json({
                success: false,
                message: "FAQ not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "FAQ deleted successfully",
            data: deletedFAQ,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete FAQ",
            error: error.message,
        });
    }
};


const FAQs = async (req, res) => {
    FAQ.find().then((data) => {
        res.status(200).json({ success: true, data })
    }).catch((error) => {
        res.status(500).json({ success: false, error: error.message })
    })
}

const getFaq = (req, res) => {

    const { id } = req.params;
    if (id) {
        FAQ.findOne({ _id: id }).then((data) => {
            res.status(200).json({ success: true, data })
        }).catch((error) => {
            res.status(500).json({ success: false, error: error.message })
        })
    } else {
        res.status(400).json({
            msg: "id not found"
        })
    }

}



module.exports = { handleAddFAQ, editFAQ, toggleFAQStatus, deleteFAQ, FAQs, getFaq }