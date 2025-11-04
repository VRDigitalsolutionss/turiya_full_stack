const express = require("express");
const {
  generatePdfFromInvoiceNumber,
  generatePdfAndSendEmail,
  getAllInvoices
} = require("../controller/invoice/invoicePdfGenerator");

const invoicePdfRoutes = express.Router();

// Generate PDF from invoice number
invoicePdfRoutes.get("/generate-pdf/:invoiceNumber", generatePdfFromInvoiceNumber);

// Generate PDF and send via email
invoicePdfRoutes.post("/generate-pdf-and-email", generatePdfAndSendEmail);

// Get all invoices (basic information)
invoicePdfRoutes.get("/all-invoices", getAllInvoices);

module.exports = invoicePdfRoutes;

