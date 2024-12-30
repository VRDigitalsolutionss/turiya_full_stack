const express = require("express");
const {
    addOurphilosophy,
    editOurphilosophy,
    deleteOurphilosophy,
    getAllOurphilosophy,
    getOurphilosophyById,
    toggleOurPhilosophyStatus,
} = require("../controller/manage_about_us/philosophyController");

const ourPhilosophyRoutes = express.Router();

// Add Our Philosophy
ourPhilosophyRoutes.post("/add_our_philosophy", addOurphilosophy);

// Edit Our Philosophy
ourPhilosophyRoutes.put("/edit_our_philosophy/:id", editOurphilosophy);

// Delete Our Philosophy
ourPhilosophyRoutes.delete("/delete_our_philosophy/:id", deleteOurphilosophy);

// Get All Our Philosophies
ourPhilosophyRoutes.get("/our_philosophy", getAllOurphilosophy);
ourPhilosophyRoutes.get("/our_philosophy/:id", getOurphilosophyById);

// Toggle Our Philosophy Status
ourPhilosophyRoutes.put("/toggle_status_philosophy/:id", toggleOurPhilosophyStatus);


module.exports = ourPhilosophyRoutes;
