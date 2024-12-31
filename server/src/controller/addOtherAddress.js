const OtherAddress = require("../model/Register2");
const RegisteredUser = require("../model/Register");

// Add OtherAddress and link it to a Registered User
const addOtherAddress = async (req, res) => {
  try {
    const { 
      registeredUserId, // ID of Registered User
      userType, company, First_name, Last_name, email, phone, address,
      country, federal_state, city, postal_code 
    } = req.body;

    // Step 1: Check if Registered User exists
    const user = await RegisteredUser.findById(registeredUserId);
    if (!user) {
      return res.status(404).json({ message: "Registered User not found" });
    }

    // Step 2: Check if the user already has an 'otherAddress'
    if (user.otherAddress) {
      // Delete the previous address if it exists
      await OtherAddress.findByIdAndDelete(user.otherAddress);
    }

    // Step 3: Create the new OtherAddress
    const newAddress = await OtherAddress.create({
      userType,
      company,
      First_name,
      Last_name,
      email,
      phone,
      address,
      country,
      federal_state,
      city,
      postal_code
    });

    // Step 4: Update RegisteredUser with reference to the new OtherAddress
    user.otherAddress = newAddress._id;
    await user.save();

    res.status(201).json({
      message: "Other Address added successfully",
      otherAddress: newAddress,
      updatedUser: user,
    });
  } catch (error) {
    console.error("Error adding other address:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// Get OtherAddress for a Registered User
const getOtherAddress = async (req, res) => {
  try {
    const { registeredUserId } = req.params;

    // Step 1: Find the Registered User and populate OtherAddress
    const user = await RegisteredUser.findById(registeredUserId).populate("otherAddress");

    if (!user) {
      return res.status(404).json({ message: "Registered User not found" });
    }

    if (!user.otherAddress) {
      return res.status(404).json({ message: "No Other Address found for this user" });
    }

    res.status(200).json({
      message: "Other Address retrieved successfully",
      otherAddress: user.otherAddress,
    });
  } catch (error) {
    console.error("Error fetching other address:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  addOtherAddress,
  getOtherAddress,
};
