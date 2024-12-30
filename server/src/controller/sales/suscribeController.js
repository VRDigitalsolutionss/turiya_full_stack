const SubscribeEmail = require("../../model/subscribeemailModel");

// **Add Subscription**
const addSubscription = async (req, res) => {
    try {
        const { email } = req.body;

        // Validate required field
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const newSubscription = new SubscribeEmail({ email });
        const savedSubscription = await newSubscription.save();

        res.status(201).json({
            success: true,
            message: "Subscription added successfully",
            data: savedSubscription,
        });
    } catch (error) {
        console.error("Error adding subscription:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add subscription",
            error: error.message,
        });
    }
};

// **Edit Subscription**
const editSubscription = async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const subscription = await SubscribeEmail.findById(id);
        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: "Subscription not found",
            });
        }

        const updatedSubscription = await SubscribeEmail.findByIdAndUpdate(
            id,
            updateFields,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Subscription updated successfully",
            data: updatedSubscription,
        });
    } catch (error) {
        console.error("Error editing subscription:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update subscription",
            error: error.message,
        });
    }
};

// **Delete Subscription**
const deleteSubscription = async (req, res) => {
    try {
        const { id } = req.params;

        const subscription = await SubscribeEmail.findById(id);
        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: "Subscription not found",
            });
        }

        await SubscribeEmail.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Subscription deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting subscription:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete subscription",
            error: error.message,
        });
    }
};

// **Get All Subscriptions**
const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await SubscribeEmail.find();
        res.status(200).json({
            success: true,
            data: subscriptions,
        });
    } catch (error) {
        console.error("Error fetching subscriptions:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch subscriptions",
            error: error.message,
        });
    }
};

// **Get Subscription by ID**
const getSubscriptionById = async (req, res) => {
    try {
        const { id } = req.params;

        const subscription = await SubscribeEmail.findById(id);
        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: "Subscription not found",
            });
        }

        res.status(200).json({
            success: true,
            data: subscription,
        });
    } catch (error) {
        console.error("Error fetching Subscription by ID:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch Subscription by ID",
            error: error.message,
        });
    }
};

// **Toggle Subscription Status**
const toggleSubscriptionStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const subscription = await SubscribeEmail.findById(id);
        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: "Subscription not found",
            });
        }

        // Toggle subscription status
        subscription.status = subscription.status === 'active' ? 'inactive' : 'active';
        const updatedSubscription = await subscription.save();

        res.status(200).json({
            success: true,
            message: `Subscription status updated to ${updatedSubscription.status}`,
            data: updatedSubscription,
        });
    } catch (error) {
        console.error("Error toggling subscription status:", error);
        res.status(500).json({
            success: false,
            message: "Failed to toggle subscription status",
            error: error.message,
        });
    }
};

module.exports = {
    addSubscription,
    editSubscription,
    deleteSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    toggleSubscriptionStatus,
};
