
const fs = require('fs');
const path = require('path');
const multer = require('multer');
// const path = require('path');
const Module = require('../../model/addmodule');



// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../uploads/images/module'); // specify the directory for image storage
  },
  filename: (req, file, cb) => {
    // Use the original filename or create a unique name to avoid overwriting
    cb(null, Date.now() + path.extname(file.originalname)); // eg: 1616262250000.jpg
  }
});

// Initialize multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb('Error: Only image files are allowed!');
  }
});

// const updatePriceWithOfferPrice = async (req, res) => {
//   try {
//     // Step 1: Get today's date
//     const today = new Date();

//     // Step 2: Find all modules where:
//     // - Offerprice exists
//     // - OfferEndDate is today or in the future
//     const modulesWithActiveOffers = await Module.find({
//       Offerprice: { $exists: true, $ne: null },
//       OfferEndDate: { $gte: today }
//     });

//     if (modulesWithActiveOffers.length === 0) {
//      res.status(404).json({
//         success: false,
//         message: "No modules with active offers found."
//       });
//     }

//     // Step 3: Update the price field with Offerprice for each module
//     const updatePromises = modulesWithActiveOffers.map(module => {
//       // Only update if the current price is different from Offerprice
//       if (module.price !== module.Offerprice) {
//         module.price = module.Offerprice;
//         return module.save();
//       }
//       return Promise.resolve();
//     });

//     await Promise.all(updatePromises);

//     res.status(200).json({
//       success: true,
//       message: "Prices updated to Offerprice for active offers.",
//       data: modulesWithActiveOffers
//     });

//   } catch (error) {
//     console.error("Error updating prices with Offerprice:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: error.message
//     });
//   }
// };




// Create a new Module
const createModuleold = async (req, res) => {
  try {
    const { 
      modulecategory, 
      modulesubcategory, 
      moduleheading, 
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
      status 
    } = req.body;
    let imagePath = req.file ? req.file.path : null;

    const newModule = new Module({
      modulecategory,
      modulesubcategory,
      moduleheading,
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
      status,
      Images: imagePath,
    });




    if (Offerprice !== '' && OfferEndDate !== '') {
      // If yes, 
      newModule.price = Offerprice;

      // Save the updated module
      await newModule.save();
    }

    res.status(201).json(newModule);
  } catch (error) {
    res.status(500).json({ message: 'Error creating module', error });
  }
};

const final_add_module = async (req, res) => { 
  try {
    const { 
      modulecategory, 
      modulesubcategory, 
      moduleheading, 
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
      status ,
      redirectUrl
    } = req.body;
    
    let imagePath = req.file ? req.file.path : null;

    const newModule = new Module({
      modulecategory,
      modulesubcategory,
      moduleheading,
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
      status,
      Images: imagePath,
      redirectUrl
    });

    // Check if OfferEndDate is present and compare it with current date
    if (Offerprice !== '' && OfferEndDate !== '') {
      // Parse OfferEndDate as a Date object
      const offerEndDate = new Date(OfferEndDate);
      const currentDate = new Date();
      console.log("offer start date", offerEndDate);
      console.log("offer end date", offerEndDate);
      // If the current date is past the OfferEndDate, reset the Offerprice
      // if (currentDate > offerEndDate) {
      //   newModule.Offerprice = null; // Remove the offer price
      //   newModule.price = price; // Set the original price
      // } else {
      //   // Otherwise, set the price to Offerprice
      //   newModule.price = Offerprice;
      // }
    }

    // Save the new module
    await newModule.save();

    res.status(201).json(newModule);
  } catch (error) {
    res.status(500).json({ message: 'Error creating module', error });
  }
};

const getModuleByLocation = async (req, res) => {
  try {
    // Extract the location parameter from the request
    const { location } = req.params;

    if (!location) {
      return res.status(400).json({ message: 'Location parameter is required.' });
    }

    // Find data in MongoDB based on the location
    const modules = await Module.find({ Location: location });

    if (modules.length === 0) {
      return res.status(404).json({ message: 'No modules found for the specified location.' });
    }

    // Send the retrieved data as a response
    res.status(200).json({
      success: true,
      data: modules
    });

  } catch (error) {
    console.error('Error fetching modules by location:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error. Could not fetch modules.',
      error: error.message
    });
  }
}



// Get all Modules
const getAllModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving modules', error });
  }
};

