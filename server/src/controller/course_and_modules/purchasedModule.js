const PurchasedModule = require("../../model/PurchasedModule");


const get_purchasedModule2 = async (req, res) => {
    try {
        const userId = req.params.id

        const Purchased_course = await PurchasedModule.find({ "userDetails._id": userId });

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
    
            const Purchased_course = await PurchasedModule.find();
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
        const Purchased_course = await PurchasedModule.find({ userId: id });

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


module.exports={get_purchasedModule,get_totalpurchasedModule,get_purchasedModule2}