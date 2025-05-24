// const mongoose = require("../config/db");

// // Module Schema
// const moduleSchema = new mongoose.Schema({
//     modulecategory: {
//         type: String,
//         required: false, 
//         trim: true,    
//     },
//     modulesubcategory: {
//         type: String,
//         required: false, 
//         trim: true,
//     },
//     moduleheading: {
//         type: String,
//         required: true, 
//         trim: true,
//     },
//     modulesubheading: {
//         type: String,
//         required: false, 
//         trim: true,
//     },
//     Ausbildung: {
//         type: String,
//         required: true, 
//         trim: true,
//     },
//     StartDate: {
//         type: String,
//         required: true, 
//         trim: true,
//     },
//     EndDate: {
//         type: String,
//         required: true, 
//         trim: true,
//     },
//     Location: {
//         type: String,
//         required: true, 
//         trim: true,
//     },
//     price: {
//         type: String,
//         required: true, 
//         trim: true,
//     },
//     Offerprice: {
//         type: String,
//         required: false, 
//         trim: true,
//     },
//     OfferEndDate: {
//         type: String,
//         required: false, 
//         trim: true,
//     },
//     Place: {
//         type: String,
//         required: true, 
//         trim: true,
//     },
//     AboutCourse: {
//         type: String,
//         required: false, 
//         trim: true,
//     },
//     Homepage_cardcontent: {
//         type: String,
//         required: true, 
//         trim: true,
//     },
//     Images: {
//         type: String,
//         required: false, 
//         trim: true,
//     },
//     status: {
//         type: String,
//         trim: true, 
//         default: 'active',
//     },
//     // Reference to Meal and Room Schema
//     meal: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "meal", // Reference to the Meal model
//         required: false,
//     },
//     room: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "room", // Reference to the Room model
//         required: false,
//     }
// }, {
//     timestamps: true, 
// });

// const Module = mongoose.model("module", moduleSchema);

// module.exports = { Module };


// // =============

// // Get all modules with meal and room populated
// const getAllModules = async (req, res) => {
//     try {
//         const modules = await Module.find()
//             .populate("meal") // Populates the meal data
//             .populate("room"); // Populates the room data

//         res.status(200).json({
//             success: true,
//             data: modules,
//         });
//     } catch (error) {
//         console.error('Error fetching modules:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to fetch modules',
//             error: error.message,
//         });
//     }
// };


// // ==================================

// const addModule = async (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             console.error('Multer Error:', err);
//             return res.status(500).json({
//                 success: false,
//                 message: 'Image upload failed',
//                 error: err.message,
//             });
//         }

//         try {
//             const {
//                 modulecategory,
//                 modulesubcategory,
//                 moduleheading,
//                 modulesubheading,
//                 Ausbildung,
//                 StartDate,
//                 EndDate,
//                 Location,
//                 price,
//                 Offerprice,
//                 OfferEndDate,
//                 Place,
//                 AboutCourse,
//                 Homepage_cardcontent,
//                 mealId, // Assuming mealId and roomId are passed in the body
//                 roomId,
//             } = req.body;

//             if (!moduleheading || !Ausbildung || !StartDate || !EndDate || !Location || !price || !Place || !Homepage_cardcontent) {
//                 return res.status(400).json({
//                     success: false,
//                     message: 'Required fields are missing',
//                 });
//             }

//             const imageName = req.file ? req.file.filename : null;

//             const newModule = new Module({
//                 modulecategory,
//                 modulesubcategory,
//                 moduleheading,
//                 modulesubheading,
//                 Ausbildung,
//                 StartDate,
//                 EndDate,
//                 Location,
//                 price,
//                 Offerprice,
//                 OfferEndDate,
//                 Place,
//                 AboutCourse,
//                 Homepage_cardcontent,
//                 Images: imageName, // Save only the image name
//                 meal: mealId, // Reference to the Meal document
//                 room: roomId, // Reference to the Room document
//             });

