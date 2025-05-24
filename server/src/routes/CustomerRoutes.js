const express = require("express");
const {
    addCustomer,
    editCustomer,
    deleteCustomer,
    getAllCustomers,
    getCustomerById,
    toggleCustomerStatus,
} = require("../controller/sales/customerController");

const customerRoutes = express.Router();

// Add a new customer
customerRoutes.post("/add_customer", addCustomer);

// Edit a customer
customerRoutes.put("/edit_customer/:id", editCustomer);

// Delete a customer
// customerRoutes.delete("/delete_customer/:id", deleteCustomer);

// Get all customers
customerRoutes.get("/all_customers", getAllCustomers);

// Get a customer by ID
customerRoutes.get("/customer_getbyid/:id", getCustomerById);

// Toggle the status of a customer (active/inactive)
customerRoutes.put("/customer_toggle_status/:id", toggleCustomerStatus);

module.exports = customerRoutes;
