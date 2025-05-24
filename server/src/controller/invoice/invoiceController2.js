


// // =============================================================

// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");
// const path = require("path");
// const sharp = require("sharp");

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

//   // try {
//   //   const logoPath = path.join(__dirname, "../uploads/logo/logo.webp");

//   //   // Convert .webp to .png using sharp
//   //   const logoBuffer = await sharp(logoPath)
//   //     .png() // Convert to PNG format
//   //     .toBuffer();

//   //   const doc = new PDFDocument({ margin: 50 });
//   //   const buffers = [];

//   //   // Capture the PDF in memory
//   //   doc.on("data", buffers.push.bind(buffers));
//   //   doc.on("end", async () => {
//   //     const pdfData = Buffer.concat(buffers);

//   //     // Set up Nodemailer transporter
//   //     const transporter = nodemailer.createTransport({
//   //       service: "gmail",
//   //       auth: {
//   //         user: process.env.EMAIL_USER, // Your email address
//   //         pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//   //       },
//   //     });

//   //     // Email options
//   //     const mailOptions = {
//   //       from: process.env.EMAIL_USER,
//   //       to: email,
//   //       subject: `Invoice - ${invoiceNumber}`,
//   //       text: `Dear ${customerName},\n\nPlease find attached the invoice for your order.\n\nThank you!`,
//   //       attachments: [
//   //         {
//   //           filename: `invoice-${invoiceNumber}.pdf`,
//   //           content: pdfData, // Attach the generated PDF
//   //         },
//   //       ],
//   //     };

//   //     // Send email
//   //     transporter.sendMail(mailOptions, (err, info) => {
//   //       if (err) {
//   //         console.error("Error sending email:", err);
//   //         return res.status(500).send({ error: "Failed to send email" });
//   //       }
//   //       console.log("Email sent:", info.response);
//   //       res.status(200).send({ message: "Invoice generated and sent via email." });
//   //     });
//   //   });

//   //   // Header Section (First Page Content)
//   //   doc.fontSize(12)
//   //     .text("Turiya Yoga", 400, 50, { align: "right" })
//   //     .text("Herbartstrasse 12", 400, 65, { align: "right" })
//   //     .text("60316 Frankfurt am Main", 400, 80, { align: "right" })
//   //     .text("+49 (0)69 - 20134987", 400, 95, { align: "right" })
//   //     .text("info@turiyayoga.de", 400, 110, { align: "right" })
//   //     .text("St.-Nr.: 013/882/05939", 400, 125, { align: "right" });

//   //   // Line separator
//   //   doc.moveTo(50, 160).lineTo(550, 160).stroke();
//   //   doc.fontSize(14).text(`Vereinbarung vom ${dueDate}`, 50, 250);

//   //   // Customer details
//   //   doc.fontSize(12)
//   //     .text("DSCS Education", 50, 170)
//   //     .text(customerAddress, 50, 185)
//   //     .text("Delhi NCT India - 110018", 50, 200);

//   //   doc.moveDown(1);
//   //   doc.fontSize(12)
//   //     .text(
//   //       `Hallo ${customerName},\nvielen Dank für deine Anmeldung bei Turiya Yoga. gerne bestätigen wir deine Buchung wie folgt.`,
//   //       50,
//   //       270
//   //     );

//   //   // Product Table Header
//   //   doc.moveTo(50, 320).lineTo(550, 320).stroke();
//   //   doc.fontSize(12).text("Pos.", 50, 330);
//   //   doc.text("Bezeichnung", 100, 330);
//   //   doc.text("Menge", 300, 330);
//   //   doc.text("Einheit", 350, 330);
//   //   doc.text("Preis(€)", 400, 330);
//   //   doc.text("Steuer", 450, 330);
//   //   doc.text("Gesamt", 500, 330);
//   //   doc.moveTo(50, 350).lineTo(550, 350).stroke();

