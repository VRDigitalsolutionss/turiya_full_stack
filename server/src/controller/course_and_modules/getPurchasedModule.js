const PurchasedModule = require("../../model/PurchasedModule");

const get_purchasedModule = async (req, res) => {
    try {

        const Purchased_course = await PurchasedModule.find({});
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

module.exports=get_purchasedModule