//             await newModule.save();

//             res.status(201).json({
//                 success: true,
//                 message: 'Module added successfully',
//                 data: newModule,
//             });
//         } catch (error) {
//             console.error('Error adding module:', error);
//             res.status(500).json({
//                 success: false,
//                 message: 'Failed to add module',
//                 error: error.message,
//             });
//         }
//     });
// };



// // =================================


// const addModule = async (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             console.error('Multer Error:', err);
//             return res.status(500).json({
//                 success: false,
//                 message: 'Image upload failed',
//                 error: err.message,
//             });
//         }

//         try {
//             const {
//                 modulecategory,
//                 modulesubcategory,
//                 moduleheading,
//                 modulesubheading,
//                 Ausbildung,
//                 StartDate,
//                 EndDate,
//                 Location,
//                 price,
//                 Offerprice,
//                 OfferEndDate,
//                 Place,
//                 AboutCourse,
//                 Homepage_cardcontent,
//                 mealId, // Assuming mealId and roomId are passed in the body
//                 roomId,
//             } = req.body;

//             if (!moduleheading || !Ausbildung || !StartDate || !EndDate || !Location || !price || !Place || !Homepage_cardcontent) {
//                 return res.status(400).json({
//                     success: false,
//                     message: 'Required fields are missing',
//                 });
//             }

//             const imageName = req.file ? req.file.filename : null;

//             const newModule = new Module({
//                 modulecategory,
//                 modulesubcategory,
//                 moduleheading,
//                 modulesubheading,
//                 Ausbildung,
//                 StartDate,
//                 EndDate,
//                 Location,
//                 price,
//                 Offerprice,
//                 OfferEndDate,
//                 Place,
//                 AboutCourse,
//                 Homepage_cardcontent,
//                 Images: imageName, // Save only the image name
//                 meal: mealId, // Reference to the Meal document
//                 room: roomId, // Reference to the Room document
//             });

//             await newModule.save();

//             res.status(201).json({
//                 success: true,
//                 message: 'Module added successfully',
//                 data: newModule,
//             });
//         } catch (error) {
//             console.error('Error adding module:', error);
//             res.status(500).json({
//                 success: false,
//                 message: 'Failed to add module',
//                 error: error.message,
//             });
//         }
//     });
// };


// const editModule = async (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             console.error('Multer Error:', err);
//             return res.status(500).json({
//                 success: false,
//                 message: 'Image upload failed',
//                 error: err.message,
//             });
//         }

//         try {
//             const { id } = req.params;
//             const updateFields = req.body;

//             // Fetch the module by ID
//             const module = await Module.findById(id);
//             if (!module) {
//                 return res.status(404).json({
//                     success: false,
//                     message: 'Module not found',
//                 });
//             }

//             // If a new image is uploaded, remove the old image
//             if (req.file) {
//                 const oldImagePath = path.join(__dirname, '../uploads', module.Images);
//                 console.log('Old Image Path:', oldImagePath);

//                 if (fs.existsSync(oldImagePath)) {
//                     fs.unlinkSync(oldImagePath); // Delete the old image
//                     console.log('Old image deleted:', module.Images);
//                 } else {
//                     console.log('Old image not found, skipping deletion.');
//                 }

//                 updateFields.Images = req.file.filename; // Save the new image name
//             }

//             // Update the module with new fields
//             const updatedModule = await Module.findByIdAndUpdate(id, updateFields, { new: true })
//                 .populate('meal') // Populate meal after update
//                 .populate('room'); // Populate room after update

//             res.status(200).json({
//                 success: true,
//                 message: 'Module updated successfully',
//                 data: updatedModule,
//             });
//         } catch (error) {
//             console.error('Error editing module:', error);
//             res.status(500).json({
//                 success: false,
//                 message: 'Failed to update module',
//                 error: error.message,
//             });
//         }
//     });
// };