//   //   // Product Details
//   //   doc.text("1", 50, 360)
//   //     .text(productDescription, 100, 360)
//   //     .text(quantity, 300, 360)
//   //     .text("Stk.", 350, 360)
//   //     .text(unitPrice, 400, 360)
//   //     .text("zzgl. 0%", 450, 360)
//   //     .text(totalPrice, 500, 360);

//   //   doc.moveTo(50, 380).lineTo(550, 380).stroke();

//   //   // Summary Section
//   //   doc.text("Zwischensumme:", 400, 400)
//   //     .text(totalPrice, 500, 400)
//   //     .text("0% USt aus 0.00€:", 400, 415)
//   //     .text("0.00€", 500, 415)
//   //     .font("Helvetica-Bold")
//   //     .text("Gesamtbetrag:", 400, 430)
//   //     .text(`${totalPrice}€`, 500, 430);

//   //   doc.font("Helvetica")
//   //     .text("Zahlbar sofort rein netto.", 50, 460)
//   //     .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 475);

//   //   // Footer Section
//   //   const footerTextWidth = 500; // Adjust based on your desired column width
//   //   const columnWidth = footerTextWidth / 3; // Calculate individual column width

//   //   doc.fontSize(10)
//   //     .text("Emanuel Wintermeyer", 50, 500)
//   //     .text("web: www.turiyayoga.de", 50 + columnWidth, 500)
//   //     .text("Kontoinhaber: Emanuel Wintermeyer", 50 + 2 * columnWidth, 500);

//   //   doc.text("Herbartstrasse 12", 50, 515)
//   //     .text("Tel.: (069)-20134987", 50 + columnWidth, 515)
//   //     .text("IBAN: DE64 5005 0201 0200 6907 28", 50 + 2 * columnWidth, 515);

//   //   doc.text("60316 Frankfurt am Main", 50, 530)
//   //     .text("Email: info@turiyayoga.de", 50 + columnWidth, 530)
//   //     .text("Kreditinstitut: Frankfurter Sparkasse", 50 + 2 * columnWidth, 530);

//   //   // Add a new page and include the uploaded image (buffered)
//   //   doc.addPage(); // Create a new page
//   //   doc.image(logoBuffer, {
//   //     fit: [500, 400], // Scale image to fit within this size
//   //     align: "center",
//   //     valign: "top",
//   //   });

//   //   // Optional: Add text below the image
//   //   doc.moveDown(2)
//   //     .fontSize(12)
//   //     .text(
//   //       "Please review the agreement and terms provided above. For any questions, contact us.",
//   //       { align: "center" }
//   //     );

//   //   doc.end();
//   // } catch (error) {
//   //   console.error("Error generating invoice PDF:", error);
//   //   res.status(500).send({ error: "Failed to generate invoice PDF" });
//   // }


//   try {
//     const logoPath = path.join(__dirname, "../uploads/logo/logo.webp");
// const logoTickPath = path.join(__dirname, "../uploads/logo/tick.png");
//     // Convert .webp to .png using sharp
//     const logoBuffer = await sharp(logoPath)
//       .png() // Convert to PNG format
//       .toBuffer();

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
//     // Add logo to the left side of the header
//     doc.image(logoBuffer, 50, 50, { width: 200, height: 100 }); // Adjust size as needed

//     // Add text on the right side
//     doc.fontSize(12)
//       .text("Turiya Yoga", 120, 50, { align: "right" })
//       .text("Herbartstrasse 12", 120, 65, { align: "right" })
//       .text("60316 Frankfurt am Main", 120, 80, { align: "right" })
//       .text("+49 (0)69 - 20134987", 120, 95, { align: "right" })
//       .text("info@turiyayoga.de", 120, 110, { align: "right" })
//       .text("St.-Nr.: 013/882/05939", 120, 125, { align: "right" });

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

//     // Add a new page and include the uploaded image (buffered)
//     doc.addPage(); // Create a new page
//     // doc.image(logoBuffer, {
//     //   fit: [500, 400], // Scale image to fit within this size
//     //   align: "center",
//     //   valign: "top",
//     // });