// Update a Module
const updateModule = async (req, res) => {
  try {
    const moduleId = req.params.id;
    const { 
      modulecategory, 
      modulesubcategory, 
      moduleheading, 
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
      status,
      redirectUrl
    } = req.body;

    let updatedFields = {
      modulecategory,
      modulesubcategory,
      moduleheading,
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
      status,
      redirectUrl
    };

    if (req.file) {
      // If there's a new image, delete the old one
      const module = await Module.findById(moduleId);
      if (module && module.Images) {
        const oldImagePath = module.Images;
        fs.unlinkSync(path.join(__dirname, '../../uploads/images/module', oldImagePath)); // Delete the old image from the filesystem
      }
      updatedFields.Images = req.file.path; // Set new image path
    }

    // if (Offerprice !== '' && OfferEndDate !== '') {
    //   // If yes, 
    //   updatedFields.price = Offerprice;

    //   // Save the updated module
   
    // }


     // Check if OfferEndDate is present and compare it with current date
     if (Offerprice !== '' && OfferEndDate !== '') {
      // Parse OfferEndDate as a Date object
      const offerEndDate = new Date(OfferEndDate);
      const currentDate = new Date();
      console.log("offer start date", offerEndDate);
      console.log("offer end date", offerEndDate);
      // // If the current date is past the OfferEndDate, reset the Offerprice
      // if (currentDate > offerEndDate) {
      //   updatedFields.Offerprice = null; // Remove the offer price
      //   updatedFields.price = price; // Set the original price
      // } else {
      //   // Otherwise, set the price to Offerprice
      //   updatedFields.price = Offerprice;
      // }
    }

    // Save the new module

[]

    const updatedModule = await Module.findByIdAndUpdate(moduleId, updatedFields);
    res.status(200).json(updatedModule);
  } catch (error) {
    res.status(500).json({ message: 'Error updating module', error });
  }
};

