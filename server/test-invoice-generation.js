const mongoose = require("mongoose");
require("dotenv").config();

// Import the PurchasedModule model
const PurchasedModule = require("./src/model/PurchasedModule");

// Connect to MongoDB
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/turiya_yoga");
      console.log("MongoDB connected successfully");
    } else {
      console.log("MongoDB already connected");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// Function to find and display invoice details
const findInvoice = async (invoiceNumber) => {
  try {
    console.log(`Searching for invoice: ${invoiceNumber}`);
    
    // Search for the invoice
    const invoice = await PurchasedModule.findOne({ 
      invoiceNumber: invoiceNumber 
    }).populate('selectedMeal').populate('selectedRoom');

    if (!invoice) {
      console.log("❌ Invoice not found in database");
      console.log("Available invoice numbers:");
      
      // Get all invoice numbers for reference
      const allInvoices = await PurchasedModule.find({}, 'invoiceNumber customerName totalPrice createdAt')
        .sort({ createdAt: -1 })
        .limit(10);
      
      allInvoices.forEach(inv => {
        console.log(`- ${inv.invoiceNumber} (${inv.customerName}) - €${inv.totalPrice}`);
      });
      
      return null;
    }

    console.log("✅ Invoice found!");
    console.log("Invoice Details:");
    console.log("==================");
    console.log(`Invoice Number: ${invoice.invoiceNumber}`);
    console.log(`Customer Name: ${invoice.customerName}`);
    console.log(`Customer Address: ${invoice.customerAddress}`);
    console.log(`Product Description: ${invoice.productDescription}`);
    console.log(`Quantity: ${invoice.quantity}`);
    console.log(`Total Price: €${invoice.totalPrice}`);
    console.log(`Email: ${invoice.email}`);
    console.log(`Paid Amount: €${invoice.paid_amount}`);
    console.log(`Invoice Type: ${invoice.invoiceType}`);
    console.log(`Created At: ${invoice.createdAt}`);
    console.log(`Has PDF: ${invoice.invoice ? 'Yes' : 'No'}`);
    console.log(`Has Agreement: ${invoice.agreement ? 'Yes' : 'No'}`);
    
    return invoice;
  } catch (error) {
    console.error("Error finding invoice:", error);
    return null;
  }
};

// Main function
const main = async () => {
  await connectDB();
  
  const invoiceNumber = "TY-WEB-REG 2769-10-2025";
  const invoice = await findInvoice(invoiceNumber);
  
  if (invoice) {
    console.log("\n🎯 Invoice found! You can now use the API endpoints:");
    console.log(`GET /api/generate-pdf/${encodeURIComponent(invoiceNumber)}`);
    console.log(`POST /api/generate-pdf-and-email`);
    console.log(`   Body: {"invoiceNumber": "${invoiceNumber}", "email": "${invoice.email}"}`);
  }
  
  // Close connection
  await mongoose.connection.close();
  console.log("\nDatabase connection closed");
};

// Run the script
main().catch(console.error);
