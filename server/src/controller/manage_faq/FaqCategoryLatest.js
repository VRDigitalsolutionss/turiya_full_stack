const FAQCategory = require("../../model/FaqLatest");


// Controller function to add a new FAQ category
const FaqCategoryLatest = async (req, res) => {
  try {
    const { faqCategory, status } = req.body; // Expecting the category name and status in the request body

    // Check if the category already exists
    const existingCategory = await FAQCategory.findOne({ faqCategory });
    if (existingCategory) {
      return res.status(400).json({ message: "FAQ category already exists" });
    }

    // Create a new FAQCategory document
    const newFAQCategory = new FAQCategory({
      faqCategory,
      status: status || "active", // If status is not provided, default to 'active'
    });

    // Save the new FAQCategory to the database
    await newFAQCategory.save();

    // Respond with the created FAQ category
    res.status(201).json({
      message: "FAQ Category created successfully",
      newFAQCategory,
    });
  } catch (error) {
    console.error("Error adding FAQ category:", error);
    res.status(500).json({
      message: "Error adding FAQ category",
      error: error.message,
    });
  }
};

module.exports = { FaqCategoryLatest };