//     // Optional: Add text below the image
//     doc.moveDown(2)

//       doc.image(logoBuffer, 50, 50, { width: 200, height: 100 }); // Adjust size as needed

//       // Add text on the right side
//       doc.fontSize(12)
//         .text("Turiya Yoga", 120, 50, { align: "right" })
//         .text("Herbartstrasse 12", 120, 65, { align: "right" })
//         .text("60316 Frankfurt am Main", 120, 80, { align: "right" })
//         .text("+49 (0)69 - 20134987", 120, 95, { align: "right" })
//         .text("info@turiyayoga.de", 120, 110, { align: "right" })
//         .text("St.-Nr.: 013/882/05939", 120, 125, { align: "right" });
//       // .text(
//       //   "Please review the agreement and terms provided above. For any questions, contact us.",
//       //   { align: "center" }
//     // );
//      doc.moveTo(50, 160).lineTo(550, 160).stroke();
    
//     doc.fontSize(16).font("Helvetica-Bold").text("Mein Ausbildungsstatus", 50, 180);

//     // Green Checkmark (Unicode) and Text
//     const checkMark = "✔️"; // Unicode checkmark
//     doc.fontSize(12)
//       .font("Helvetica")
//       .text(`${checkMark} Ich möchte Yogalehrer werden`, 50, 210);

//     // Section Title
//     doc.moveDown(1).fontSize(16).font("Helvetica-Bold").text("Ausbildungserwartung", { align: "left" });

//     // Add the points
//     doc.moveDown(0.5).fontSize(12).font("Helvetica");

//     // Point 1
//     doc.text(`${checkMark} Ich bin bereits selbständig und möchte Yoga mit ins Programm nehmen`, {
//       align: "left",
//     });

//     // Point 2
//     doc.text(
//       `${checkMark} Die Widerrufsbelehrung/ AGB habe ich zur Kenntnis genommen. Die Widerrufsmöglichkeit beträgt ab dem Tag der Anmeldung 14 Tage.`,
//       { align: "left" }
//     );

//     // Point 3
//     doc.text(
//       `${checkMark} Ich akzeptiere die allgemeinen Geschäftsbedingungen, die Bestandteil dieses vereinbarung sind.`,
//       { align: "left" }
//     );

//     doc.text(
//       "*Die Ausbildung ist bei Privatpersonen inkl. MwSt. Nach Erhalt der Anmeldung/ Vereinbarung erhältst du von Turiya Yoga eine ordnungsgemäße Teilnahmebestätigung/Rechnung, die alle Zahlungsinformationen nochmals enthält. Für Firmen ist die MwSt. zusätzlich zu den Ausbildungsgebühren hinzuzurechnen.",
//       { align: "left", indent: 15 }
//     );

//     doc.text(
//       "Nicht enthalten sind z. B. Pflichtbücher, Reisekosten zum Seminarort. Solche trägt der Teilnehmer zusätzlich.",
//       { align: "left", indent: 15 }
//     );

//     // Final Confirmation
//     doc.text(`${checkMark} ICH STIMME DEN Turiya Yoga`, { align: "left" });

//     doc.end();
//   } catch (error) {
//     console.error("Error generating invoice PDF:", error);
//     res.status(500).send({ error: "Failed to generate invoice PDF" });
//   }
// };

// module.exports = { generateInvoice };


// ======================================================================================


// const PDFDocument = require("pdfkit");
// const nodemailer = require("nodemailer");
// const path = require("path");
// const sharp = require("sharp");

// const generateInvoices = async (req, res) => {
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
//     const attachments = [];
//     const logoPath = path.join(__dirname, "../uploads/logo/logo.webp");
//     const logoBuffer = await sharp(logoPath).png().toBuffer();

//     // 1. Generate the dynamic invoice PDF
//     const dynamicDoc = new PDFDocument({ margin: 50 });
//     const dynamicBuffers = [];

