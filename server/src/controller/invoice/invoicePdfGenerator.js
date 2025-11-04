const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const PurchasedModule = require("../../model/PurchasedModule");

/**
 * Generate PDF invoice from invoice number
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const generatePdfFromInvoiceNumber = async (req, res) => {
  try {
    const { invoiceNumber } = req.params;
    
    if (!invoiceNumber) {
      return res.status(400).json({ 
        success: false, 
        message: "Invoice number is required" 
      });
    }

    // Find the purchased module by invoice number
    const purchasedModule = await PurchasedModule.findOne({ 
      invoiceNumber: invoiceNumber 
    }).populate('selectedMeal').populate('selectedRoom');

    if (!purchasedModule) {
      return res.status(404).json({ 
        success: false, 
        message: "Invoice not found with the provided invoice number" 
      });
    }

    // If PDF already exists, return it
    if (purchasedModule.invoice) {
      res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=invoice_${invoiceNumber}.pdf`,
      });
      return res.send(purchasedModule.invoice);
    }

    // Generate new PDF if it doesn't exist
    console.log("Starting PDF generation for invoice:", invoiceNumber);
    
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();

    // Generate invoice HTML
    const invoiceHTML = generateInvoiceHTML(purchasedModule);
    console.log("Generated HTML template, length:", invoiceHTML.length);
    
    await page.setContent(invoiceHTML, { 
      waitUntil: "networkidle0",
      timeout: 30000 
    });
    
    console.log("Page content loaded, generating PDF...");
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });

    console.log("PDF generated, buffer size:", pdfBuffer.length);
    await browser.close();

    // Validate PDF buffer
    if (!pdfBuffer || pdfBuffer.length === 0) {
      throw new Error("Generated PDF buffer is empty");
    }

    // Check if it's a valid PDF (starts with %PDF)
    const pdfHeader = pdfBuffer.slice(0, 4).toString();
    if (pdfHeader !== '%PDF') {
      console.error("Invalid PDF header:", pdfHeader);
      throw new Error("Generated content is not a valid PDF");
    }

    // Save the PDF buffer to the database
    purchasedModule.invoice = Buffer.from(pdfBuffer);
    await purchasedModule.save();

    console.log("PDF saved to database and ready to send");

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=invoice_${invoiceNumber}.pdf`,
    });

    res.send(pdfBuffer);

  } catch (error) {
    console.error("Error generating PDF from invoice number:", error);
    res.status(500).json({ 
      success: false, 
      message: "An error occurred while generating the PDF",
      error: error.message 
    });
  }
};

/**
 * Generate PDF invoice and send via email
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const generatePdfAndSendEmail = async (req, res) => {
  try {
    const { invoiceNumber, email } = req.body;
    
    if (!invoiceNumber) {
      return res.status(400).json({ 
        success: false, 
        message: "Invoice number is required" 
      });
    }

    // Find the purchased module by invoice number
    const purchasedModule = await PurchasedModule.findOne({ 
      invoiceNumber: invoiceNumber 
    }).populate('selectedMeal').populate('selectedRoom');

    if (!purchasedModule) {
      return res.status(404).json({ 
        success: false, 
        message: "Invoice not found with the provided invoice number" 
      });
    }

    const targetEmail = email || purchasedModule.email;
    
    if (!targetEmail) {
      return res.status(400).json({ 
        success: false, 
        message: "Email address is required" 
      });
    }

    // Generate PDF if it doesn't exist
    let pdfBuffer = purchasedModule.invoice;
    
    if (!pdfBuffer) {
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();

      const invoiceHTML = generateInvoiceHTML(purchasedModule);
      await page.setContent(invoiceHTML, { waitUntil: "networkidle0" });
      
      pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
      });

      await browser.close();

      // Save the PDF buffer to the database
      purchasedModule.invoice = Buffer.from(pdfBuffer);
      await purchasedModule.save();
    }

    // Send email with PDF attachment
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Turiya Yoga Team" <${process.env.EMAIL_USER}>`,
      to: targetEmail,
      subject: `Invoice ${invoiceNumber} - Turiya Yoga`,
      html: `
        <html>
          <body>
            <p>Dear ${purchasedModule.customerName},</p>
            <p>Please find attached your invoice for the Turiya Yoga course.</p>
            <p>Invoice Number: ${invoiceNumber}</p>
            <p>Amount: €${purchasedModule.totalPrice}</p>
            <p>If you have any questions, please don't hesitate to contact us.</p>
            <p>Best regards,<br><strong>Turiya Yoga Team</strong></p>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: `invoice_${invoiceNumber}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Invoice PDF generated and sent successfully",
      invoiceNumber: invoiceNumber,
      email: targetEmail
    });

  } catch (error) {
    console.error("Error generating PDF and sending email:", error);
    res.status(500).json({ 
      success: false, 
      message: "An error occurred while generating PDF and sending email",
      error: error.message 
    });
  }
};

/**
 * Generate HTML template for invoice
 * @param {Object} purchasedModule - The purchased module data
 * @returns {string} HTML string
 */
