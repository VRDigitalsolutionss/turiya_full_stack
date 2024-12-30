// controllers/moduleHelpers.js

const applyOfferPrice = async (module) => {
    if (!module.Offerprice || !module.OfferEndDate) {
      // No offer details provided
      return;
    }
  
    const today = new Date();
  
    // Check if OfferEndDate is today or in the future
    if (module.OfferEndDate >= today) {
      if (module.price !== module.Offerprice) {
        module.price = module.Offerprice;
        await module.save();
      }
    }
};
  
module.exports = applyOfferPrice
  