//     dynamicDoc.on("data", dynamicBuffers.push.bind(dynamicBuffers));
//     dynamicDoc.on("end", () => {
//       const pdfData = Buffer.concat(dynamicBuffers);

//       // Add the generated dynamic PDF to attachments
//       attachments.push({
//         filename: `invoice-${invoiceNumber}.pdf`,
//         content: pdfData,
//       });
//     });

//     // Generate Dynamic PDF content
//     dynamicDoc.image(logoBuffer, 50, 50, { width: 200, height: 100 });
//     dynamicDoc.fontSize(12)
//       .text("Turiya Yoga", 120, 50, { align: "right" })
//       .text("Herbartstrasse 12", 120, 65, { align: "right" })
//       .text("60316 Frankfurt am Main", 120, 80, { align: "right" })
//       .text("+49 (0)69 - 20134987", 120, 95, { align: "right" })
//       .text("info@turiyayoga.de", 120, 110, { align: "right" })
//       .text("St.-Nr.: 013/882/05939", 120, 125, { align: "right" });

//     dynamicDoc.moveTo(50, 160).lineTo(550, 160).stroke();
//     dynamicDoc.fontSize(14).text(`Vereinbarung vom ${dueDate}`, 50, 250);

//     dynamicDoc.fontSize(12)
//       .text(customerName, 50, 170)
//       .text(customerAddress, 50, 185);

//     dynamicDoc.moveDown(1);
//     dynamicDoc.text(
//       `Hallo ${customerName},\nvielen Dank für deine Anmeldung bei Turiya Yoga. Gerne bestätigen wir deine Buchung wie folgt.`,
//       50,
//       270
//     );

//     // Product Details
//     dynamicDoc.moveTo(50, 320).lineTo(550, 320).stroke();
//     dynamicDoc.fontSize(12).text("Pos.", 50, 330);
//     dynamicDoc.text("Bezeichnung", 100, 330);
//     dynamicDoc.text("Menge", 300, 330);
//     dynamicDoc.text("Einheit", 350, 330);
//     dynamicDoc.text("Preis(€)", 400, 330);
//     dynamicDoc.text("Steuer", 450, 330);
//     dynamicDoc.text("Gesamt", 500, 330);
//     dynamicDoc.moveTo(50, 350).lineTo(550, 350).stroke();

//     dynamicDoc.text("1", 50, 360)
//       .text(productDescription, 100, 360)
//       .text(quantity, 300, 360)
//       .text("Stk.", 350, 360)
//       .text(unitPrice, 400, 360)
//       .text("zzgl. 0%", 450, 360)
//       .text(totalPrice, 500, 360);

//     dynamicDoc.moveTo(50, 380).lineTo(550, 380).stroke();

//     // Summary Section
//     dynamicDoc.text("Zwischensumme:", 400, 400)
//       .text(totalPrice, 500, 400)
//       .text("0% USt aus 0.00€:", 400, 415)
//       .text("0.00€", 500, 415)
//       .font("Helvetica-Bold")
//       .text("Gesamtbetrag:", 400, 430)
//       .text(`${totalPrice}€`, 500, 430);

//     dynamicDoc.font("Helvetica")
//       .text("Zahlbar sofort rein netto.", 50, 460)
//       .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 475);

//     dynamicDoc.end();

//     // 2. Generate the static invoice PDF
//     const staticDoc = new PDFDocument({ margin: 50 });
//     const staticBuffers = [];

//     staticDoc.on("data", staticBuffers.push.bind(staticBuffers));
//     staticDoc.on("end", () => {
//       const pdfData = Buffer.concat(staticBuffers);

//       // Add the generated static PDF to attachments
//       attachments.push({
//         filename: "static-invoice.pdf",
//         content: pdfData,
//       });
//     });

