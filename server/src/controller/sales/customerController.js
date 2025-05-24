const Customer = require("../../model/CustomerModel");

// **Add Customer**
const addCustomer = async (req, res) => {
    try {
        const { name, email, number, address } = req.body;

        // Validate required fields
        if (!name || !email || !number || !address) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing",
            });
        }

        const newCustomer = new Customer({
            name,
            email,
            number,
            address,
        });

        const savedCustomer = await newCustomer.save();

        res.status(201).json({
            success: true,
            message: "Customer added successfully",
            data: savedCustomer,
        });
    } catch (error) {
        console.error("Error adding customer:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add customer",
            error: error.message,
        });
    }
};

// **Edit Customer**
const editCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const customer = await Customer.findById(id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        const updatedCustomer = await Customer.findByIdAndUpdate(id, updateFields, { new: true });

        res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            data: updatedCustomer,
        });
    } catch (error) {
        console.error("Error editing customer:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update customer",
            error: error.message,
        });
    }
};

// **Delete Customer**
const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findById(id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        await Customer.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Customer deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting customer:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete customer",
            error: error.message,
        });
    }
};

// **Get All Customers**
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json({
            success: true,
            data: customers,
        });
    } catch (error) {
        console.error("Error fetching customers:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch customers",
            error: error.message,
        });
    }
};

// **Get Customer by ID**
const getCustomerById = async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findById(id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        res.status(200).json({
            success: true,
            data: customer,
        });
    } catch (error) {
        console.error("Error fetching customer by ID:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch customer by ID",
            error: error.message,
        });
    }
};

// **Toggle Customer Status (active/inactive)**
const toggleCustomerStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findById(id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
            });
        }

        // Toggle status between 'active' and 'inactive'
        customer.status = customer.status === "active" ? "inactive" : "active";
        await customer.save();

        res.status(200).json({
            success: true,
            message: "Customer status updated successfully",
            data: customer,
        });
    } catch (error) {
        console.error("Error toggling customer status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle customer status",
            error: error.message,
        });
    }
};

module.exports = {
    addCustomer,
    editCustomer,
    deleteCustomer,
    getAllCustomers,
    getCustomerById,
    toggleCustomerStatus,
};