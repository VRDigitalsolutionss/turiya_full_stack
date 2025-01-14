const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const PurchasedModule = require("../../model/PurchasedModule");
const Meal = require("../../model/addmealModel");
const Room = require("../../model/addroomModel");

const getInvoice = async (req, res) => {
  try {
    const { id } = req.params; // Get the invoice ID from the request parameters
    const purchasedModule = await PurchasedModule.findById(id)
      .populate('selectedMeal')
      .populate('selectedRoom');

    console.log("purchased module invoice", purchasedModule);

    if (!purchasedModule || !purchasedModule.invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=invoice_${id}.pdf`,
    });

    res.send(purchasedModule.invoice);
  } catch (error) {
    console.error("Error fetching invoice:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the invoice." });
  }
};

const getAgreement = async (req, res) => {
  try {
    const { id } = req.params; // Get the agreement ID from the request parameters
    const purchasedModule = await PurchasedModule.findById(id);

    console.log("purchased module agreement", purchasedModule);

    if (!purchasedModule || !purchasedModule.agreement) {
      return res.status(404).json({ message: "Agreement not found" });
    }

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=agreement_${id}.pdf`,
    });

    res.send(purchasedModule.agreement);
  } catch (error) {
    console.error("Error fetching agreement:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the agreement." });
  }
};