const generateInvoiceHTML = (purchasedModule) => {
  const currentDate = new Date().toLocaleDateString('de-DE');
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice PDF</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            font-size: 14px;
            color: #333;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px solid black;
        }

        .logo img {
            height: 80px;
        }

        .info {
            text-align: right;
            font-size: 12px;
        }

        h1 {
            font-size: 20px;
            margin-top: 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            margin-bottom: 30px;
        }

        table, th, td {
            border: 1px solid #ddd;
        }

        th, td {
            padding: 8px;
            text-align: left;
        }

        .totals {
            margin-top: 60px;
            text-align: right;
            margin-bottom: 50px;
        }

        .totals strong {
            display: block;
            margin-bottom: 5px;
        }

        .footer {
            display: flex;
            justify-content: space-between;
            margin-top: 70px;
            font-size: 12px;
        }

        .footer a {
            text-decoration: none;
            color: black;
        }

        .footer div {
            flex: 1;
        }

        .footer div:nth-child(2) {
            text-align: center;
        }

        .footer div:nth-child(3) {
            text-align: right;
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="logo">
           <img src="https://api.turiyayoga.de/uploads/logo/header_logo_new.png" alt="Turiya Yoga Logo">
        </div>
        <div class="info">
            <p>Emanuel Wintermeyer<br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main<br>
            info@turiyayoga.de<br>
            St.-Nr.: 013/882/05939</p>
        </div>
    </header>

    <!-- Invoice Recipient and Details -->
    <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
        <div style="flex: 1;">
            <strong>${purchasedModule.customerName}</strong><br>
            ${purchasedModule.customerAddress}
        </div>
        <div style="flex: 1; text-align: right;">
            <strong>Rechnung Nr.:</strong> ${purchasedModule.invoiceNumber}<br>
            <strong>Datum:</strong> ${currentDate}<br>
            <strong>Kundennummer:</strong> ${purchasedModule.customerNumber || 'N/A'}<br>
            <strong>Bestellnummer:</strong> ${purchasedModule.orderNumber || 'N/A'}
        </div>
    </div>

    <!-- Invoice Items Table -->
    <table>
        <thead>
            <tr>
                <th>Pos.</th>
                <th>Bezeichnung</th>
                <th>Menge</th>
                <th>Einheit</th>
                <th>Preis (€)</th>
                <th>Steuer</th>
                <th>Gesamt</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>${purchasedModule.productDescription || 'Yoga Course'}</td>
                <td>${purchasedModule.quantity || 1}</td>
                <td>Stk.</td>
                <td>€${purchasedModule.price || purchasedModule.totalPrice || 0}</td>
                <td>zzgl. ${(purchasedModule.userDetails?.invoiceType === 'Private_Invoice' || purchasedModule.invoiceType === 'private') ? '0%' : '19%'}</td>
                <td>€${purchasedModule.totalPrice || 0}</td>
            </tr>
        </tbody>
    </table>

    <!-- Totals -->
    <div class="totals">
        <strong>Zwischensumme: €${purchasedModule.totalPrice || 0}</strong>
        ${(purchasedModule.userDetails?.invoiceType === 'Private_Invoice' || purchasedModule.invoiceType === 'private') ? 
          `<strong>0% USt aus €${purchasedModule.totalPrice || 0}: €0.00</strong>` :
          `<strong>MwSt. (19%): €${((purchasedModule.totalPrice || 0) * 0.19).toFixed(2)}</strong>`
        }
        <strong style="font-size: 16px;">Gesamtbetrag: €${(purchasedModule.userDetails?.invoiceType === 'Private_Invoice' || purchasedModule.invoiceType === 'private') ? 
          (purchasedModule.totalPrice || 0).toFixed(2) : 
          ((purchasedModule.totalPrice || 0) * 1.19).toFixed(2)
        }</strong>
    </div>

    <!-- Payment Information -->
    <div style="margin-top: 40px;">
        <p style="margin-top: 20px;">Zahlbar sofort rein netto.</p>
        ${(purchasedModule.userDetails?.invoiceType === 'Private_Invoice' || purchasedModule.invoiceType === 'private') ? 
          '<p>USt. Befreiung gemäß § 4 Nr. 21 UStG.</p>' : 
          ''
        }
        <p>Wir freuen uns, dich bald bei uns begrüßen zu dürfen und wünschen dir bis dahin alles Gute.</p>
        <p>Mit freundlichen Grüßen<br/>Emanuel Wintermeyer</p>
        
        <h3>Zahlungsinformationen</h3>
        <p><strong>Kontoinhaber:</strong> Emanuel Wintermeyer</p>
        <p><strong>IBAN:</strong> DE64 5005 0201 0200 6907 28</p>
        <p><strong>Kreditinstitut:</strong> Frankfurter Sparkasse</p>
        <p><strong>Verwendungszweck:</strong> ${purchasedModule.invoiceNumber}</p>
    </div>

    <!-- Footer -->
    <div class="footer">
        <div>
            <p>Emanuel Wintermeyer<br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main</p>
        </div>
        <div>
            <p>web. <a href="http://www.turiyayoga.de">www.turiyayoga.de</a><br>
            Tel. (069) - 20134987<br>
            Email: <a href="mailto:info@turiyayoga.de">info@turiyayoga.de</a></p>
        </div>
        <div>
            <p>Kontoinhaber: Emanuel Wintermeyer<br>
            IBAN: DE64 5005 0201 0200 6907 28<br>
            Kreditinstitut: Frankfurter Sparkasse</p>
        </div>
    </div>
</body>
</html>`;
};

/**
 * Get all invoices with basic information
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await PurchasedModule.find({})
      .select('invoiceNumber customerName customerAddress totalPrice email createdAt')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: invoices.length,
      data: invoices
    });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    res.status(500).json({ 
      success: false, 
      message: "An error occurred while fetching invoices",
      error: error.message 
    });
  }
};

module.exports = {
  generatePdfFromInvoiceNumber,
  generatePdfAndSendEmail,
  getAllInvoices
};
