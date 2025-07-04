const express = require("express");
const app = express();
require("dotenv").config();


const cors = require("cors");
const authRoute = require("./src/routes/authRoute");
const testimonialRoute = require("./src/routes/testimonialRoute");
const galleryRoute = require("./src/routes/galleryRoute");
const blogRoute = require("./src/routes/blogRoute");
const {
  Videotestimonials,
} = require("./src/controller/add_global_component/addVideoTestimonial");
const video_testimonialRoute = require("./src/routes/videoTestimonial");
const faqRoute = require("./src/routes/manageFaqRoute");
const faqCategoryRoute = require("./src/routes/FaqCategoryRoute");
const fs = require("fs");
const path = require("path");
const contactRoute = require("./src/routes/contact");
const userQueryRoute = require("./src/routes/UserQuery");
const courseCategoryRoute = require("./src/routes/courseCategoriesRoute");
const ourStoryRoutes = require("./src/routes/ourstoryRoutes");
const ourPhilosophyRoutes = require("./src/routes/philosophyRoutes");
const moduleRoute = require("./src/routes/moduleRoute");
const customerTestimonialRoutes = require("./src/routes/customertestimonialRoutes");
const moduleCategoryRoute = require("./src/routes/courseModulecsubcategoriesRoute");
const roomRoutes = require("./src/routes/addroomRoutes");
const courseWebPageRoutes = require("./src/routes/coursewebpageRoutes");
const moduleWebPageRoutes = require("./src/routes/modulewebpageRoutes");
const reportRoute = require("./src/routes/reports");
const customerRoutes = require("./src/routes/CustomerRoutes");
const invoiceRoutes = require("./src/routes/invoiceRoutes");
const subscribeRoutes = require("./src/routes/subscribeRoutes");
const mealRoutes = require("./src/routes/addmealRoutes");
const faqLatestRoute = require("./src/routes/FaqLatestRoute");
const TuriyaYogaTeamroute = require("./src/routes/turiyayogateamRoutes");
const moduleCategoryLatestRoute = require("./src/routes/addModuleSubCategories");
const courseCategoryLatestRoute = require("./src/routes/courseCategoriesLatestRoute");
const registerRoute = require("./src/routes/registerRoute");
const invoicegenerateRoutes = require("./src/routes/invoice");
const cartRoute = require("./src/routes/cartRoute");
const profileRoute = require("./src/routes/profileRoute");
const addInvoiceTypeRoutes = require("./src/routes/addInvoiceRoute");
const forgotPasswordRoute = require("./src/routes/forgotpasswordRoute");
const resetPasswordRoute = require("./src/routes/resetPasswordRoute");
const verifyEmailRoute = require("./src/routes/VerifyEmailRoute");
const purchasedModuleRoute = require("./src/routes/purchasedModuleRoute");
const transactionDetailRoute = require("./src/routes/transactionDetail");
const imageUploadRoute = require("./src/routes/imageUploadRoutes");
const adminLoginRoute = require("./src/routes/adminLogin");
// const test = require('./uploads')
//
const corsSites=["www.turiyayoga.de","http://localhost:3000","http://localhost:3001","https://turiyayoga.de","turiyayoga.de","https://admin.turiyayoga.de", "www.admin.turiyayoga.de", "admin.turiyayoga.de", "https://turiyaprivate.vercel.app/", "https://turiyaprivate.vercel.app", "turiyaprivate.vercel.app", "https://turiyaprivate.vercel.app", "www.turiyaprivate.vercel.app", "https://turiyaprivate-uizt.vercel.app/", "https://turiyaprivate-uizt.vercel.app", "turiyaprivate-uizt.vercel.app", "https://turiyaprivate-uizt.vercel.app", "www.turiyaprivate-uizt.vercel.app"]
app.use(cors({
	origin:corsSites,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all methods
  allowedHeaders: ['Content-Type', 'Authorization'],  
}
));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
// app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));
// app.use(express.static('./uploads/images/gallery'));

// Use gallery routes

app.use("/api", registerRoute);
app.use("/api", authRoute);
app.use("/api", testimonialRoute);
app.use("/api", video_testimonialRoute);
app.use("/api", galleryRoute);
app.use("/api", blogRoute);
app.use("/api", faqRoute);
app.use("/api", faqCategoryRoute);
app.use("/api", contactRoute);
app.use("/api", userQueryRoute);

// ==================================================== new added routes =================================
app.use("/api", purchasedModuleRoute);
app.use("/api", courseCategoryRoute);
app.use("/api", moduleCategoryRoute);
app.use("/api", customerTestimonialRoutes);
app.use("/api", ourStoryRoutes);
app.use("/api", ourPhilosophyRoutes);
app.use("/api", moduleRoute);
app.use("/api", moduleCategoryRoute);
app.use("/api", roomRoutes);
app.use("/api", courseWebPageRoutes);
app.use("/api", moduleWebPageRoutes);
app.use("/api", reportRoute);
app.use("/api", customerRoutes);
app.use("/api", invoiceRoutes);
app.use("/api", subscribeRoutes);
app.use("/api", roomRoutes);
app.use("/api", mealRoutes);
app.use("/api", faqLatestRoute);
app.use("/api", TuriyaYogaTeamroute);
app.use("/api", moduleCategoryLatestRoute);
app.use("/api", courseCategoryLatestRoute);
app.use("/api", faqLatestRoute);
app.use("/api", invoicegenerateRoutes);
app.use("/api", cartRoute);
app.use("/api", profileRoute);
app.use("/api", addInvoiceTypeRoutes);

app.use("/api", forgotPasswordRoute);
app.use("/api", resetPasswordRoute);
app.use("/api", verifyEmailRoute);
app.use("/api", transactionDetailRoute)
app.use("/api", imageUploadRoute)
app.use("/api", adminLoginRoute)

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log("server is running on port ", port);
});
