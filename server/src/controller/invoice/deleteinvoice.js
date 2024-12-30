


// ================================ new code =============================================


// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");
// // const logoImg = require('../uploads/logo/logo.webp');



// const generateInvoice = async (req, res) => {
//   // ... other code ... (invoice data extraction)
//   const {
//     invoiceNumber,
//     customerNumber,
//     orderNumber,
//     dueDate,
//     deliveryDate,
//     customerName,
//     customerAddress,
//     productDescription,
//     quantity,
//     unitPrice,
//     totalPrice,
//     email, // Add email field from the request body
//   } = req.body;

//   try {
//     const doc = new PDFDocument({ margin: 50 });
//     const buffers = [];

//     // Capture the PDF in memory
//     doc.on("data", buffers.push.bind(buffers));
//     doc.on("end", async () => {
//       const pdfData = Buffer.concat(buffers);

//       // Set up Nodemailer transporter
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER, // Your email address
//           pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//         },
//       });

//       // Email options
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: `Invoice - ${invoiceNumber}`,
//         text: `Dear ${customerName},\n\nPlease find attached the invoice for your order.\n\nThank you!`,
//         attachments: [
//           {
//             filename: `invoice-${invoiceNumber}.pdf`,
//             content: pdfData, // Attach the generated PDF
//           },
//         ],
//       };

//       // Send email
//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//           console.error("Error sending email:", err);
//           return res.status(500).send({ error: "Failed to send email" });
//         }
//         console.log("Email sent:", info.response);
//         res.status(200).send({ message: "Invoice generated and sent via email." });
//       });
//     });

//     // Start designing the invoice
//     // Header Section (without image)

//     // doc.image('../uploads/logo/logo.webp', 50, 50); // Replace 'your_logo.png' with your logo path

//     // Right-aligned text
//     doc.fontSize(12)
//       .text('Turiya Yoga', 400, 50, { align: 'right' })
//       .text('Herbartstrasse 12', 400, 65, { align: 'right' })
//       .text('60316 Frankfurt am Main', 400, 80, { align: 'right' })
//       .text('+49 (0)69 - 20134987', 400, 95, { align: 'right' })
//       .text('info@turiyayoga.de', 400, 110, { align: 'right' })
//       .text('St.-Nr.: 013/882/05939', 400, 125, { align: 'right' });
//     // ========================== header old ==========================


//     // Line separator
//     doc.moveTo(50, 160).lineTo(550, 160).stroke();
//     doc.fontSize(14).text(`Vereinbarung vom ${dueDate}`, 50, 250);
//     // Vereinbarung vom 23-10-24
//     // Informationen zur Rechnungsstellung
//     // Invoice and Customer Details
//     doc.fontSize(12)
//       .text("DSCS Education", 50, 170)
//       .text(customerAddress, 50, 185)
//       .text("Delhi NCT India - 110018", 50, 200);



//     doc.moveDown(1);
//     doc.fontSize(12)
//       .text(
//         `Hallo ${customerName},\nvielen Dank für deine Anmeldung bei Turiya Yoga. gerne bestätigen wir deine Buchung wie folgt.`,
//         50,
//         270
//       );

//     // Product Table Header
//     doc.moveTo(50, 320).lineTo(550, 320).stroke();
//     doc.fontSize(12).text("Pos.", 50, 330);
//     doc.text("Bezeichnung", 100, 330);
//     doc.text("Menge", 300, 330);
//     doc.text("Einheit", 350, 330);
//     doc.text("Preis(€)", 400, 330);
//     doc.text("Steuer", 450, 330);
//     doc.text("Gesamt", 500, 330);
//     doc.moveTo(50, 350).lineTo(550, 350).stroke();

//     // Product Details
//     doc.text("1", 50, 360)
//       .text(productDescription, 100, 360)
//       .text(quantity, 300, 360)
//       .text("Stk.", 350, 360)
//       .text(unitPrice, 400, 360)
//       .text("zzgl. 0%", 450, 360)
//       .text(totalPrice, 500, 360);

//     doc.moveTo(50, 380).lineTo(550, 380).stroke();

//     // Summary Section
//     doc.text("Zwischensumme:", 400, 400)
//       .text(totalPrice, 500, 400)
//       .text("0% USt aus 0.00€:", 400, 415)
//       .text("0.00€", 500, 415)
//       .font("Helvetica-Bold")
//       .text("Gesamtbetrag:", 400, 430)
//       .text(`${totalPrice}€`, 500, 430);

//       doc.font("Helvetica")
//       .text("Zahlbar sofort rein netto.", 50, 460)
//       .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 475);

//     // ... other code ... (invoice design)

// // Footer Section - Three Columns with Balanced Text Distribution
// const footerTextWidth = 500; // Adjust based on your desired column width
// const columnWidth = footerTextWidth / 3; // Calculate individual column width

// doc.fontSize(10)
//   .text("Emanuel Wintermeyer", 50, 500)
//   .text("web: www.turiyayoga.de", 50 + columnWidth, 500)
//   .text("Kontoinhaber: Emanuel Wintermeyer", 50 + 2 * columnWidth, 500);

