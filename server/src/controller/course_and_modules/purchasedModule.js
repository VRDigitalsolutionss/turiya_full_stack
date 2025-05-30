const PurchasedModule = require("../../model/PurchasedModule");
const TransactionDetail = require("../../model/TransactionDetail");


const get_purchasedModule2 = async (req, res) => {
    try {
        const userId = req.params.id

        const Purchased_course = await PurchasedModule.find({ "userDetails._id": userId }).select('-invoice -agreement');

        if (!Purchased_course || Purchased_course.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No modules found for the given user ID',
            });
        }

        res.status(200).json({
            success: true,
            data: Purchased_course,
        });
    } catch (error) {
        console.error('Error fetching modules:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch modules',
            error: error.message,
        });
    }
};

const get_purchasedModule = async (req, res) => {
    try {

        // console.log("Hello")
        const Purchased_course = await PurchasedModule.find().select('-invoice -agreement').populate({
            path: "transactionHistory",
        }).sort({ createdAt: -1 });
        if (!Purchased_course) {
            return res.status(404).json({
                success: false,
                message: 'Module not found',
            });
        }

        res.status(200).json({
            success: true,
            data: Purchased_course,
        });
    } catch (error) {
        console.error('Error fetching module by ID:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch module',
            error: error.message,
        });
    }

};

const deletePurchasedModule = async (req, res) => {
    try {
        const { id } = req.params;

        const invoice = await PurchasedModule.findById(id);
        if (!invoice) {
            return res.status(404).json({
                success: false,
                message: "Module not found",
            });
        }

        await PurchasedModule.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Purchased Module deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting Purchased Module:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Purchased Module",
            error: error.message,
        });
    }
};

const deleteOldPurchasedModules = async (req, res) => {
    try {
        // Get the last 10 purchased modules by sorting (assuming a 'createdAt' field exists)
        const last10Modules = await PurchasedModule.find()
            .sort({ createdAt: -1 })  // Sort by 'createdAt' in descending order
            .limit(10)
            .select('_id'); // Only select the '_id' field to minimize data transfer

        const last10ModuleIds = last10Modules.map(module => module._id);

        // Delete all purchased modules except the last 10
        const result = await PurchasedModule.deleteMany({
            _id: { $nin: last10ModuleIds }, // $nin means "not in" the array of last 10 IDs
        });

        res.status(200).json({
            success: true,
            message: `${result.deletedCount} modules deleted, except the last 10`,
        });
    } catch (error) {
        console.error('Error deleting old purchased modules:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete modules',
            error: error.message,
        });
    }
};

const get_purchasedModuleById = async (req, res) => {
    const { id } = req.params;  // Extract the 'id' from the request parameters
    try {
        // Find the module by ID
        const purchasedCourse = await PurchasedModule.find({ "userDetails._id": id }).select('-invoice -agreement').sort({ createdAt: -1 });

        // Check if the module was found
        if (!purchasedCourse) {
            return res.status(404).json({
                success: false,
                message: 'Module not found',
            });
        }

        // If the module is found, return it in the response
        res.status(200).json({
            success: true,
            data: purchasedCourse,
        });
    } catch (error) {
        console.error('Error fetching module by ID:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch module',
            error: error.message,
        });
    }
};

const get_totalpurchasedModule2 = async (req, res) => {
    try {

        const Purchased_course = await PurchasedModule.find();

        // Check if any modules are found
        if (!Purchased_course || Purchased_course.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No purchased modules found',
            });
        }

        res.status(200).json({
            success: true,
            totalPurchasedModules: Purchased_course.length,  // Return the count of purchased modules
        });
    } catch (error) {
        console.error('Error fetching purchased modules:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch purchased modules',
            error: error.message,
        });
    }

};

const get_totalpurchasedModule = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the ID is passed as a route parameter

        // Fetch purchased modules filtered by the given ID
        const Purchased_course = await PurchasedModule.find({ userId: id }).select('-invoice -agreement');

        // Check if any modules are found for the given ID
        if (!Purchased_course || Purchased_course.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No purchased modules found for user ID: ${id}`,
            });
        }

        res.status(200).json({
            success: true,
            totalPurchasedModules: Purchased_course.length, // Return the count of purchased modules
        });
    } catch (error) {
        console.error('Error fetching purchased modules:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch purchased modules',
            error: error.message,
        });
    }
};


module.exports = { deletePurchasedModule, get_purchasedModuleById, get_purchasedModule, get_totalpurchasedModule, get_purchasedModule2, deleteOldPurchasedModules }