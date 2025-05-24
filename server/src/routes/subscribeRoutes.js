const express = require("express");
const {
    addSubscription,
    editSubscription,
    deleteSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    toggleSubscriptionStatus,
} = require("../controller/sales/suscribeController");

const subscribeRoutes = express.Router();

// Add a new subscription
subscribeRoutes.post("/add_subscription", addSubscription);

// Edit a subscription
subscribeRoutes.put("/edit_subscription/:id", editSubscription);

// Delete a subscription
subscribeRoutes.delete("/delete_subscription/:id", deleteSubscription);

// Get all subscriptions
subscribeRoutes.get("/all_subscriptions", getAllSubscriptions);

// Get subscription by ID
subscribeRoutes.get("/get_subscription/:id", getSubscriptionById);

// Toggle subscription status (active/inactive)
subscribeRoutes.put("/toggle_subscription_status/:id", toggleSubscriptionStatus);

module.exports = subscribeRoutes;