// doc.text("Herbartstrasse 12", 50, 515)
//   .text("Tel.: (069)-20134987", 50 + columnWidth, 515)
//   .text("IBAN: DE64 5005 0201 0200 6907 28", 50 + 2 * columnWidth, 515);

// doc.text("60316 Frankfurt am Main", 50, 530)
//   .text("Email: info@turiyayoga.de", 50 + columnWidth, 530)
//   .text("Kreditinstitut: Frankfurter Sparkasse", 50 + 2 * columnWidth, 530);


//     // =========================================


    
//     doc.end();
//   } catch (error) {
//     console.error("Error generating invoice PDF:", error);
//     res.status(500).send({ error: "Failed to generate invoice PDF" });
//   }
// };

// module.exports = { generateInvoice };


// =====================================================================


// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");

// const generateInvoice = async (req, res) => {
//   // Invoice data extraction from the request body
//   const {
//     invoiceNumber,
//     customerNumber,
//     orderNumber,
//     dueDate,
//     deliveryDate,
//     customerName,
//     customerAddress,
//     productDescription,
//     quantity,
//     unitPrice,
//     totalPrice,
//     email,
//   } = req.body;

//   try {
//     // const uploadedImagePath = "/mnt/data/image.png"; // Path to the uploaded image
//     const doc = new PDFDocument({ margin: 50 });
//     const buffers = [];

//     // Capture the PDF in memory
//     doc.on("data", buffers.push.bind(buffers));
//     doc.on("end", async () => {
//       const pdfData = Buffer.concat(buffers);

//       // Set up Nodemailer transporter
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER, // Your email address
//           pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//         },
//       });

//       // Email options
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: `Invoice - ${invoiceNumber}`,
//         text: `Dear ${customerName},\n\nPlease find attached the invoice for your order.\n\nThank you!`,
//         attachments: [
//           {
//             filename: `invoice-${invoiceNumber}.pdf`,
//             content: pdfData, // Attach the generated PDF
//           },
//         ],
//       };

//       // Send email
//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//           console.error("Error sending email:", err);
//           return res.status(500).send({ error: "Failed to send email" });
//         }
//         console.log("Email sent:", info.response);
//         res.status(200).send({ message: "Invoice generated and sent via email." });
//       });
//     });

//     // Header Section (First Page Content)
//     doc.fontSize(12)
//       .text("Turiya Yoga", 400, 50, { align: "right" })
//       .text("Herbartstrasse 12", 400, 65, { align: "right" })
//       .text("60316 Frankfurt am Main", 400, 80, { align: "right" })
//       .text("+49 (0)69 - 20134987", 400, 95, { align: "right" })
//       .text("info@turiyayoga.de", 400, 110, { align: "right" })
//       .text("St.-Nr.: 013/882/05939", 400, 125, { align: "right" });

//     // Line separator
//     doc.moveTo(50, 160).lineTo(550, 160).stroke();
//     doc.fontSize(14).text(`Vereinbarung vom ${dueDate}`, 50, 250);

//     // Customer details
//     doc.fontSize(12)
//       .text("DSCS Education", 50, 170)
//       .text(customerAddress, 50, 185)
//       .text("Delhi NCT India - 110018", 50, 200);

//     doc.moveDown(1);
//     doc.fontSize(12)
//       .text(
//         `Hallo ${customerName},\nvielen Dank für deine Anmeldung bei Turiya Yoga. gerne bestätigen wir deine Buchung wie folgt.`,
//         50,
//         270
//       );

//     // Product Table Header
//     doc.moveTo(50, 320).lineTo(550, 320).stroke();
//     doc.fontSize(12).text("Pos.", 50, 330);
//     doc.text("Bezeichnung", 100, 330);
//     doc.text("Menge", 300, 330);
//     doc.text("Einheit", 350, 330);
//     doc.text("Preis(€)", 400, 330);
//     doc.text("Steuer", 450, 330);
//     doc.text("Gesamt", 500, 330);
//     doc.moveTo(50, 350).lineTo(550, 350).stroke();

//     // Product Details
//     doc.text("1", 50, 360)
//       .text(productDescription, 100, 360)
//       .text(quantity, 300, 360)
//       .text("Stk.", 350, 360)
//       .text(unitPrice, 400, 360)
//       .text("zzgl. 0%", 450, 360)
//       .text(totalPrice, 500, 360);

//     doc.moveTo(50, 380).lineTo(550, 380).stroke();

//     // Summary Section
//     doc.text("Zwischensumme:", 400, 400)
//       .text(totalPrice, 500, 400)
//       .text("0% USt aus 0.00€:", 400, 415)
//       .text("0.00€", 500, 415)
//       .font("Helvetica-Bold")
//       .text("Gesamtbetrag:", 400, 430)
//       .text(`${totalPrice}€`, 500, 430);

//     doc.font("Helvetica")
//       .text("Zahlbar sofort rein netto.", 50, 460)
//       .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 475);

//     // Footer Section
//     const footerTextWidth = 500; // Adjust based on your desired column width
//     const columnWidth = footerTextWidth / 3; // Calculate individual column width

