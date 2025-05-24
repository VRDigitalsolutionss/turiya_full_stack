const Invoice = require("../../model/invoiceModel");

// **Add Invoice**
const addInvoice = async (req, res) => {
    try {
        const { 
            order_details, 
            product_details, 
            customer_details, 
            amount_due, 
            payment_status 
        } = req.body;

        // Validate required fields
        if (!order_details || !product_details || !customer_details || !amount_due) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing",
            });
        }

        const newInvoice = new Invoice({
            order_details,
            product_details,
            customer_details,
            amount_due,
            payment_status,
        });

        const savedInvoice = await newInvoice.save();

        res.status(201).json({
            success: true,
            message: "Invoice added successfully",
            data: savedInvoice,
        });
    } catch (error) {
        console.error("Error adding Invoice:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add Invoice",
            error: error.message,
        });
    }
};

// **Edit Invoice**
const editInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const invoice = await Invoice.findById(id);
        if (!invoice) {
            return res.status(404).json({
                success: false,
                message: "Invoice not found",
            });
        }

        const updatedInvoice = await Invoice.findByIdAndUpdate(id, updateFields, { new: true });

        res.status(200).json({
            success: true,
            message: "Invoice updated successfully",
            data: updatedInvoice,
        });
    } catch (error) {
        console.error("Error editing Invoice:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update Invoice",
            error: error.message,
        });
    }
};

// **Delete Invoice**
const deleteInvoice = async (req, res) => {
    try {
        const { id } = req.params;

        const invoice = await Invoice.findById(id);
        if (!invoice) {
            return res.status(404).json({
                success: false,
                message: "Invoice not found",
            });
        }

        await Invoice.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Invoice deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting Invoice:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Invoice",
            error: error.message,
        });
    }
};

// **Get All Invoices**
const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json({
            success: true,
            data: invoices,
        });
    } catch (error) {
        console.error("Error fetching Invoices:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Invoices",
            error: error.message,
        });
    }
};

// **Get Invoice by ID**
const getInvoiceById = async (req, res) => {
    try {
        const { id } = req.params;

        const invoice = await Invoice.findById(id);
        if (!invoice) {
            return res.status(404).json({
                success: false,
                message: "Invoice not found",
            });
        }

        res.status(200).json({
            success: true,
            data: invoice,
        });
    } catch (error) {
        console.error("Error fetching Invoice by ID:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Invoice by ID",
            error: error.message,
        });
    }
};

// **Toggle Invoice Payment Status**
const toggleInvoiceStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const invoice = await Invoice.findById(id);
        if (!invoice) {
            return res.status(404).json({
                success: false,
                message: "Invoice not found",
            });
        }

        // Toggle payment status
        invoice.payment_status = invoice.payment_status === 'paid' ? 'unpaid' : 'paid';
        const updatedInvoice = await invoice.save();

        res.status(200).json({
            success: true,
            message: `Invoice payment status updated to ${updatedInvoice.payment_status}`,
            data: updatedInvoice,
        });
    } catch (error) {
        console.error("Error toggling Invoice payment status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle payment status",
            error: error.message,
        });
    }
};

module.exports = {
    addInvoice,
    editInvoice,
    deleteInvoice,
    getAllInvoices,
    getInvoiceById,
    toggleInvoiceStatus
};