//     // Generate Static PDF content
//     staticDoc.image(logoBuffer, 50, 50, { width: 200, height: 100 });
//     staticDoc.fontSize(16).text("Static Invoice Content", 50, 150);
//     staticDoc.fontSize(12).text("This is a static invoice generated by the system.", 50, 200);
//     staticDoc.fontSize(12).text("Details:", 50, 240);
//     staticDoc.text("• Static Item 1 - Price: €100", 70, 260);
//     staticDoc.text("• Static Item 2 - Price: €200", 70, 280);
//     staticDoc.fontSize(14).font("Helvetica-Bold").text("Total: €300", 50, 320);

//     staticDoc.end();

//     // Wait for both PDFs to be generated
//     setTimeout(async () => {
//       // Set up Nodemailer transporter
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//       });

//       // Email options
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: `Invoices from Turiya Yoga`,
//         text: `Dear Customer,\n\nPlease find attached the invoices for your orders.\n\nThank you!`,
//         attachments, // Attach both the dynamic and static PDFs
//       };

//       // Send email
//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//           console.error("Error sending email:", err);
//           return res.status(500).send({ error: "Failed to send email" });
//         }
//         console.log("Email sent:", info.response);
//         res.status(200).send({ message: "Invoices generated and sent via email." });
//       });
//     }, 1000); // Adjust the delay if necessary
//   } catch (error) {
//     console.error("Error generating invoices:", error);
//     res.status(500).send({ error: "Failed to generate invoices." });
//   }
// };

// module.exports = { generateInvoices };


// ===============================================================================


const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");
const path = require("path");
const sharp = require("sharp");