//     doc.fontSize(10)
//       .text("Emanuel Wintermeyer", 50, 500)
//       .text("web: www.turiyayoga.de", 50 + columnWidth, 500)
//       .text("Kontoinhaber: Emanuel Wintermeyer", 50 + 2 * columnWidth, 500);

//     doc.text("Herbartstrasse 12", 50, 515)
//       .text("Tel.: (069)-20134987", 50 + columnWidth, 515)
//       .text("IBAN: DE64 5005 0201 0200 6907 28", 50 + 2 * columnWidth, 515);

//     doc.text("60316 Frankfurt am Main", 50, 530)
//       .text("Email: info@turiyayoga.de", 50 + columnWidth, 530)
//       .text("Kreditinstitut: Frankfurter Sparkasse", 50 + 2 * columnWidth, 530);

//     // Add a new page and include the uploaded image
//     doc.addPage(); // Create a new page
//     // doc.image(uploadedImagePath, {
//     //   fit: [500, 400], // Scale image to fit within this size
//     //   align: "center",
//     //   valign: "top",
//     // });

//     // Optional: Add text below the image
//     doc.moveDown(2)
//       .fontSize(12)
//       .text(
//         "Please review the agreement and terms provided above. For any questions, contact us.",
//         { align: "center" }
//       );

//     doc.end();
//   } catch (error) {
//     console.error("Error generating invoice PDF:", error);
//     res.status(500).send({ error: "Failed to generate invoice PDF" });
//   }
// };

// module.exports = { generateInvoice };


// ========================================================


// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");
// // const image = require('')
// const generateInvoice = async (req, res) => {
//   // Invoice data extraction from the request body
//   const {
//     invoiceNumber,
//     customerNumber,
//     orderNumber,
//     dueDate,
//     deliveryDate,
//     customerName,
//     customerAddress,
//     productDescription,
//     quantity,
//     unitPrice,
//     totalPrice,
//     email,
//   } = req.body;

//   try {
//     // const uploadedImagePath = "/mnt/data/image.png"; // Path to the uploaded image
//     // const checkIconPath = "/mnt/data/check_icon.png"; // Add check icon if needed

//     const doc = new PDFDocument({ margin: 50 });
//     const buffers = [];

//     // Capture the PDF in memory
//     doc.on("data", buffers.push.bind(buffers));
//     doc.on("end", async () => {
//       const pdfData = Buffer.concat(buffers);

//       // Set up Nodemailer transporter
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER, // Your email address
//           pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//         },
//       });

//       // Email options
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: `Invoice - ${invoiceNumber}`,
//         text: `Dear ${customerName},\n\nPlease find attached the invoice for your order.\n\nThank you!`,
//         attachments: [
//           {
//             filename: `invoice-${invoiceNumber}.pdf`,
//             content: pdfData, // Attach the generated PDF
//           },
//         ],
//       };

//       // Send email
//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//           console.error("Error sending email:", err);
//           return res.status(500).send({ error: "Failed to send email" });
//         }
//         console.log("Email sent:", info.response);
//         res.status(200).send({ message: "Invoice generated and sent via email." });
//       });
//     });

//     // Header Section (First Page Content)
//     doc.fontSize(12)
//       .text("Turiya Yoga", 400, 50, { align: "right" })
//       .text("Herbartstrasse 12", 400, 65, { align: "right" })
//       .text("60316 Frankfurt am Main", 400, 80, { align: "right" })
//       .text("+49 (0)69 - 20134987", 400, 95, { align: "right" })
//       .text("info@turiyayoga.de", 400, 110, { align: "right" })
//       .text("St.-Nr.: 013/882/05939", 400, 125, { align: "right" });

//     // Line separator
//     doc.moveTo(50, 160).lineTo(550, 160).stroke();
//     doc.fontSize(14).text(`Vereinbarung vom ${dueDate}`, 50, 250);

//     // Customer details
//     doc.fontSize(12)
//       .text("DSCS Education", 50, 170)
//       .text(customerAddress, 50, 185)
//       .text("Delhi NCT India - 110018", 50, 200);

//     doc.moveDown(1);
//     doc.fontSize(12)
//       .text(
//         `Hallo ${customerName},\nvielen Dank für deine Anmeldung bei Turiya Yoga. gerne bestätigen wir deine Buchung wie folgt.`,
//         50,
//         270
//       );

//     // Product Table Header
//     doc.moveTo(50, 320).lineTo(550, 320).stroke();
//     doc.fontSize(12).text("Pos.", 50, 330);
//     doc.text("Bezeichnung", 100, 330);
//     doc.text("Menge", 300, 330);
//     doc.text("Einheit", 350, 330);
//     doc.text("Preis(€)", 400, 330);
//     doc.text("Steuer", 450, 330);
//     doc.text("Gesamt", 500, 330);
//     doc.moveTo(50, 350).lineTo(550, 350).stroke();

//     // Product Details
//     doc.text("1", 50, 360)
//       .text(productDescription, 100, 360)
//       .text(quantity, 300, 360)
//       .text("Stk.", 350, 360)
//       .text(unitPrice, 400, 360)
//       .text("zzgl. 0%", 450, 360)
//       .text(totalPrice, 500, 360);

//     doc.moveTo(50, 380).lineTo(550, 380).stroke();