const updatePriceWithOfferPricelatest3 = async (req, res) => {
  try {
    // Step 1: Get today's date in 'YYYY-MM-DD' format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`; // e.g., '2024-12-06'

    console.log("Formatted Today:", formattedToday); // For debugging purposes

    // Step 2: Find all modules where:
    // - Offerprice exists
    // - OfferEndDate is today or in the future
    const modulesWithActiveOffers = await Module.find({
      Offerprice: { $exists: true, $ne: null },
      OfferEndDate: { $gte: formattedToday }
    });

    if (modulesWithActiveOffers.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No modules with active offers found."
      });
    }

    // Step 3: Update the price field with Offerprice for each module
    const updatePromises = modulesWithActiveOffers.map(module => {
      // Only update if the current price is different from Offerprice
      if (module.price !== module.Offerprice) {
        module.price = module.Offerprice;
        return module.save();
      }
      return Promise.resolve();
    });

    await Promise.all(updatePromises);

    res.status(200).json({
      success: true,
      message: "Prices updated to Offerprice for active offers.",
      data: modulesWithActiveOffers
    });

  } catch (error) {
    console.error("Error updating prices with Offerprice:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};
// Delete a Module
const deleteModule = async (req, res) => {
  try {
    const moduleId = req.params.id;
    const module = await Module.findById(moduleId);
    if (module && module.Images) {
      // Delete the associated image from the server
      fs.unlinkSync(path.join(__dirname, '../', module.Images));
    }

    await Module.findByIdAndDelete(moduleId);
    res.status(200).json({ message: 'Module deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting module', error });
  }
};



const getUpcoming_course2 = async (req, res) => {



  try {
    const today = new Date();

    console.log("today date",today)

    const modules = await Module.find({
      $or: [
        { EndDate: { $gte: today } },
        { StartDate: { $gte: today } }
      ]
    })
    .populate('meal')
    .populate('room');

    res.status(200).json({
      success: true,
      data: modules
    });
  } catch (error) {
    console.error("Error fetching modules:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};


const getUpcoming_course = async (req, res) => {
  try {
    // Step 1: Get today's date in 'YYYY-MM-DD' format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`; // e.g., '2024-11-08'

    console.log("Formatted Today:", formattedToday); // For debugging purposes

    // Step 2: Query to exclude modules where both StartDate and EndDate have passed
    const modules = await Module.find({
      $or: [
        { EndDate: { $gte: formattedToday } },    // EndDate is today or in the future
        { StartDate: { $gte: formattedToday } }   // StartDate is today or in the future
      ]
    })
    .populate('meal') // Populate 'meal' reference if needed
    .populate('room'); // Populate 'room' reference if needed

    // Step 3: Send the filtered modules as a response
    res.status(200).json({
      success: true, 
      data: modules
    });

  } catch (error) {
    console.error("Error fetching modules:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

const getComingSoonCourses = async (req, res) => {
  try {
    const today = new Date();

    const comingSoonModules = await Module.find({
      StartDate: { $gte: today }
    })
    .populate('meal')
    .populate('room')
    .sort({ StartDate: 1 });

    res.status(200).json({
      success: true,
      data: comingSoonModules
    });

  } catch (error) {
    console.error("Error fetching coming soon courses:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};


  const getNextComingCoursenewold = async (req, res) => {
    try {
      const today = new Date();
  
      // Find the single module with the nearest StartDate >= today
      const nextCourse = await Module.findOne({
        StartDate: { $gte: today }
      })
      .populate('meal') // Populate 'meal' reference if needed
      .populate('room') // Populate 'room' reference if needed
      .sort({ StartDate: 1 }); // Sort by StartDate ascending
  
      if (!nextCourse) {
        return res.status(404).json({
          success: false,
          message: "No upcoming courses found."
        });
      }
  
      res.status(200).json({
        success: true,
        data: nextCourse
      });
  
    } catch (error) {
      console.error("Error fetching the next coming course:", error);
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: error.message
      });
    }
  };

const getNextComingCourses = async (req, res) => {
  try {
    const today = new Date();

    const nextCourse = await Module.findOne({
      StartDate: { $gte: today }
    })
    .populate('meal')
    .populate('room')
    .sort({ StartDate: 1 });

    if (!nextCourse) {
      return res.status(404).json({
        success: false,
        message: "No upcoming courses found."
      });
    }

    res.status(200).json({
      success: true,
      data: nextCourse
    });

  } catch (error) {
    console.error("Error fetching next coming course:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};
const getClosestStartDateCourse = async (req, res) => {
  try {
    // Step 1: Get today's date in 'YYYY-MM-DD' format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`; // e.g., '2024-12-06'

    console.log("Formatted Today:", formattedToday); // For debugging purposes

    // Step 2: Query to find the module with the closest StartDate to today
    const closestModule = await Module.findOne({
      StartDate: { $gte: formattedToday } // StartDate is today or in the future
    })
    .sort({ StartDate: 1 }) // Sort by StartDate ascending to get the closest date
    .populate('meal') // Populate 'meal' reference if needed
    .populate('room'); // Populate 'room' reference if needed

    if (!closestModule) {
      return res.status(404).json({
        success: false,
        message: "No upcoming modules found."
      });
    }

    // Step 3: Send the closest module as a response
    res.status(200).json({
      success: true, 
      data: closestModule
    });

  } catch (error) {
    console.error("Error fetching the closest module:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};



const getNextComingCoursenew = async (req, res) => {
  try {
    const today = new Date();
    const { page = 1, limit = 10 } = req.query; // Default to page 1, limit 10

    // Define the threshold if needed (e.g., courses within the next 30 days)
    const comingSoonThreshold = new Date();
    comingSoonThreshold.setDate(today.getDate() + 30); // 30 days from today

    const comingSoonModules = await Module.find({
      StartDate: { 
        $gte: today,
        $lte: comingSoonThreshold
      }
    })
    .populate('meal')
    .populate('room')
    .sort({ StartDate: 1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

    const total = await Module.countDocuments({
      StartDate: { 
        $gte: today,
        $lte: comingSoonThreshold
      }
    });

    res.status(200).json({
      success: true,
      data: comingSoonModules,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error("Error fetching coming soon courses:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};


const getClosestUpcomingCourses = async (req, res) => {
  try {
    // Step 1: Get today's date in 'YYYY-MM-DD' format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`; // e.g., '2024-12-06'

    console.log("Formatted Today:", formattedToday); // For debugging purposes

    // Step 2: Find the minimum StartDate that is today or in the future
    const closestStartDateModule = await Module.findOne({
      StartDate: { $gte: formattedToday } // StartDate is today or in the future
    })
    .sort({ StartDate: 1 }) // Sort by StartDate ascending to get the closest date
    .select('StartDate'); // Select only the StartDate field to minimize data transfer

    if (!closestStartDateModule) {
      return res.status(404).json({
        success: false,
        message: "No upcoming modules found."
      });
    }

    const closestStartDate = closestStartDateModule.StartDate;

    console.log("Closest StartDate:", closestStartDate); // For debugging purposes

    // Step 3: Retrieve all modules with the closest StartDate
    const closestModules = await Module.find({
      StartDate: closestStartDate
    })
    .populate('meal') // Populate 'meal' reference if needed
    .populate('room'); // Populate 'room' reference if needed

    // Step 4: Send the filtered modules as a response
    res.status(200).json({
      success: true, 
      data: closestModules
    });

  } catch (error) {
    console.error("Error fetching closest upcoming modules:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

// =========================================================

const getClosestUpcomingCourseswithhrs = async (req, res) => { 
  try {
    // Step 1: Get today's date at 00:00:00 to compare dates without time
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight

    console.log("Today's Date:", today); // For debugging purposes

    // Step 2: Find the minimum StartDate that is strictly in the future
    const closestStartDateModule = await Module.findOne({
      StartDate: { $gt: today } // StartDate is strictly greater than today
    })
    .sort({ StartDate: 1 }) // Sort by StartDate ascending to get the closest date
    .select('StartDate'); // Select only the StartDate field to minimize data transfer

    if (!closestStartDateModule) {
      return res.status(404).json({
        success: false,
        message: "No upcoming modules found."
      });
    }

    const closestStartDate = closestStartDateModule.StartDate;

    console.log("Closest StartDate:", closestStartDate); // For debugging purposes

    // Step 3: Retrieve all modules with the closest StartDate
    const closestModules = await Module.find({
      StartDate: closestStartDate
    })
    .populate('meal') // Populate 'meal' reference if needed
    .populate('room'); // Populate 'room' reference if needed

    // Step 4: Send the filtered modules as a response
    res.status(200).json({
      success: true, 
      data: closestModules
    });

  } catch (error) {
    console.error("Error fetching closest upcoming modules:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

// =================================================================


const getClosestUpcomingCourseswithNull = async (req, res) => { 
  try {
    // Step 1: Get today's date in 'YYYY-MM-DD' format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`; // e.g., '2024-12-06'

    console.log("Formatted Today:", formattedToday); // For debugging purposes

    // Step 2: Find the minimum StartDate that is strictly in the future
    const closestStartDateModule = await Module.findOne({
      StartDate: { $gt: formattedToday } // StartDate is strictly greater than today
    })
    .sort({ StartDate: 1 }) // Sort by StartDate ascending to get the closest date
    .select('StartDate'); // Select only the StartDate field to minimize data transfer

    if (!closestStartDateModule) {
      return res.status(404).json({
        success: false,
        message: "No upcoming modules found."
      });
    }

    const closestStartDate = closestStartDateModule.StartDate;

    console.log("Closest StartDate:", closestStartDate); // For debugging purposes

    // Step 3: Retrieve all modules with the closest StartDate
    const closestModules = await Module.find({
      StartDate: closestStartDate
    })
    .populate('meal') // Populate 'meal' reference if needed
    .populate('room'); // Populate 'room' reference if needed

    // Step 4: Send the filtered modules as a response
    res.status(200).json({
      success: true, 
      data: closestModules
    });

  } catch (error) {
    console.error("Error fetching closest upcoming modules:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

// =========================================== using module category =========================================

const getClosestUpcomingCourseswithNull2 = async (req, res) => { 
  try {
    // Step 1: Get today's date in 'YYYY-MM-DD' format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`; // e.g., '2024-12-06'

    console.log("Formatted Today:", formattedToday); // For debugging purposes

    // Step 2: Extract 'modulecategory' from the request parameters
    const { modulecategory } = req.params;  // If sent as a URL parameter like /courses/:modulecategory
    // Or you could use req.query if it's passed as a query parameter like /courses?modulecategory=200H_AYA_Yogalehrer

    if (!modulecategory) {
      return res.status(400).json({
        success: false,
        message: "Module category is required."
      });
    }

    // Step 3: Find the minimum StartDate that is strictly in the future with the provided modulecategory
    const closestStartDateModule = await Module.findOne({
      StartDate: { $gt: formattedToday }, // StartDate is strictly greater than today
      modulecategory: modulecategory // Use the modulecategory from params
    })
    .sort({ StartDate: 1 }) // Sort by StartDate ascending to get the closest date
    .select('StartDate'); // Select only the StartDate field to minimize data transfer

    if (!closestStartDateModule) {
      return res.status(404).json({
        success: false,
        message: "No upcoming modules found for the provided category."
      });
    }

    const closestStartDate = closestStartDateModule.StartDate;

    console.log("Closest StartDate:", closestStartDate); // For debugging purposes

    // Step 4: Retrieve all modules with the closest StartDate and the provided modulecategory
    const closestModules = await Module.find({
      StartDate: closestStartDate,
      modulecategory: modulecategory // Filter by the modulecategory passed in the request
    })
    .populate('meal') // Populate 'meal' reference if needed
    .populate('room'); // Populate 'room' reference if needed

    // Step 5: Send the filtered modules as a response
    res.status(200).json({
      success: true, 
      data: closestModules
    });

  } catch (error) {
    console.error("Error fetching closest upcoming modules:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};


// =====================================================================================

module.exports = {
  final_add_module,
  getAllModules,
  updateModule,
  deleteModule,
  getUpcoming_course,
  getComingSoonCourses,
  getNextComingCoursenew,
  getClosestStartDateCourse,
  getClosestUpcomingCourses,
  getClosestUpcomingCourseswithhrs,
  getClosestUpcomingCourseswithNull,
  getModuleByLocation
};
