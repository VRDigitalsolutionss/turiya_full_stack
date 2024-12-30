const express = require("express");
const {
    addCustomerTestimonial,
    editCustomerTestimonial,
    deleteCustomerTestimonial,
    getAllCustomerTestimonial,
    CustomerTestimonial,
    getCustomerTestimonial,
    getCustomerTestimonialById,
    toggleCustomerTestimonialStatus,
} = require("../controller/manage_about_us/customerTestimonialController");

const customerTestimonialRoutes = express.Router();

// Add Customer Testimonial
customerTestimonialRoutes.post("/add_customer_testimonial", addCustomerTestimonial);

// Edit Customer Testimonial
customerTestimonialRoutes.put("/edit_customer_testimonial/:id", editCustomerTestimonial);

// Delete Customer Testimonial
customerTestimonialRoutes.delete("/delete_customer_testimonial/:id", deleteCustomerTestimonial);

// Get All Customer Testimonials
customerTestimonialRoutes.get("/customer_testimonials", getAllCustomerTestimonial);
customerTestimonialRoutes.get('/customerTestimonial', getCustomerTestimonial);

customerTestimonialRoutes.get("/customer_testimonial/:id", getCustomerTestimonialById);

// Toggle Customer Testimonial Status
customerTestimonialRoutes.put("/customertestimonial_toggle_status/:id", toggleCustomerTestimonialStatus);



module.exports = customerTestimonialRoutes;