//     // Summary Section
//     doc.text("Zwischensumme:", 400, 400)
//       .text(totalPrice, 500, 400)
//       .text("0% USt aus 0.00€:", 400, 415)
//       .text("0.00€", 500, 415)
//       .font("Helvetica-Bold")
//       .text("Gesamtbetrag:", 400, 430)
//       .text(`${totalPrice}€`, 500, 430);

//     doc.font("Helvetica")
//       .text("Zahlbar sofort rein netto.", 50, 460)
//       .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 475);

//     // Footer Section
//     const footerTextWidth = 500; // Adjust based on your desired column width
//     const columnWidth = footerTextWidth / 3; // Calculate individual column width

//     doc.fontSize(10)
//       .text("Emanuel Wintermeyer", 50, 500)
//       .text("web: www.turiyayoga.de", 50 + columnWidth, 500)
//       .text("Kontoinhaber: Emanuel Wintermeyer", 50 + 2 * columnWidth, 500);

//     doc.text("Herbartstrasse 12", 50, 515)
//       .text("Tel.: (069)-20134987", 50 + columnWidth, 515)
//       .text("IBAN: DE64 5005 0201 0200 6907 28", 50 + 2 * columnWidth, 515);

//     doc.text("60316 Frankfurt am Main", 50, 530)
//       .text("Email: info@turiyayoga.de", 50 + columnWidth, 530)
//       .text("Kreditinstitut: Frankfurter Sparkasse", 50 + 2 * columnWidth, 530);

//     // Add a new page and include the uploaded image
//     doc.addPage(); // Create a new page
//     // doc.image(uploadedImagePath, {
//     //   fit: [500, 400], // Scale image to fit within this size
//     //   align: "center",
//     //   valign: "top",
//     // });

//     // Add static text and check icons
//     doc.fontSize(14).text("Mein Ausbildungsstatus", 50, 450);
//     // doc.image(checkIconPath, 50, 470, { width: 15 });
//     doc.fontSize(12).text("Ich möchte Yogalehrer werden", 70, 470);

//     doc.fontSize(14).text("Ausbildungserwartung", 50, 500);
//     // doc.image(checkIconPath, 50, 520, { width: 15 });
//     doc.fontSize(12).text("Ich bin bereits selbstständig und möchte Yoga mit ins Programm nehmen", 70, 520);

//     // doc.image(checkIconPath, 50, 550, { width: 15 });
//     doc.text("Die Widerrufsbelehrung/AGB habe ich zur Kenntnis genommen.", 70, 550);

//     // doc.image(checkIconPath, 50, 580, { width: 15 });
//     doc.text("Ich akzeptiere die allgemeinen Geschäftsbedingungen, die Bestandteil dieses Vertrages sind.", 70, 580);

//     doc.end();
//   } catch (error) {
//     console.error("Error generating invoice PDF:", error);
//     res.status(500).send({ error: "Failed to generate invoice PDF" });
//   }
// };

// module.exports = { generateInvoice };

// ================================= latest version =================================

// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");

// const generateInvoices = async (req, res) => {
//   try {
//     // Dummy data for the first invoice
//     const firstInvoiceData = {
//       invoiceNumber: "001",
//       customerName: "John Doe",
//       customerAddress: "123 Main St, Berlin",
//       productDescription: "Yoga Training",
//       quantity: 1,
//       unitPrice: 150,
//       totalPrice: 150,
//       dueDate: "2024-12-31",
//     };

//     const doc = new PDFDocument({ margin: 50 });
//     const buffers = [];

//     doc.on("data", buffers.push.bind(buffers));
//     doc.end();

//     // Header Section (First Page Content)
//     doc.fontSize(12)
//       .text("Turiya Yoga", 400, 50, { align: "right" })
//       .text("Herbartstrasse 12", 400, 65, { align: "right" })
//       .text("60316 Frankfurt am Main", 400, 80, { align: "right" })
//       .text("+49 (0)69 - 20134987", 400, 95, { align: "right" })
//       .text("info@turiyayoga.de", 400, 110, { align: "right" })
//       .text("St.-Nr.: 013/882/05939", 400, 125, { align: "right" });

//     // Line separator
//     doc.moveTo(50, 160).lineTo(550, 160).stroke();
//     doc.fontSize(14).text(`Vereinbarung vom ${firstInvoiceData.dueDate}`, 50, 250);

//     // Customer details
//     doc.fontSize(12)
//       .text(firstInvoiceData.customerName, 50, 170)
//       .text(firstInvoiceData.customerAddress, 50, 185)
//       .text("Berlin, Germany - 10115", 50, 200);

//     doc.moveDown(1);
//     doc.fontSize(12)
//       .text(
//         `Hallo ${firstInvoiceData.customerName},\nvielen Dank für deine Anmeldung bei Turiya Yoga. Gerne bestätigen wir deine Buchung wie folgt.`,
//         50,
//         270
//       );

//     // Product Table Header
//     doc.moveTo(50, 320).lineTo(550, 320).stroke();
//     doc.fontSize(12).text("Pos.", 50, 330);
//     doc.text("Bezeichnung", 100, 330);
//     doc.text("Menge", 300, 330);
//     doc.text("Einheit", 350, 330);
//     doc.text("Preis(€)", 400, 330);
//     doc.text("Steuer", 450, 330);
//     doc.text("Gesamt", 500, 330);
//     doc.moveTo(50, 350).lineTo(550, 350).stroke();

