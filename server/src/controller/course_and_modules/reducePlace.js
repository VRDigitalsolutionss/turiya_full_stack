const Module = require('../../model/addmodule');

// Controller function to reduce available places
const reduceAvailablePlaces = async (req, res) => {
    const { moduleId } = req.params;  // Get moduleId from request params

    try {
        // Find the module by ID
        const module = await Module.findById(moduleId);

        // Check if the module exists
        if (!module) {
            return res.status(404).json({ message: 'Module not found' });
        }

        // Check if there are any available places left
        if (module.Place <= 0) {
            return res.status(400).json({ message: 'No available places to reduce' });
        }

        // Reduce the available places by 1
        module.Place -= 1;

        // Save the updated module
        await module.save();

        return res.status(200).json({
            message: 'Place reduced successfully',
            availablePlaces: module.Place,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    reduceAvailablePlaces,  // Export the function to be used in routes
};
