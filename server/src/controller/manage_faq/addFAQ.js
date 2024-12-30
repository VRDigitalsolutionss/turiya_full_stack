
const FAQ = require("../../model/Faq");
const FAQCategory = require("../../model/FAQCategory");



const handleAddFAQ = async (req,res) => {
    // try {
    //     // Extract data from the request body
    //     const { category, question, answer } = req.body;

    //     // Validate required fields
    //     if (!category || !question || !answer) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "category, question, and answer are required",
    //         });
    //     }

    //     // Create a new testimonial document
    //     const newFAQ= new FAQ({
    //         category,
    //         question,
    //         answer,
       
    //     });

    //     // Save to the database
    //     await newFAQ.save();

    //     // Send success response
    //     res.status(201).json({
    //         success: true,
    //         message: "FAQ added successfully",
    //         data: newFAQ,
    //     });
    // } catch (error) {
    //     // Handle any errors
    //     res.status(500).json({
    //         success: false,
    //         message: "Failed to add FAQ",
    //         error: error.message,
    //     });
    // }


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

const editFAQ = async  (req, res) => {

const id  = req.params.id;

    try {
        // Extract data from the request body
        const { category, question,answer } = req.body;

        // Validate required fields
        if (!category || !question || !answer) {
            return res.status(400).json({
                success: false,
                message: "category, question, and answer are required",
            });
        }

        if (id) {
            // If ID is provided, update the testimonial
            const updatedcategory = await FAQ.findByIdAndUpdate(
                id,
                { category, question, answer },
            );

            if (!updatedcategory) {
                return res.status(404).json({
                    success: false,
                    message: "FAQ not found for update",
                });
            }

            // Send success response for update
            return res.status(200).json({
                success: true,
                message: "FAQ updated successfully",
                data: updatedcategory,
            });
        } else {
            // If no ID is provided, create a new testimonial
            const newFAQ = new FAQ({
                category,
                question,
                answer,
              
            });

            // Save to the database
            await newFAQ.save();

            // Send success response for creation
            return res.status(201).json({
                success: true,
                message: "FAQ added successfully",
                data: newFAQ,
            });
        }
    } catch (error) {
        // Handle any errors
        res.status(500).json({
            success: false,
            message: "Failed to add or update fAQ",
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


const FAQs = async (req,res) => {
    FAQ.find().then((data) => {
        res.status(200).json({ success: true, data })
    }).catch((error) => {
        res.status(500).json({ success: false, error: error.message })
    })
}

const getFaq = (req,res) => {

    const { id } = req.params;
    if (id) {
        FAQ.findOne({_id:id}).then((data) => {
            res.status(200).json({ success: true, data })
        }).catch((error) => {
            res.status(500).json({ success: false, error: error.message })
        })
    } else {
        res.status(400).json({
            msg:"id not found"
        })
    }

}



module.exports= {handleAddFAQ,editFAQ,toggleFAQStatus,deleteFAQ,FAQs,getFaq}