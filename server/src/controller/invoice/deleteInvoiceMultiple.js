
const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const PurchasedModule = require("../../model/PurchasedModule");



const generateInvoicesAndSendEmail = async (req, res) => {

    try {
        const {

            productNumber,
            invoiceNumber,
            customerNumber,
            orderNumber,
            dueDate,
            customerName,
            customerAddress,
            productDescription,
            quantity,
            totalPrice,
            email,
            user_type,
            price,
          ...extraFields
        } = req.body;
    
        // Create new document instance
        const purchasedModule = new PurchasedModule(req.body);
    
        // Save to database
        const savedModule = await purchasedModule.save();

        // res.status(201).json({
        //   message: "Purchased module saved successfully",
        //   data: savedModule,
        // });
      } catch (error) {
        res.status(400).json({
          message: "Error saving purchased module",
          error: error.message,
        });
      }

    // ============================================================================================
    
// Controller Function to Store Data

  

  

    // ================================================================================================

  try {
    // Step 1: Start Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

      // HTML template for Invoice PDF (similar to the image)
      console.log("req.body", req.body);

    const invoiceHTML = `
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
    margin-bottom: 30px; /* Add this line */
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
             margin-bottom: 50px; /* Add this line */
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
            .footer a{
             text-decoration: none; /* Removes underline */
    color: black; /* Sets the color to black */
            
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
           <img src="https://api.turiyayoga.de/uploads/logo/header_logo_new.png"  alt="Turiya Yoga Logo">
        </div>
        <div class="info">
            <p>Emanuel Wintermeyer<br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main<br>
            // +49 (0)69 - 20134987<br>
            info@turiyayoga.de<br>
            St.-Nr.: 013/882/05939</p>
        </div>
    </header>

   <!-- Invoice Recipient and Details -->
<div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
    <!-- Left Column -->
    <div style="flex: 1;">
        <strong> ${req.body.customerName}</strong><br>
         ${req.body.customerAddress}<br>
        Delhi NCT India-110018
    </div>

    <!-- Right Column -->
    <div style="flex: 1; text-align: right;">
        <div>
            <strong>RECHNUNG</strong>
        </div>
 <p>
          Rechnungsnummer: <strong>${req.body.invoiceNumber}</strong><br>
                Kundennummer: <strong>${req.body.customerNumber}</strong><br>
                Bestellnummer: <strong>${req.body.orderNumber}</strong><br>
                Fällig am: <strong>${req.body.dueDate}</strong><br>
                Lieferdatum: <strong>${req.body.dueDate}</strong>
        </p>
    </div>
</div>


    <!-- Content -->
    <h1>Rechnung vom  ${req.body.dueDate}</h1>
    <p>Hallo ${req.body.customerName},</p>
    <p>vielen Dank für deine Anmeldung bei Turiya Yoga. gerne bestätigen wir deine Buchung wie folgt.</p>

    <!-- Table -->
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
                <td>${req.body.productDescription}</td>
                <td>${req.body.quantity}</td>
                <td>Stk.</td>
                <td>${req.body.totalPrice}€</td>
                <td>zzgl. 0%</td>
                <td>${req.body.totalPrice}€</td>
            </tr>

        </tbody>
    </table>

    <!-- Totals -->
    <div class="totals">
        <strong>Zwischensumme:  ${req.body.price}€</strong>
        <strong>0% USt aus 0.00€: 0.00€</strong>
        <strong>Gesamtbetrag: <u> ${req.body.totalPrice}€</u></strong>
    </div>

    <p style="margin-top: 20px;">Zahlbar sofort rein netto.<br>USt. Befreiung gemäß § 4 Nr. 21 UStG.</p>

    <!-- Closing Message -->
    <p>Wir freuen uns, dich bald bei uns begrüßen zu dürfen und wünschen dir bis dahin alles Gute.<br>
    Mit freundlichen Grüßen</p>
    <p><strong>Emanuel Wintermeyer</strong></p>

    <!-- Footer -->
    <div class="footer">
        <!-- Column 1 -->
        <div>
            <p>Emanuel Wintermeyer<br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main</p>
        </div>

        <!-- Column 2 -->
        <div>
            <p>web. <a href="http://www.turiyayoga.de">www.turiyayoga.de</a><br>
            Tel. (069) - 20134987<br>
            Email: <a href="mailto:info@turiyayoga.de">info@turiyayoga.de</a></p>
        </div>

        <!-- Column 3 -->
        <div>
            <p>Kontoinhaber: Emanuel Wintermeyer<br>
            IBAN: DE64 5005 0201 0200 6907 28<br>
            Kreditinstitut: Frankfurter Sparkasse</p>
        </div>
    </div>
</body>
</html>

    `;
    

    // ===============================================================================
    
const contractHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contract PDF</title>
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
            margin-bottom: 30px; /* Add this line */
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
            margin-bottom: 50px; /* Add this line */
        }

        .totals strong {
            display: block;
            margin-bottom: 5px;
        }

        .section {
            margin-bottom: 20px;
        }

        .check-item {
            display: flex;
            align-items: start;
            margin-bottom: 10px;
        }

        .check-item img {
            width: 16px;
            height: 16px;
            margin-right: 10px;
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

        .logo {
            height: 80px;
            width: 200px;
        }

        .page-break {
            page-break-before: always; /* Forces content to start on a new page */
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="logo">
           <img src="https://api.turiyayoga.de/uploads/logo/header_logo_new.png"  alt="Turiya Yoga Logo">
        </div>
        <div class="info">
            <p>Emanuel Wintermeyer<br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main<br>
            // +49 (0)69 - 20134987<br>
            info@turiyayoga.de<br>
            St.-Nr.: 013/882/05939</p>
        </div>
    </header>

   <!-- Invoice Recipient and Details -->
<div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
    <!-- Left Column -->
    <div style="flex: 1;">
    <h1>Vereinbarung vom 23-10-24</h1>
    <h1>Informationen zur Rechnungsstellung</h1>
   
      


 <h2> ${req.body.customerName}</h2><br>
         ${req.body.customerAddress}<br>


        Delhi NCT India-110018
    </div>

    <!-- Right Column -->
   
</div>


    <!-- Content -->
  
    <p>Hallo ${req.body.customerName},</p>
    <p>vielen Dank für deine Anmeldung bei Turiya Yoga. gerne bestätigen wir deine Buchung wie folgt.</p>

    <!-- Table -->
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
                <td>${req.body.productDescription}</td>
                <td>${req.body.quantity}</td>
                <td>Stk.</td>
                <td>${req.body.totalPrice}€</td>
                <td>zzgl. 0%</td>
                <td>${req.body.totalPrice}€</td>
            </tr>
        </tbody>
    </table>

    <!-- Totals -->
    <div class="totals">
        <strong>Zwischensumme:  ${req.body.price}€</strong>
        <strong>0% USt aus 0.00€: 0.00€</strong>
        <strong>Gesamtbetrag: <u>${req.body.totalPrice}€</u></strong>
    </div>

    <p style="margin-top: 20px;">Zahlbar sofort rein netto.<br>USt. Befreiung gemäß § 4 Nr. 21 UStG.</p>

    <!-- Closing Message -->
    <p>Wir freuen uns, dich bald bei uns begrüßen zu dürfen und wünschen dir bis dahin alles Gute.<br>
    Mit freundlichen Grüßen</p>
    <p><strong>Emanuel Wintermeyer</strong></p>

    <!-- Footer -->
    <div class="footer">
        <!-- Column 1 -->
        <div>
            <p>Emanuel Wintermeyer<br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main</p>
        </div>

        <!-- Column 2 -->
        <div>
            <p>web. <a href="http://www.turiyayoga.de">www.turiyayoga.de</a><br>
            Tel. (069) - 20134987<br>
            Email: <a href="mailto:info@turiyayoga.de">info@turiyayoga.de</a></p>
        </div>

        <!-- Column 3 -->
        <div>
            <p>Kontoinhaber: Emanuel Wintermeyer<br>
            IBAN: DE64 5005 0201 0200 6907 28<br>
            Kreditinstitut: Frankfurter Sparkasse</p>
        </div>
    </div>


    <!-- Page Break -->
    <div class="page-break"></div>

    <!-- Second Page Content (Duplicate) -->
    <header>
        <div class="logo">
            <img src="https://api.turiyayoga.de/uploads/logo/header_logo_new.png" alt="Turiya Yoga Logo">
        </div>
        <div class="info">
            <p>Emanuel Wintermeyer<br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main<br>
            // +49 (0)69 - 20134987<br>
            info@turiyayoga.de<br>
            St.-Nr.: 013/882/05939</p>
        </div>
    </header>

    <div class="section">
        <h2>Ausbildungserwartung</h2>
        <div class="check-item">
            <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check">
            <p>Ich bin bereits selbstständig und möchte Yoga mit ins Programm nehmen</p>
        </div>
        <div class="check-item">
            <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check">
            <p>Die Widerrufsbelehrung/AGB habe ich zur Kenntnis genommen. Die Widerrufsmöglichkeit beträgt ab dem Tag der Anmeldung 14 Tage.</p>
        </div>
        <div class="check-item">
            <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check">
            <p>
                Ich akzeptiere die allgemeinen Geschäftsbedingungen, die Bestandteil dieser Vereinbarung sind.<br>
                <em>“Die Ausbildung ist bei Privatpersonen inkl. MwSt. Nach Erhalt der Anmeldung/ Vereinbarung erhältst du von Turiya Yoga eine ordnungsgemäße Teilnahmebestätigung/Rechnung, die alle Zahlungsinformationen nochmals enthält. Für Firmen ist die MwSt. zusätzlich zu den Ausbildungsgebühren hinzuzurechnen.”</em>
            </p>
        </div>
        <p>Nicht enthalten sind z. B. Pflichtbücher, Reisekosten zum Seminarort. Solche trägt der Teilnehmer zusätzlich.</p>
        <div class="check-item">
            <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check">
            <p><strong>ICH STIMME DEN Turiya Yoga</strong></p>
        </div>
    </div>

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
    
    
    
    // Step 2: Generate PDF for the invoice
    const invoicePath = path.join(__dirname, "invoice.pdf");
    const contractPath = path.join(__dirname, "contract.pdf");

    const additionalPdfPath1 = path.join(
      __dirname,
      "../uploads/invoice_img/AGB_Turiya_Yoga_Frankfurt_2021.pdf"
    );
    const additionalPdfPath2 = path.join(
      __dirname,
      "../uploads/invoice_img/wer_sind_wir_team_philosophie_geschichte.pdf"
    );
    const additionalPdfPath3 = path.join(
      __dirname,
      "../uploads/invoice_img/5_schritten_zum_yogalehrer_modularer_aufbau_investition_kundenstimmen.pdf"
    );
    const additionalPdfPath4 = path.join(
      __dirname,
      "../uploads/invoice_img/zertifizierung_YA_therapie_turiya_yoga_akademie.pdf"
    );

    await page.setContent(invoiceHTML, { waitUntil: "networkidle0" });
    await page.pdf({
      path: invoicePath,
      format: "A4",
      printBackground: true,
    });

    // Generate Contract PDF
    await page.setContent(contractHTML, { waitUntil: "networkidle0" });
    await page.pdf({ path: contractPath, format: "A4", printBackground: true });

    console.log("Both PDFs generated successfully!");

    // Step 3: Send Email with PDFs using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email, // Replace with recipient's email
      subject: "Deine Buchung bei Turiya Yoga",
        text: "Please find the attached Invoice and Contract PDFs.",
        cc: process.env.ADMIN_USER,
      html: `
      <html>
        <body>
          <p><strong>---------- Forwarded message ---------</strong></p>
          <p>From: <strong>info@turiyayoga.de</strong></p>
          <p>Date: Wed, Oct 23, 2024 at 5:06 PM</p>
          <p>Subject: E-Mail-Adresse bestätigen</p>
          <p>To: <strong>${req.body.email}</strong></p>
          <br>
          <p>Hallo DSCS,</p>
          <p>wir freuen uns sehr, Dich in unserer Yoga-Community willkommen zu heißen. Anbei findest Du im Anhang die Rechnungen, unsere AGB sowie weitere Informationen über uns und die Ausbildung.</p>
     
      
          <p>Solltest Du weitere Informationen benötigen, zögere bitte nicht, uns zu kontaktieren.</p>
    //    <p>Telefon: 069 2013 4987</p>
          <p>Mit freundlichen Grüßen,</p>
          <p><strong>Turiya Yoga Team</strong></p>
          <br>
       
          <p><strong>Sunny Singh Rajput ✍</strong></p>
          <p>Digital Marketing Trainer</p>
          <div style="text-align:start;">
          <img width="96" height="96" src="https://ci3.googleusercontent.com/mail-sig/AIorK4yflBL5iHkE2IQ7CdKYvdmYg6RRi93meN20Av3NS9gQe7E8nrn4AgU8rShYhCPLtOPfhqjnUH0" alt="Turiya Yoga Logo" style="max-width: 200px; height: auto;">
        </div>
          <p><strong>CORPORATE OFFICE & AEERO ACADEMY CAMPUS</strong></p>
          <p>147/2, Opposite A-Block, Bagdola, Sector - 8</p>
          <p>Dwarka, New Delhi - 110077</p>
          <p>Mob. No:- 8882918697</p>
          <p>Website :- <a href="http://www.aeero.ac.in">www.aeero.ac.in</a></p>
          <p style="color:rgb(68,114,196)"><b>Recognition of Prior Learning Assessment Partner of MSME-TC-CTR, Ludhiana, Govt. of India.</b></p>
        </body>
      </html>`,
      attachments: [
        { filename: "invoice.pdf", path: invoicePath },
        { filename: "contract.pdf", path: contractPath },
        {
          filename: "AGB_Turiya_Yoga_Frankfurt_2021.pdf", // Name to appear in the email
          path: additionalPdfPath1, // Path to the first additional PDF
        },
        {
          filename: "wer_sind_wir_team_philosophie_geschichte.pdf", // Name to appear in the email
          path: additionalPdfPath2, // Path to the second additional PDF
        },
        {
          filename:
            "5_schritten_zum_yogalehrer_modularer_aufbau_investition_kundenstimmen.pdf", // Name to appear in the email
          path: additionalPdfPath3, // Path to the second additional PDF
        },
        {
          filename: "zertifizierung_YA_therapie_turiya_yoga_akademie.pdf", // Name to appear in the email
          path: additionalPdfPath4, // Path to the second additional PDF
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Email could not be sent" });
      } else {
        console.log("Email sent:", info.response);
        // Clean up generated PDF
        fs.unlinkSync(invoicePath);
        return res
          .status(200)
          .json({ message: "Invoice PDF sent successfully!" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { generateInvoicesAndSendEmail };

// =================================================================





// const generateInvoicesAndSendEmail = async (req, res) => {
//   try {
//     const {
//       productNumber,
//       invoiceNumber,
//       customerNumber,
//       orderNumber,
//       dueDate,
//       customerName,
//       customerAddress,
//       productDescription,
//       quantity,
//       totalPrice,
//       email,
//       user_type,
//       price,
//       ...extraFields
//     } = req.body;

//     // Create new document instance
//     const purchasedModule = new PurchasedModule(req.body);

//     // Save to database
//     const savedModule = await purchasedModule.save();
//     const invoiceId = savedModule._id; // Get the unique _id of the saved module

//     // Define file paths
//     const invoiceFolder = path.join(__dirname, "../invoice");
//     if (!fs.existsSync(invoiceFolder)) {
//       fs.mkdirSync(invoiceFolder, { recursive: true }); // Create folder if it doesn't exist
//     }

//     const invoicePath = path.join(invoiceFolder, `${invoiceId}.pdf`);
//     const contractPath = path.join(invoiceFolder, `${invoiceId}_contract.pdf`);

//     // Step 1: Start Puppeteer
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // HTML template for Invoice PDF
//     console.log("req.body", req.body);

//     const invoiceHTML = `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Invoice PDF</title>
//         <style>
//           /* Styles here */
//         </style>
//       </head>
//       <body>
//         <header>
//           <div class="logo">
//             <img src="https://api.turiyayoga.de/uploads/logo/header_logo_new.png" alt="Turiya Yoga Logo">
//           </div>
//           <div class="info">
//             <p>${customerName}<br>${customerAddress}</p>
//           </div>
//         </header>
//         <h1>Invoice</h1>
//         <p>Invoice Number: ${invoiceNumber}</p>
//         <!-- Add more invoice details -->
//       </body>
//       </html>
//     `;

//     // Step 2: Generate PDF for the invoice
//     await page.setContent(invoiceHTML, { waitUntil: "networkidle0" });
//     await page.pdf({
//       path: invoicePath,
//       format: "A4",
//       printBackground: true,
//     });

//     console.log(`Invoice PDF generated and saved at: ${invoicePath}`);

//     // Clean up Puppeteer
//     await browser.close();

//     // Step 3: Respond with success and saved file path
//     res.status(200).json({
//       message: "Invoice generated and saved successfully!",
//       invoicePath,
//       purchasedModule: savedModule,
//     });
//   } catch (error) {
//     console.error("Error generating invoice:", error);
//     return res.status(500).json({ error: "An error occurred while generating the invoice." });
//   }
// };

module.exports = { generateInvoicesAndSendEmail };