//     // Product Details
//     doc.text("1", 50, 360)
//       .text(firstInvoiceData.productDescription, 100, 360)
//       .text(firstInvoiceData.quantity, 300, 360)
//       .text("Stk.", 350, 360)
//       .text(firstInvoiceData.unitPrice, 400, 360)
//       .text("zzgl. 0%", 450, 360)
//       .text(firstInvoiceData.totalPrice, 500, 360);

//     doc.moveTo(50, 380).lineTo(550, 380).stroke();

//     // Summary Section
//     doc.text("Zwischensumme:", 400, 400)
//       .text(firstInvoiceData.totalPrice, 500, 400)
//       .text("0% USt aus 0.00€:", 400, 415)
//       .text("0.00€", 500, 415)
//       .font("Helvetica-Bold")
//       .text("Gesamtbetrag:", 400, 430)
//       .text(`${firstInvoiceData.totalPrice}€`, 500, 430);

//     doc.font("Helvetica")
//       .text("Zahlbar sofort rein netto.", 50, 460)
//       .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 475);

//     // Footer Section
//     const footerTextWidth = 500; // Adjust based on your desired column width
//     const columnWidth = footerTextWidth / 3; // Calculate individual column width

//     doc.fontSize(10)
//       .text("Emanuel Wintermeyer", 50, 500)
//       .text("web: www.turiyayoga.de", 50 + columnWidth, 500)
//       .text("Kontoinhaber: Emanuel Wintermeyer", 50 + 2 * columnWidth, 500);

//     doc.text("Herbartstrasse 12", 50, 515)
//       .text("Tel.: (069)-20134987", 50 + columnWidth, 515)
//       .text("IBAN: DE64 5005 0201 0200 6907 28", 50 + 2 * columnWidth, 515);

//     doc.text("60316 Frankfurt am Main", 50, 530)
//       .text("Email: info@turiyayoga.de", 50 + columnWidth, 530)
//       .text("Kreditinstitut: Frankfurter Sparkasse", 50 + 2 * columnWidth, 530);

//     // Add a new page for additional information (optional)
//     doc.addPage(); // Create a new page
//     doc.fontSize(14).text("Additional Information", 50, 50);

//     // Capture the PDF in memory and send it
//     doc.on("end", async () => {
//       const pdfData = Buffer.concat(buffers);

//       // Email options
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER, // Your email address
//           pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: req.body.email || "recipient@example.com", // Replace with recipient email
//         subject: `Invoice - ${firstInvoiceData.invoiceNumber}`,
//         text: `Dear ${firstInvoiceData.customerName},\n\nPlease find attached your invoice.\n\nThank you!`,
//         attachments: [
//           {
//             filename: `invoice-${firstInvoiceData.invoiceNumber}.pdf`,
//             content: pdfData, // Attach the generated PDF
//           },
//         ],
//       };

//       // Send the email
//       await transporter.sendMail(mailOptions);
//       console.log("Email sent successfully with the first invoice.");
//       res.status(200).send({ message: "First invoice generated and sent via email." });
//     });
//   } catch (error) {
//     console.error("Error generating or sending invoice:", error);
//     res.status(500).send({ error: "Failed to generate or send invoice." });
//   }
// };

// module.exports = { generateInvoices };


// ===========================================================================

// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");

// const generateInvoices = async (req, res) => {
//   try {
//     // Dummy data for 5 invoices
//     const invoices = [
//       {
//         invoiceNumber: "001",
//         customerName: "John Doe",
//         customerAddress: "123 Main St, Berlin",
//         productDescription: "Yoga Training",
//         quantity: 1,
//         unitPrice: 150,
//         totalPrice: 150,
//         dueDate: "2024-12-31",
//       },
//       {
//         invoiceNumber: "002",
//         customerName: "Jane Smith",
//         customerAddress: "456 Elm St, Frankfurt",
//         productDescription: "Yoga Workshop",
//         quantity: 2,
//         unitPrice: 200,
//         totalPrice: 400,
//         dueDate: "2024-12-31",
//       },
//       {
//         invoiceNumber: "003",
//         customerName: "Alice Johnson",
//         customerAddress: "789 Oak St, Munich",
//         productDescription: "Private Yoga Session",
//         quantity: 3,
//         unitPrice: 100,
//         totalPrice: 300,
//         dueDate: "2024-12-31",
//       },
//       {
//         invoiceNumber: "004",
//         customerName: "Bob Brown",
//         customerAddress: "321 Pine St, Hamburg",
//         productDescription: "Online Yoga Class",
//         quantity: 5,
//         unitPrice: 50,
//         totalPrice: 250,
//         dueDate: "2024-12-31",
//       },
//       {
//         invoiceNumber: "005",
//         customerName: "Eve White",
//         customerAddress: "654 Maple St, Cologne",
//         productDescription: "Advanced Yoga Workshop",
//         quantity: 4,
//         unitPrice: 120,
//         totalPrice: 480,
//         dueDate: "2024-12-31",
//       },
//     ];

