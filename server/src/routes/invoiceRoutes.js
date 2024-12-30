const express = require("express");
const {
    addInvoice,
    editInvoice,
    deleteInvoice,
    getAllInvoices,
    getInvoiceById,
    toggleInvoiceStatus,
} = require("../controller/sales/invoiceController");

const invoiceRoutes = express.Router();

// Add Invoice
invoiceRoutes.post("/add_invoice", addInvoice);

// Edit Invoice
invoiceRoutes.put("/edit_invoice/:id", editInvoice);

// Delete Invoice
invoiceRoutes.delete("/delete_invoice/:id", deleteInvoice);

// Get All Invoices
invoiceRoutes.get("/all_invoices", getAllInvoices);

// Get Invoice by ID
invoiceRoutes.get("/get_invoice/:id", getInvoiceById);

// Toggle Invoice Payment Status
invoiceRoutes.put("/toggle_status_invoice/:id", toggleInvoiceStatus);

module.exports = invoiceRoutes;
