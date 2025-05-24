const express = require("express");
const {
    addInvoice,
    editInvoice,
    deleteInvoice,
    getAllInvoices,
    getInvoiceById,
    toggleInvoiceStatus,
} = require("../controller/sales/invoiceController");
// const { generateInvoice } = require("../controller/sales/invoiceController");
const { generateInvoice, generateInvoices, generateInvoiceAndSendEmail, generateInvoicesAndSendEmail, generateCancelInvoice } = require("../controller/invoice/invoiceGenerator");

const invoicegenerateRoutes = express.Router();

// Add Invoice
// invoicegenerateRoutes.post("/generateInvoice", generateInvoices);
invoicegenerateRoutes.post("/generateInvoice", generateInvoicesAndSendEmail);

invoicegenerateRoutes.post("/generateCancelInvoice", generateCancelInvoice);

// Edit Invoice
invoicegenerateRoutes.put("/edit_invoice/:id", editInvoice);

// Delete Invoice
invoicegenerateRoutes.delete("/delete_invoice/:id", deleteInvoice);

// Get All Invoices
invoicegenerateRoutes.get("/all_invoices", getAllInvoices);

// Get Invoice by ID
invoicegenerateRoutes.get("/get_invoice/:id", getInvoiceById);

// Toggle Invoice Payment Status
invoicegenerateRoutes.put("/toggle_status_invoice/:id", toggleInvoiceStatus);

module.exports = invoicegenerateRoutes;