//     // Generate PDFs for each invoice
//     const attachments = [];
//     for (const invoice of invoices) {
//       const pdfData = await generatePDF(invoice);
//       attachments.push({
//         filename: `invoice-${invoice.invoiceNumber}.pdf`,
//         content: pdfData,
//       });
//     }

//     // Set up Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // Your email address
//         pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//       },
//     });

//     // Email options with multiple attachments
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: req.body.email || "recipient@example.com", // Replace with recipient email
//       subject: "Your Invoices",
//       text: "Dear Customer,\n\nPlease find attached your invoices.\n\nThank you!",
//       attachments, // Include all generated PDFs as attachments
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully with all invoices.");
//     res.status(200).send({ message: "Invoices generated and sent via email." });
//   } catch (error) {
//     console.error("Error generating or sending invoices:", error);
//     res.status(500).send({ error: "Failed to generate or send invoices." });
//   }
// };

// // Function to generate a PDF for an invoice
// const generatePDF = async (invoiceData) => {
//   const { invoiceNumber, customerName, customerAddress, productDescription, quantity, unitPrice, totalPrice, dueDate } = invoiceData;

//   const doc = new PDFDocument({ margin: 50 });
//   const buffers = [];

//   doc.on("data", buffers.push.bind(buffers));
//   doc.end();

//   // Header Section
//   doc.fontSize(12)
//     .text("Turiya Yoga", 400, 50, { align: "right" })
//     .text("Herbartstrasse 12", 400, 65, { align: "right" })
//     .text("60316 Frankfurt am Main", 400, 80, { align: "right" })
//     .text("+49 (0)69 - 20134987", 400, 95, { align: "right" })
//     .text("info@turiyayoga.de", 400, 110, { align: "right" })
//     .text("St.-Nr.: 013/882/05939", 400, 125, { align: "right" });

//   doc.moveTo(50, 160).lineTo(550, 160).stroke();
//   doc.fontSize(14).text(`Invoice Number: ${invoiceNumber}`, 50, 200);
//   doc.fontSize(12).text(`Customer Name: ${customerName}`, 50, 230);
//   doc.text(`Customer Address: ${customerAddress}`, 50, 250);
//   doc.text(`Product Description: ${productDescription}`, 50, 270);
//   doc.text(`Quantity: ${quantity}`, 50, 290);
//   doc.text(`Unit Price: €${unitPrice}`, 50, 310);
//   doc.text(`Total Price: €${totalPrice}`, 50, 330);
//   doc.text(`Due Date: ${dueDate}`, 50, 350);

//   // Product Table Header
//   doc.moveTo(50, 400).lineTo(550, 400).stroke();
//   doc.fontSize(12).text("Pos.", 50, 410);
//   doc.text("Description", 100, 410);
//   doc.text("Quantity", 300, 410);
//   doc.text("Unit Price (€)", 400, 410);
//   doc.text("Total (€)", 500, 410);
//   doc.moveTo(50, 430).lineTo(550, 430).stroke();

//   // Product Details
//   doc.text("1", 50, 440)
//     .text(productDescription, 100, 440)
//     .text(quantity, 300, 440)
//     .text(unitPrice, 400, 440)
//     .text(totalPrice, 500, 440);

//   doc.moveTo(50, 460).lineTo(550, 460).stroke();

//   doc.text("Zwischensumme:", 400, 480)
//     .text(totalPrice, 500, 480)
//     .font("Helvetica-Bold")
//     .text("Gesamtbetrag:", 400, 500)
//     .text(`${totalPrice}€`, 500, 500);

//   doc.font("Helvetica")
//     .text("Zahlbar sofort rein netto.", 50, 520)
//     .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 535);

//   // Return PDF as Buffer
//   return new Promise((resolve) => {
//     doc.on("end", () => {
//       const pdfData = Buffer.concat(buffers);
//       resolve(pdfData);
//     });
//   });
// };

// module.exports = { generateInvoices };


// ======================================================

// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");
// // const image = require('../uploads/logo/logo.webp')
// const generateInvoices = async (req, res) => {
//   try {
//     // Dummy data for the first invoice
//     const firstInvoiceData = {
//       invoiceNumber: "TY-WEB-REG 001-10-2024",
//       customerName: "DSCS Education",
//       customerAddress: "A-114, Main Vikas Marg, Second Floor, New Delhi - 110092 new delhi, Delhi NCT India-110018",
//       productDescription: "All Inklusive Yogalehrer Ausbildung M3",
//       quantity: 1,
//       unitPrice: 1699,
//       totalPrice: 1699,
//       dueDate: "23-10-24",
//       deliveryDate: "23-10-24",
//       customerNumber: "75127",
//       orderNumber: "TY1729863518350545",
//     };

//     const logoPath = "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Path to uploaded logo image
//     const doc = new PDFDocument({ margin: 50 });
//     const buffers = [];

//     doc.on("data", buffers.push.bind(buffers));
//     doc.end();

