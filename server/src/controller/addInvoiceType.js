const RegisteredUser = require("../model/Register");

const addInvoiceType = async (req, res) => {
    try {
        const { userId, invoiceType } = req.body;  // Expecting userId and invoiceType in request body
        
        // Validate input
        if (!userId || !invoiceType) {
            return res.status(400).json({ message: 'User ID and Invoice Type are required' });
        }

        // Find the user and update their invoiceType field
        const user = await RegisteredUser.findByIdAndUpdate(
            userId, 
            { invoiceType }, 
           
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send back the updated user information
        return res.status(200).json({ message: 'Invoice type added successfully', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while adding the invoice type' });
    }
};

module.exports = {
    addInvoiceType,
};