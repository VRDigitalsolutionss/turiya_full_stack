
// const path = require('path');
const Module = require('../../model/addmodule');
/**
 * Controller to update the price of modules with their Offerprice if the offer is still valid.
 * The price is replaced with Offerprice until OfferEndDate is reached.
 */
const updatePriceWithOfferPrice = async (req, res) => {
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

      
      console.log("status not found")
    // Step 3: Update the price field with Offerprice for each module
    // const updatePromises = modulesWithActiveOffers.map(module => {
    //   // Only update if the current price is different from Offerprice
    //   if (module.price !== module.Offerprice) {
    //     module.price = module.Offerprice;
    //     module.price = module.Offerprice;
    //     return module.save();
    //   }
    //   return Promise.resolve();
    // });

    // await Promise.all(updatePromises);

    res.json({
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


module.exports = {
  updatePriceWithOfferPrice // Export the new controller
};
