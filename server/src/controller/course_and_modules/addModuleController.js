const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Module = require('../../model/addmodule');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../uploads/');
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only JPEG, JPG, and PNG files are allowed!'));
        }
    },
}).single('Images');


const addModule = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('Multer Error:', err);
            return res.status(500).json({
                success: false,
                message: 'Image upload failed',
                error: err.message,
            });
        }

        // console.log('Request Body:', req.body); // Log the body fields
        // console.log('Uploaded File:', req.file); // Log the uploaded file

        try {
            const {
                modulecategory,
                modulesubcategory,
                moduleheading,
                modulesubheading,
                Ausbildung,
                StartDate,
                EndDate,
                Location,
                price,
                Offerprice,
                OfferEndDate,
                Place,
                AboutCourse,
                Homepage_cardcontent,
            } = req.body;

            // Log individual fields for better debugging
            console.log({
                modulecategory,
                modulesubcategory,
                moduleheading,
                modulesubheading,
                Ausbildung,
                StartDate,
                EndDate,
                Location,
                price,
                Offerprice,
                OfferEndDate,
                Place,
                AboutCourse,
                Homepage_cardcontent,
            });

            if (!moduleheading || !Ausbildung || !StartDate || !EndDate || !Location || !price || !Place || !Homepage_cardcontent) {
                return res.status(400).json({
                    success: false,
                    message: 'Required fields are missing',
                });
            }

            const imageName = req.file ? req.file.filename : null;

            const newModule = new Module({
                modulecategory,
                modulesubcategory,
                moduleheading,
                modulesubheading,
                Ausbildung,
                StartDate,
                EndDate,
                Location,
                price,
                Offerprice,
                OfferEndDate,
                Place,
                AboutCourse,
                Homepage_cardcontent,
                Images: imageName, // Save only the image name
            });

            await newModule.save();

            res.status(201).json({
                success: true,
                message: 'Module added successfully',
                data: newModule,
            });
        } catch (error) {
            console.error('Error adding module:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to add module',
                error: error.message,
            });
        }
    });
};



// Edit an existing module
const editModule = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('Multer Error:', err);
            return res.status(500).json({
                success: false,
                message: 'Image upload failed',
                error: err.message,
            });
        }

        try {
            const { id } = req.params;
            const updateFields = req.body;

            // Fetch the module by ID
            const module = await Module.findById(id);
            if (!module) {
                return res.status(404).json({
                    success: false,
                    message: 'Module not found',
                });
            }

            // If a new image is uploaded, remove the old image
            if (req.file) {
                const oldImagePath = path.join(__dirname, '../uploads', module.Images);
                console.log('Old Image Path:', oldImagePath); // Debugging to check the path

                // Check if the old image exists and delete it
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath); // Delete the old image
                    console.log('Old image deleted:', module.Images); // Confirm deletion
                } else {
                    console.log('Old image not found, skipping deletion.'); // Handle missing file
                }

                updateFields.Images = req.file.filename; // Save the new image name
            }

            // Update the module with new fields
            const updatedModule = await Module.findByIdAndUpdate(id, updateFields, { new: true });

            res.status(200).json({
                success: true,
                message: 'Module updated successfully',
                data: updatedModule,
            });
        } catch (error) {
            console.error('Error editing module:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to update module',
                error: error.message,
            });
        }
    });
};


// Delete a module
const deleteModule = async (req, res) => {
    try {
        const { id } = req.params;

        // Fetch the module by ID
        const module = await Module.findById(id);
        if (!module) {
            return res.status(404).json({
                success: false,
                message: 'Module not found',
            });
        }

        // Debugging: Check the current image field value
        console.log('Image to be deleted:', module.Images);

        // Check and remove the associated image from the uploads folder
        if (module.Images) {
            const imagePath = path.join(__dirname, '../uploads', module.Images); // Ensure the correct path
            console.log('Image Path:', imagePath); // Debugging: Log the image path

            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath); // Delete the image file
                console.log('Image deleted successfully.');
            } else {
                console.log('Image file not found, skipping deletion.');
            }
        } else {
            console.log('No image associated with this module.');
        }

        // Delete the module from the database
        await Module.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Module deleted successfully, along with its associated image (if any).',
        });
    } catch (error) {
        console.error('Error deleting module:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete module',
            error: error.message,
        });
    }
};


// Get all modules

const getAllModules = async (req, res) => {
    try {
        // Find all modules and populate meal and room fields, sorted by start date in ascending order
        const modules = await Module.find()
            .populate("availableMeals")
            .populate("availableRooms")
            .sort({ startDate: 1 }); // 1 for ascending order, -1 for descending order

        res.status(200).json({
            success: true,
            data: modules,
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


const getAllModules3 = async (req, res) => {
    try {
        // Get the current date
        const currentDate = new Date();

        // Find modules where the startDate is greater than the current date
        const modules = await Module.find({ startDate: { $gte: currentDate } }) // $gte is "greater than or equal to"
            .populate("meal")
            .populate("room")
            .sort({ startDate: 1 }); // Sort by start date in ascending order

        res.status(200).json({
            success: true,
            data: modules,
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
const toggleModuleStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const module = await Module.findById(id)
            .populate("availableMeals")
            .populate("availableRooms");
        if (!module) {
            return res.status(404).json({
                success: false,
                message: 'Module not found',
            });
        }

        module.status = module.status === 'active' ? 'inactive' : 'active';

        await module.save();

        res.status(200).json({
            success: true,
            message: 'Module status updated successfully',
            data: module,
        });
    } catch (error) {
        console.error('Error toggling module status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to toggle module status',
            error: error.message,
        });
    }
};


// **Get Module by ID**
const getModuleById = async (req, res) => {
    try {
        const { id } = req.params;

        const module = await Module.findById(id)
            .populate("availableMeals")
            .populate("availableRooms");
        if (!module) {
            return res.status(404).json({
                success: false,
                message: 'Module not found',
            });
        }

        res.status(200).json({
            success: true,
            data: module,
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


module.exports = {
    addModule,
    editModule,
    deleteModule,
    getAllModules,
    toggleModuleStatus,
    getModuleById
};