//     // Header Section
//     doc.image(logoPath, 50, 40, { width: 100 }) // Logo
//       .fontSize(12)
//       .text("Emanuel Wintermeyer", 400, 50, { align: "right" })
//       .text("Herbartstrasse 12", 400, 65, { align: "right" })
//       .text("60316 Frankfurt am Main", 400, 80, { align: "right" })
//       .text("+49 (0)69 - 20134987", 400, 95, { align: "right" })
//       .text("info@turiyayoga.de", 400, 110, { align: "right" })
//       .text("St.-Nr.: 013/882/05939", 400, 125, { align: "right" });

//     // Customer Details and Invoice Details
//     doc.fontSize(12)
//       .text(firstInvoiceData.customerName, 50, 160)
//       .text(firstInvoiceData.customerAddress, 50, 175);

//     doc.fontSize(12)
//       .text("RECHNUNG", 400, 160, { align: "right" })
//       .text(`Rechnungsnummer: ${firstInvoiceData.invoiceNumber}`, 400, 175, { align: "right" })
//       .text(`Kundennummer: ${firstInvoiceData.customerNumber}`, 400, 190, { align: "right" })
//       .text(`Bestellnummer: ${firstInvoiceData.orderNumber}`, 400, 205, { align: "right" })
//       .text(`Fällig am: ${firstInvoiceData.dueDate}`, 400, 220, { align: "right" })
//       .text(`Lieferdatum: ${firstInvoiceData.deliveryDate}`, 400, 235, { align: "right" });

//     // Separator Line
//     doc.moveTo(50, 260).lineTo(550, 260).stroke();

//     // Invoice Title and Introduction
//     doc.fontSize(14).text(`Rechnung vom ${firstInvoiceData.dueDate}`, 50, 280);
//     doc.fontSize(12)
//       .text(
//         `Hallo ${firstInvoiceData.customerName},\nvielen Dank für deine Anmeldung bei Turiya Yoga. gerne bestätigen wir deine Buchung wie folgt.`,
//         50,
//         300
//       );

//     // Product Table Header
//     doc.moveTo(50, 350).lineTo(550, 350).stroke();
//     doc.fontSize(12).text("Pos.", 50, 360);
//     doc.text("Bezeichnung", 100, 360);
//     doc.text("Menge", 300, 360);
//     doc.text("Einheit", 350, 360);
//     doc.text("Preis(€)", 400, 360);
//     doc.text("Steuer", 450, 360);
//     doc.text("Gesamt", 500, 360);
//     doc.moveTo(50, 380).lineTo(550, 380).stroke();

//     // Product Details
//     doc.text("1", 50, 390)
//       .text(firstInvoiceData.productDescription, 100, 390)
//       .text(firstInvoiceData.quantity, 300, 390)
//       .text("Stk.", 350, 390)
//       .text(firstInvoiceData.unitPrice, 400, 390)
//       .text("zzgl. 0%", 450, 390)
//       .text(firstInvoiceData.totalPrice, 500, 390);

//     doc.moveTo(50, 410).lineTo(550, 410).stroke();

//     // Summary Section
//     doc.text("Zwischensumme:", 400, 430)
//       .text(firstInvoiceData.totalPrice, 500, 430)
//       .text("0% USt aus 0.00€:", 400, 445)
//       .text("0.00€", 500, 445)
//       .font("Helvetica-Bold")
//       .text("Gesamtbetrag:", 400, 460)
//       .text(`${firstInvoiceData.totalPrice}€`, 500, 460);

//     doc.font("Helvetica")
//       .text("Zahlbar sofort rein netto.", 50, 480)
//       .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 495);

//     // Footer Section
//     const footerTextWidth = 500;
//     const columnWidth = footerTextWidth / 3;

//     doc.fontSize(10)
//       .text("Emanuel Wintermeyer", 50, 530)
//       .text("web: www.turiyayoga.de", 50 + columnWidth, 530)
//       .text("Kontoinhaber: Emanuel Wintermeyer", 50 + 2 * columnWidth, 530);

//     doc.text("Herbartstrasse 12", 50, 545)
//       .text("Tel.: (069)-20134987", 50 + columnWidth, 545)
//       .text("IBAN: DE64 5005 0201 0200 6907 28", 50 + 2 * columnWidth, 545);

//     doc.text("60316 Frankfurt am Main", 50, 560)
//       .text("Email: info@turiyayoga.de", 50 + columnWidth, 560)
//       .text("Kreditinstitut: Frankfurter Sparkasse", 50 + 2 * columnWidth, 560);

//     // Capture the PDF in memory and send it
//     doc.on("end", async () => {
//       const pdfData = Buffer.concat(buffers);

//       // Email options
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER, // Your email address
//           pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: req.body.email || "recipient@example.com", // Replace with recipient email
//         subject: `Invoice - ${firstInvoiceData.invoiceNumber}`,
//         text: `Dear ${firstInvoiceData.customerName},\n\nPlease find attached your invoice.\n\nThank you!`,
//         attachments: [
//           {
//             filename: `invoice-${firstInvoiceData.invoiceNumber}.pdf`,
//             content: pdfData, // Attach the generated PDF
//           },
//         ],
//       };

//       // Send the email
//       await transporter.sendMail(mailOptions);
//       console.log("Email sent successfully with the first invoice.");
//       res.status(200).send({ message: "First invoice generated and sent via email." });
//     });
//   } catch (error) {
//     console.error("Error generating or sending invoice:", error);
//     res.status(500).send({ error: "Failed to generate or send invoice." });
//   }
// };

