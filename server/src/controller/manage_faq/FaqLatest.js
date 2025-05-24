const FAQLatest = require("../../model/FaqLatest");
const FAQCategoryLatest = require("../../model/FaqCategoryLatest");


const addFAQLatest = async (req, res) => {
    try {
      
  
    const { FAQCategoryLatestId } = req.params; // Get the category ID from params
    const { category, question, answer, status } = req.body;

    // Check if the FAQ Category exists
    const FAQLatestCreated = await FAQCategoryLatest.findById(FAQCategoryLatestId);
    if (!FAQLatestCreated) {
      return res.status(404).json({ message: "FAQ Category not found" });
    }

    // Create the new FAQ document and associate it with the FAQ category
    const newFAQ = new FAQLatest({
      FAQCategoryLatest: FAQCategoryLatestId, // Link the FAQ with the specific category
      category,
      question,
      answer,
      status,
    });

    // Save the new FAQ
    await newFAQ.save();
    res.status(201).json({ message: "FAQ added successfully", newFAQ });
  } catch (error) {
    console.error("Error adding FAQ:", error);
    res.status(500).json({ message: "Error adding FAQ", error });
  }
// =============================================================================

try {
  const { categoryId, question, answer } = req.body; // Get data from the request body
  
  // Check if the category exists
  const category = await FAQCategory.findById(categoryId);
  if (!category) {
      return res.status(400).json({ success: false, message: "Category not found" });
  }

  // Create a new FAQ document
  const newFAQ = new FAQ({
      category: categoryId,
      question,
      answer,
  });

  // Save the FAQ document to the database
  const savedFAQ = await newFAQ.save();
  res.status(201).json({ success: true, data: savedFAQ });
} catch (error) {
  res.status(400).json({ success: false, error: error.message });
}

};


const addFAQCategoryLatest = async (req, res) => {
    try {
      const { faqCategory, status } = req.body; // Expecting the category name and status in the request body
  
      // Check if the category already exists

  
      // Create a new FAQCategoryLatest document
      const newFAQCategoryLatest = new FAQCategoryLatest({
        faqCategory,
        status: status || "active", // If status is not provided, default to 'active'
      });
  
      // Save the new FAQCategoryLatest to the database
      await newFAQCategoryLatest.save();
  
      // Respond with the created FAQ category
      res.status(201).json({
        message: "FAQ Category created successfully",
        newFAQCategoryLatest,
      });
    } catch (error) {
      console.error("Error adding FAQ category:", error);
      res.status(500).json({
        message: "Error adding FAQ category",
        error: error.message,
      });
    }
};
  


module.exports = { addFAQLatest,addFAQCategoryLatest };