const generateInvoicesAndSendEmail = async (req, res) => {

  // console.log("req.body", req.body);
  try {
    var {
      productNumber,
      invoiceNumber,
      customerNumber,
      orderNumber,
      dueDate,
      due_amount,
      customerName,
      customerAddress,
      productDescription,
      quantity,
      totalPrice,
      email,
      user_type,
      price,
      paid_amount,
      invoiceType,
      selectedMeal,
      selectedRoom,
      ...extraFields
    } = req.body;

    var parsedSelectedMeal = (selectedMeal && selectedMeal !== '00.00') ? JSON.parse(selectedMeal) : {};
    var parsedSelectedRoom = (selectedRoom && selectedRoom !== '00.00') ? JSON.parse(selectedRoom) : {};

    console.log(parsedSelectedRoom) 
    console.log(parsedSelectedMeal) 

    // Create new document instance
    const purchasedModule = new PurchasedModule({
      ...req.body,
      selectedMeal: parsedSelectedMeal._id,
      selectedRoom: parsedSelectedRoom._id,
    });

    // Save to database
    var savedModule = await purchasedModule.save();

    // console.log("savedModule", savedModule)
    var invoiceId = savedModule._id;
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
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    // HTML template for Invoice PDF (similar to the image)
    // console.log("req.body", req.body);
    function formatDate(dateString) {
      // Split the input date into an array [year, month, day]
      const [year, month, day] = dateString.split("-");

      // Return the date in the desired format: dd.mm.yyyy
      return `${day}.${month}.${year}`;
    }



    function calculatePriceWithTax(price) {


      if (req.body.userDetails.invoiceType !== "Private_Invoice") {
        const price_number = Number(price);
        const taxRate = 0.19;
        const taxAmount = price_number * taxRate;
        const finalPrice = price_number + taxAmount;
        return finalPrice;
      } else {
        return price;
      }
    }

    const invoiceHTML = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rechnung PDF</title>
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
            height: 100px;
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
            margin-top: 160px;
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
            <p><b>Emanuel Wintermeyer</b><br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main<br>
            +49 (0)69 - 20134987<br>
            info@turiyayoga.de<br>
            St.-Nr.: 013/882/05939</p>
        </div>
    </header>

   <!-- Invoice Recipient and Details -->
<div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
    <!-- Left Column -->
    <div style="flex: 1;">
        <strong style="margin-bottom:20px"> ${req.body.customerName}</strong><br>
         ${req.body.customerAddress}<br>
       
    </div>

    <!-- Right Column -->
    <div style="flex: 1; text-align: right;">
        <div>
            <strong>RECHNUNG</strong>
        </div>
 <p>
          <strong>Rechnungsnummer: </strong>${req.body.invoiceNumber}<br>
                <strong>Kundennummer: </strong>${req.body.customerNumber}<br>
                <strong>Bestellnummer: </strong>${req.body.orderNumber}<br>
                <strong>Fällig am: </strong>${req.body.dueDate}<br>
                <strong>Lieferdatum: </strong>${req.body.dueDate}
        </p>
    </div>
</div>


    <!-- Content -->
    <h1>Rechnung vom  ${formatDate(req.body.dueDate)}</h1>
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
                <td>${req.body.price}€</td>
                <td>zzgl. ${req.body.userDetails.invoiceType == 'Private_Invoice' ? '0%' : '19 %'}
                               </td>
                <td>${calculatePriceWithTax(req.body.price)}€</td>
              </tr>
              ${parsedSelectedRoom?.RoomOffers ? `
                <tr>
                    <td>2</td>
                    <td>Zimmer: ${parsedSelectedRoom.RoomOffers}</td>
                    <td>1</td>
                    <td>Stk.</td>
                    <td>${parsedSelectedRoom.RoomPrice}€</td>
                    <td>zzgl. 0%</td>
                    <td>${parsedSelectedRoom.RoomPrice}€</td>
                </tr>` : null}
              ${parsedSelectedMeal?.MealOffers ? `
                <tr>
                    <td>${parsedSelectedRoom?.RoomOffers ? '3' : '2'}</td>
                    <td>Zimmer: ${parsedSelectedMeal.MealOffers}</td>
                    <td>1</td>
                    <td>Stk.</td>
                    <td>${parsedSelectedMeal.MealPrice}€</td>
                    <td>zzgl. 0%</td>
                    <td>${parsedSelectedMeal.MealPrice}€</td>
                </tr>` : null}

        </tbody>
    </table>

    <!-- Totals -->
    <div class="totals">
        <strong>Zwischensumme:  ${req.body.courseData.Offerprice ? req.body.courseData.Offerprice : req.body.courseData.price} €</strong>
        <p>  ${req.body.userDetails.invoiceType == 'Private_Invoice' ? '0%' : '19 %'} USt aus ${req.body.courseData.Offerprice ? req.body.courseData.Offerprice : req.body.courseData.price}€</p>
        ${parsedSelectedRoom?.RoomPrice ? `<p>+ Zimmerpreis: ${parsedSelectedRoom.RoomPrice}€</p>` : ''}
        ${parsedSelectedMeal?.MealPrice ? `<p>+ Verpflegungspreis: ${parsedSelectedMeal.MealPrice}€</p>` : ''}
        <strong>Gesamtbetrag: <u> ${totalPrice}€</u></strong>
    </div>

    <p style="margin-top: 20px;">Zahlbar sofort rein netto.</p><p>USt. Befreiung gemäß § 4 Nr. 21 UStG.</p>
    <p>Wir freuen uns, dich bald bei uns begrüßen zu dürfen und wünschen dir bis dahin alles Gute.</p>
    <p>Mit freundlichen Grüßen<br/>Emanuel Wintermeyer</p>

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
    <title>Vereinbarung PDF</title>
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
            height: 100px;
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
            margin-top: 160px;
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

        .footer-with-high-marginTop{
          margin-top: 33rem !important;
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
            <p><b>Emanuel Wintermeyer</b><br>
            Herbartstrasse 12<br>
            60316 Frankfurt am Main<br>
            +49 (0)69 - 20134987<br>
            info@turiyayoga.de<br>
            St.-Nr.: 013/882/05939</p>
        </div>
    </header>

   <!-- Invoice Recipient and Details -->
<div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
    <!-- Left Column -->
    <div style="flex: 1;">
    <h1>Vereinbarung vom ${formatDate(req.body.dueDate)}</h1>
    <h1>Informationen zur Rechnungsstellung</h1>
   
      




  


<h2 >${req.body.customerName}</h2>
<p style="margin-bottom: 20px;">${req.body.customerAddress}</p>
    
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
                <td>${req.body.price}€</td>
                <td>zzgl. ${req.body.userDetails.invoiceType == 'Private_Invoice' ? '0%' : '19 %'}
                               </td>
                <td>${calculatePriceWithTax(req.body.price)}€</td>
            </tr>
            ${parsedSelectedRoom?.RoomPrice ? `
                <tr>
                    <td>2</td>
                    <td>Zimmer: ${parsedSelectedRoom.RoomOffers}</td>
                    <td>1</td>
                    <td>Stk.</td>
                    <td>${parsedSelectedRoom.RoomPrice}€</td>
                    <td>zzgl. 0%</td>
                    <td>${parsedSelectedRoom.RoomPrice}€</td>
                </tr>` : null}
              ${parsedSelectedMeal?.MealPrice ? `
                <tr>
                    <td>${parsedSelectedRoom?.RoomOffers ? '3' : '2'}</td>
                    <td>Zimmer: ${parsedSelectedMeal.MealOffers}</td>
                    <td>1</td>
                    <td>Stk.</td>
                    <td>${parsedSelectedMeal.MealPrice}€</td>
                    <td>zzgl. 0%</td>
                    <td>${parsedSelectedMeal.MealPrice}€</td>
                </tr>` : null}
        </tbody>
    </table>

    <!-- Totals -->
    <div class="totals">
        <strong>Zwischensumme:  ${req.body.courseData.Offerprice ? req.body.courseData.Offerprice : req.body.courseData.price} €</strong>
        <p>  ${req.body.userDetails.invoiceType == 'Private_Invoice' ? '0%' : '19 %'} USt aus ${req.body.courseData.Offerprice ? req.body.courseData.Offerprice : req.body.courseData.price}€</p>
        ${parsedSelectedRoom?.RoomPrice ? `<p>+ Zimmerpreis: ${parsedSelectedRoom.RoomPrice}€</p>` : ''}
        ${parsedSelectedMeal?.MealPrice ? `<p>+ Verpflegungspreis: ${parsedSelectedMeal.MealPrice}€</p>` : ''}
        <strong>Gesamtbetrag: <u> ${totalPrice}€</u></strong>
    </div>


    <p style="margin-top: 20px;">Zahlbar sofort rein netto.</p><p>USt. Befreiung gemäß § 4 Nr. 21 UStG.</p>
    <p>Wir freuen uns, dich bald bei uns begrüßen zu dürfen und wünschen dir bis dahin alles Gute.</p>
    <p>Mit freundlichen Grüßen<br/>Emanuel Wintermeyer</p>

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
            +49 (0)69 - 20134987<br>
            info@turiyayoga.de<br>
            St.-Nr.: 013/882/05939</p>
        </div>
    </header>

   <div class="section">
    <h2>Mein Ausbildungsstatus</h2>
    <div class="check-item" style="display: flex; align-items: center; margin-bottom: 10px;">
        <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check" style="width: 20px; height: 20px; margin-right: 10px;">
        <p style="margin: 0;">Ich bin bereits Yogalehrer</p>
    </div>

    <h2>Ausbildungserwartung</h2>
    <div class="check-item" style="display: flex; align-items: center; margin-bottom: 10px;">
        <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check" style="width: 20px; height: 20px; margin-right: 10px;">
        <p style="margin: 0;">Ich mache die Ausbildung als reine Freizeitbeschäftigung für mich</p>
    </div>
    <div class="check-item" style="display: flex; align-items: center; margin-bottom: 10px;">
        <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check" style="width: 20px; height: 20px; margin-right: 10px;">
        <p style="margin: 0;">Ich bin bereits selbstständig und möchte Yoga mit ins Programm nehmen</p>
    </div>
    <div class="check-item" style="display: flex; align-items: center; margin-bottom: 10px;">
        <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check" style="width: 20px; height: 20px; margin-right: 10px;">
        <p style="margin: 0;">Die Widerrufsbelehrung/AGB habe ich zur Kenntnis genommen. Die Widerrufsmöglichkeit beträgt ab dem Tag der Anmeldung 14 Tage.</p>
    </div>
    <div class="check-item" style="display: flex; align-items: center; margin-bottom: 10px;">
        <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check" style="width: 20px; height: 20px; margin-right: 10px;">
        <p style="margin: 0;">
            Ich akzeptiere die allgemeinen Geschäftsbedingungen, die Bestandteil dieser Vereinbarung sind.<br>
            <em>“Die Ausbildung ist bei Privatpersonen inkl. MwSt. Nach Erhalt der Anmeldung/ Vereinbarung erhältst du von Turiya Yoga eine ordnungsgemäße Teilnahmebestätigung/Rechnung, die alle Zahlungsinformationen nochmals enthält. Für Firmen ist die MwSt. zusätzlich zu den Ausbildungsgebühren hinzuzurechnen.”</em>
        </p>
    </div>
    <p style="margin: 0; margin-bottom: 10px;">Nicht enthalten sind z. B. Pflichtbücher, Reisekosten zum Seminarort. Solche trägt der Teilnehmer zusätzlich.</p>
    <div class="check-item" style="display: flex; align-items: center; margin-bottom: 10px;">
        <img src="https://api.turiyayoga.de/uploads/logo/tick.png" alt="check" style="width: 20px; height: 20px; margin-right: 10px;">
        <p style="margin: 0;">ICH STIMME DEN Turiya Yoga</p>
    </div>
</div>

    <div class="footer footer-with-high-marginTop">
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
    const invoicePath = path.join(__dirname, "Rechnung.pdf");
    const contractPath = path.join(__dirname, "Vereinbarung.pdf");

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

    const invoiceBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    // Generate Contract PDF
    await page.setContent(contractHTML, { waitUntil: "networkidle0" });
    await page.pdf({
      path: contractPath,
      format: "A4",
      printBackground: true,
    });

    const contractBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    console.log("Both PDFs generated successfully!");

    //  // Generate PDF as Buffer
    //       const pdfBuffer = await page.pdf({
    //         path: invoicePath,
    //     format: "A4",
    //     printBackground: true,
    //  });

    // Generate PDF as Buffer
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    // const pdfBuffer2 = await page.pdf({
    //     format: "A4",
    //     printBackground: true,
    //   });

    // Convert Uint8Array to Buffer before saving

    //   savedModule.invoice = invoiceBuffer;
    //   savedModule.contract = contractBuffer;
    //     await savedModule.save();

    savedModule.invoice = Buffer.from(invoiceBuffer); // Ensure the format is Buffer]
    savedModule.agreement = Buffer.from(contractBuffer); // Ensure the format is Buffer

    await savedModule.save();

    res.status(200).json({
      message: "Invoice generated and saved successfully!",
      invoiceId,
    });

    //   =======================================================================================

    // // Generate Invoice PDF Buffer
    // await page.setContent(invoiceHTML, { waitUntil: "networkidle0" });
    // const invoiceBuffer = await page.pdf({ format: "A4", printBackground: true });

    // // Generate Contract PDF Buffer
    // await page.setContent(contractHTML, { waitUntil: "networkidle0" });
    // const contractBuffer = await page.pdf({ format: "A4", printBackground: true });

    // // Close Puppeteer
    // await browser.close();

    // // Save Buffers to Database
    // savedModule.invoice = invoiceBuffer;
    // savedModule.contract = contractBuffer;
    //   await savedModule.save();

    //   ================================================================================================================
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
      to: req.body.email,
      subject: "Deine Buchung bei Turiya Yoga",
      text: "Please find the attached Invoice and Contract PDFs.",
      cc: process.env.ADMIN_USER2,
      html: `
      <html>
        <body>
          <p>Hallo ${req.body.customerName},</p>
          <p>wir freuen uns sehr, Dich in unserer Yoga-Community willkommen zu heißen. Anbei findest Du im Anhang die Rechnungen, unsere AGB sowie weitere Informationen über uns und die Ausbildung.</p>
     
      
          <p>Solltest Du weitere Informationen benötigen, zögere bitte nicht, uns zu kontaktieren.</p>
          <p>Telefon: 069 2013 4987</p>
          <p>Mit freundlichen Grüßen,</p>
          <p><strong>Turiya Yoga Team</strong></p>
          <br>
        </body>
      </html>`,
      attachments: [
        { filename: "Rechnung.pdf", path: invoicePath },
        { filename: "Vereinbarung.pdf", path: contractPath },
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
        fs.unlinkSync(contractPath);
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

const generateInvoicesAndSendEmail2 = async (req, res) => {
  try {
    const {
      invoiceNumber,
      customerName,
      customerAddress,
      productDescription,
      quantity,
      totalPrice,
      dueDate,
      email,
      ...extraFields
    } = req.body;

    // Create and Save Document to Database
    const purchasedModule = new PurchasedModule(req.body);
    const savedModule = await purchasedModule.save();
    const invoiceId = savedModule._id;

    // Puppeteer Setup
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Invoice and Contract Templates
    const invoiceHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice</title>
        </head>
        <body>
          <h1>Invoice for ${customerName}</h1>
          <p>Product: ${productDescription}</p>
          <p>Quantity: ${quantity}</p>
          <p>Total Price: ${totalPrice}€</p>
        </body>
      </html>
    `;

    const contractHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Contract</title>
        </head>
        <body>
          <h1>Contract for ${customerName}</h1>
          <p>Product: ${productDescription}</p>
          <p>Total Price: ${totalPrice}€</p>
        </body>
      </html>
    `;

    // Generate Invoice PDF
    await page.setContent(invoiceHTML, { waitUntil: "networkidle0" });
    const invoiceBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    // Generate Contract PDF
    await page.setContent(contractHTML, { waitUntil: "networkidle0" });
    const contractBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    // Clean up Puppeteer
    await browser.close();

    // Save Buffers to Database
    savedModule.invoice = invoiceBuffer;
    savedModule.contract = contractBuffer;
    await savedModule.save();

    // Send Email with Attachments
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Invoice and Contract",
      text: "Please find your invoice and contract attached.",
      attachments: [
        { filename: "Invoice.pdf", content: invoiceBuffer },
        { filename: "Contract.pdf", content: contractBuffer },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Email could not be sent" });
      }
      console.log("Email sent:", info.response);
      res
        .status(200)
        .json({
          message: "Invoice and contract saved and emailed successfully!",
        });
    });
  } catch (error) {
    console.error("Error generating PDFs or sending email:", error);
    res.status(500).json({ error: "An error occurred." });
  }
};

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

module.exports = { generateInvoicesAndSendEmail, getInvoice, getAgreement };