// module.exports = { generateInvoices };

// ========================================================================


// const axios = require("axios");
// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");
// const fs = require("fs");
// const path = require("path"); // For working with file paths

// const generateInvoices = async (req, res) => {
//   try {
//     const firstInvoiceData = {
//       invoiceNumber: "TY-WEB-REG 001-10-2024",
//       customerName: "DSCS Education",
//       customerAddress: "A-114, Main Vikas Marg, Second Floor, New Delhi - 110092 new delhi, Delhi NCT India-110018",
//       productDescription: "All Inklusive Yogalehrer Ausbildung M3",
//       quantity: 1,
//       unitPrice: 1699,
//       totalPrice: 1699,
//       dueDate: "23-10-24",
//       deliveryDate: "23-10-24",
//       customerNumber: "75127",
//       orderNumber: "TY1729863518350545",
//     };


//     const logoPath = path.join(__dirname, "../uploads/logo/logo.webp"); // Adjust this based on your folder structure

//     // Check if the file exists before using it
//     const fs = require("fs");
//     if (!fs.existsSync(logoPath)) {
//       throw new Error(`Logo image not found at ${logoPath}`);
//     }
//     const logoUrl = "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

//     // Download the image from the URL
//     const response = await axios({
//       url: logoUrl,
//       method: "GET",
//       responseType: "arraybuffer", // Get the image as binary data
//     });

//     const logoBuffer = Buffer.from(response.data, "binary");

//     const doc = new PDFDocument({ margin: 50 });
//     const buffers = [];

//     doc.on("data", buffers.push.bind(buffers));
//     doc.on("end", async () => {
//       const pdfData = Buffer.concat(buffers);

//       // Email options
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: req.body.email || "recipient@example.com",
//         subject: `Invoice - ${firstInvoiceData.invoiceNumber}`,
//         text: `Dear ${firstInvoiceData.customerName},\n\nPlease find attached your invoice.\n\nThank you!`,
//         attachments: [
//           {
//             filename: `invoice-${firstInvoiceData.invoiceNumber}.pdf`,
//             content: pdfData,
//           },
//         ],
//       };

//       // Send the email
//       await transporter.sendMail(mailOptions);
//       console.log("Email sent successfully with the first invoice.");
//       res.status(200).send({ message: "First invoice generated and sent via email." });
//     });

//     // Add content to the PDF
//     doc.image(logoBuffer, 50, 40, { width: 100 }); // Use the downloaded logo
//     doc.fontSize(12).text("Emanuel Wintermeyer", 400, 50, { align: "right" });
//     // Add the rest of your PDF content here

//     doc.end();
//   } catch (error) {
//     console.error("Error generating or sending invoice:", error);
//     res.status(500).send({ error: "Failed to generate or send invoice." });
//   }
// };

// module.exports = { generateInvoices };


// =======================================================


const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path"); // For working with file paths

const generateInvoices = async (req, res) => {
  try {
    const firstInvoiceData = {
      invoiceNumber: "TY-WEB-REG 001-10-2024",
      customerName: "DSCS Education",
      customerAddress: "A-114, Main Vikas Marg, Second Floor, New Delhi - 110092 new delhi, Delhi NCT India-110018",
      productDescription: "All Inklusive Yogalehrer Ausbildung M3",
      quantity: 1,
      unitPrice: 1699,
      totalPrice: 1699,
      dueDate: "23-10-24",
      deliveryDate: "23-10-24",
      customerNumber: "75127",
      orderNumber: "TY1729863518350545",
    };

    // Path to the local image (relative path from the current script)
    const logoPath = path.join(__dirname, "../uploads/logo/logo.webp"); // Path to the webp file

    // Convert .webp to .png buffer
    const logoBuffer = await sharp(logoPath).toFormat("png").toBuffer();



    // Check if the file exists before using it
    if (!fs.existsSync(logoPath)) {
      throw new Error(`Logo image not found at ${logoPath}`);
    }

    const doc = new PDFDocument({ margin: 50 });
    const buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", async () => {
      const pdfData = Buffer.concat(buffers);

      // Email options
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.email || "recipient@example.com",
        subject: `Invoice - ${firstInvoiceData.invoiceNumber}`,
        text: `Dear ${firstInvoiceData.customerName},\n\nPlease find attached your invoice.\n\nThank you!`,
        attachments: [
          {
            filename: `invoice-${firstInvoiceData.invoiceNumber}.pdf`,
            content: pdfData,
          },
        ],
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully with the first invoice.");
      res.status(200).send({ message: "First invoice generated and sent via email." });
    });

    // Add content to the PDF
    doc.image(logoPath, 50, 40, { width: 100 }); // Use the local logo
    doc.fontSize(12).text("Emanuel Wintermeyer", 400, 50, { align: "right" });
    // Add the rest of your PDF content here

    doc.end();
  } catch (error) {
    console.error("Error generating or sending invoice:", error);
    res.status(500).send({ error: "Failed to generate or send invoice." });
  }
};

module.exports = { generateInvoices };