const generateInvoices = async (req, res) => {
  const {
    invoiceNumber,
    customerNumber,
    orderNumber,
    dueDate,
    deliveryDate,
    customerName,
    customerAddress,
    productDescription,
    quantity,
    unitPrice,
    totalPrice,
    email,
  } = req.body;

  try {
    const attachments = [];
    const logoPath = path.join(__dirname, "../uploads/logo/logo.webp");
    const logoBuffer = await sharp(logoPath).png().toBuffer();

    // 1. Generate the dynamic invoice PDF
    const dynamicDoc = new PDFDocument({ margin: 50 });
    const dynamicBuffers = [];

    dynamicDoc.on("data", dynamicBuffers.push.bind(dynamicBuffers));
    dynamicDoc.on("end", () => {
      const pdfData = Buffer.concat(dynamicBuffers);

      // Add the generated dynamic PDF to attachments
      attachments.push({
        filename: `invoice-${invoiceNumber}.pdf`,
        content: pdfData,
      });
    });

    // Dynamic Invoice Content
    dynamicDoc.image(logoBuffer, 50, 50, { width: 200, height: 100 }); // Add logo

    // Add company details
    dynamicDoc.fontSize(12)
      .text("Turiya Yoga", 120, 50, { align: "right" })
      .text("Herbartstrasse 12", 120, 65, { align: "right" })
      .text("60316 Frankfurt am Main", 120, 80, { align: "right" })
      .text("+49 (0)69 - 20134987", 120, 95, { align: "right" })
      .text("info@turiyayoga.de", 120, 110, { align: "right" })
      .text("St.-Nr.: 013/882/05939", 120, 125, { align: "right" });

    // Add a separator line
    dynamicDoc.moveTo(50, 160).lineTo(550, 160).stroke();

    // Header and customer details
    dynamicDoc.fontSize(14).text(`Vereinbarung vom ${dueDate}`, 50, 250);
    dynamicDoc.fontSize(12)
      .text("DSCS Education", 50, 170)
      .text(customerAddress, 50, 185)
      .text("Delhi NCT India - 110018", 50, 200);

    dynamicDoc.moveDown(1);
    dynamicDoc.fontSize(12).text(
      `Hallo ${customerName},\nvielen Dank für deine Anmeldung bei Turiya Yoga. gerne bestätigen wir deine Buchung wie folgt.`,
      50,
      270
    );

    // Product Table Header
    dynamicDoc.moveTo(50, 320).lineTo(550, 320).stroke();
    dynamicDoc.fontSize(12)
      .text("Pos.", 50, 330)
      .text("Bezeichnung", 100, 330)
      .text("Menge", 300, 330)
      .text("Einheit", 350, 330)
      .text("Preis(€)", 400, 330)
      .text("Steuer", 450, 330)
      .text("Gesamt", 500, 330);
    dynamicDoc.moveTo(50, 350).lineTo(550, 350).stroke();

    // Product Details
    dynamicDoc.text("1", 50, 360)
      .text(productDescription, 100, 360)
      .text(quantity, 300, 360)
      .text("Stk.", 350, 360)
      .text(unitPrice, 400, 360)
      .text("zzgl. 0%", 450, 360)
      .text(totalPrice, 500, 360);

    dynamicDoc.moveTo(50, 380).lineTo(550, 380).stroke();

    // Summary Section
    dynamicDoc.text("Zwischensumme:", 400, 400)
      .text(totalPrice, 500, 400)
      .text("0% USt aus 0.00€:", 400, 415)
      .text("0.00€", 500, 415)
      .font("Helvetica-Bold")
      .text("Gesamtbetrag:", 400, 430)
      .text(`${totalPrice}€`, 500, 430);

    // Additional Details
    dynamicDoc.font("Helvetica")
      .text("Zahlbar sofort rein netto.", 50, 460)
      .text("USt. Befreiung gemäß § 4 Nr. 21 UStG.", 50, 475);

    // Footer Section
    const footerTextWidth = 500;
    const columnWidth = footerTextWidth / 3;

    dynamicDoc.fontSize(10)
      .text("Emanuel Wintermeyer", 50, 500)
      .text("web: www.turiyayoga.de", 50 + columnWidth, 500)
      .text("Kontoinhaber: Emanuel Wintermeyer", 50 + 2 * columnWidth, 500);

    dynamicDoc.text("Herbartstrasse 12", 50, 515)
      .text("Tel.: (069)-20134987", 50 + columnWidth, 515)
      .text("IBAN: DE64 5005 0201 0200 6907 28", 50 + 2 * columnWidth, 515);

    dynamicDoc.text("60316 Frankfurt am Main", 50, 530)
      .text("Email: info@turiyayoga.de", 50 + columnWidth, 530)
      .text("Kreditinstitut: Frankfurter Sparkasse", 50 + 2 * columnWidth, 530);

    // Add a new page (optional)
    // dynamicDoc.addPage();
    // dynamicDoc.moveDown(2).fontSize(12).text("Thank you for your order!", 50, 50);

//     // Add a new page and include the uploaded image (buffered)
dynamicDoc.addPage(); // Create a new page
    // doc.image(logoBuffer, {
    //   fit: [500, 400], // Scale image to fit within this size
    //   align: "center",
    //   valign: "top",
    // });

    // Optional: Add text below the image
    dynamicDoc.moveDown(2)

    dynamicDoc.image(logoBuffer, 50, 50, { width: 200, height: 100 }); // Adjust size as needed

      // Add text on the right side
      dynamicDoc.fontSize(12)
        .text("Turiya Yoga", 120, 50, { align: "right" })
        .text("Herbartstrasse 12", 120, 65, { align: "right" })
        .text("60316 Frankfurt am Main", 120, 80, { align: "right" })
        .text("+49 (0)69 - 20134987", 120, 95, { align: "right" })
        .text("info@turiyayoga.de", 120, 110, { align: "right" })
        .text("St.-Nr.: 013/882/05939", 120, 125, { align: "right" });
      // .text(
      //   "Please review the agreement and terms provided above. For any questions, contact us.",
      //   { align: "center" }
    // );
    dynamicDoc.moveTo(50, 160).lineTo(550, 160).stroke();
    
    dynamicDoc.fontSize(16).font("Helvetica-Bold").text("Mein Ausbildungsstatus", 50, 180);

    // Green Checkmark (Unicode) and Text
    const checkMark = "✔️"; // Unicode checkmark
    dynamicDoc.fontSize(12)
      .font("Helvetica")
      .text(`${checkMark} Ich möchte Yogalehrer werden`, 50, 210);

    // Section Title
    dynamicDoc.moveDown(1).fontSize(16).font("Helvetica-Bold").text("Ausbildungserwartung", { align: "left" });

    // Add the points
    dynamicDoc.moveDown(0.5).fontSize(12).font("Helvetica");

    // Point 1
    dynamicDoc.text(`${checkMark} Ich bin bereits selbständig und möchte Yoga mit ins Programm nehmen`, {
      align: "left",
    });

    // Point 2
    dynamicDoc.text(
      `${checkMark} Die Widerrufsbelehrung/ AGB habe ich zur Kenntnis genommen. Die Widerrufsmöglichkeit beträgt ab dem Tag der Anmeldung 14 Tage.`,
      { align: "left" }
    );

    // Point 3
    dynamicDoc.text(
      `${checkMark} Ich akzeptiere die allgemeinen Geschäftsbedingungen, die Bestandteil dieses vereinbarung sind.`,
      { align: "left" }
    );

    dynamicDoc.text(
      "*Die Ausbildung ist bei Privatpersonen inkl. MwSt. Nach Erhalt der Anmeldung/ Vereinbarung erhältst du von Turiya Yoga eine ordnungsgemäße Teilnahmebestätigung/Rechnung, die alle Zahlungsinformationen nochmals enthält. Für Firmen ist die MwSt. zusätzlich zu den Ausbildungsgebühren hinzuzurechnen.",
      { align: "left", indent: 15 }
    );

    dynamicDoc.text(
      "Nicht enthalten sind z. B. Pflichtbücher, Reisekosten zum Seminarort. Solche trägt der Teilnehmer zusätzlich.",
      { align: "left", indent: 15 }
    );

    // Final Confirmation
    dynamicDoc.text(`${checkMark} ICH STIMME DEN Turiya Yoga`, { align: "left" });



    dynamicDoc.end();

    // 2. Generate a static invoice (same as earlier implementation, if required)
 // 2. Generate the static invoice PDF
 const staticDoc = new PDFDocument({ margin: 50 });
 const staticBuffers = [];

 staticDoc.on("data", staticBuffers.push.bind(staticBuffers));
 staticDoc.on("end", () => {
   const pdfData = Buffer.concat(staticBuffers);

   // Add the generated static PDF to attachments
   attachments.push({
     filename: "static-invoice.pdf",
     content: pdfData,
   });
 });

 // Generate Static PDF content
 staticDoc.image(logoBuffer, 50, 50, { width: 200, height: 100 });
 staticDoc.fontSize(16).text("Static Invoice Content", 50, 150);
 staticDoc.fontSize(12).text("This is a static invoice generated by the system.", 50, 200);
 staticDoc.fontSize(12).text("Details:", 50, 240);
 staticDoc.text("• Static Item 1 - Price: €100", 70, 260);
 staticDoc.text("• Static Item 2 - Price: €200", 70, 280);
 staticDoc.fontSize(14).font("Helvetica-Bold").text("Total: €300", 50, 320);

    staticDoc.end();
    


    
    setTimeout(async () => {
      // Set up Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Invoices from Turiya Yoga`,
        text: `Dear Customer,\n\nPlease find attached the invoices for your orders.\n\nThank you!`,
        attachments, // Attach both dynamic and optional static PDFs
      };

      // Send email
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Error sending email:", err);
          return res.status(500).send({ error: "Failed to send email" });
        }
        console.log("Email sent:", info.response);
        res.status(200).send({ message: "Invoices generated and sent via email." });
      });
    }, 1000); // Adjust delay as needed
  } catch (error) {
    console.error("Error generating invoices:", error);
    res.status(500).send({ error: "Failed to generate invoices." });
  }
};

module.exports = { generateInvoices };

