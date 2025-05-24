const express = require("express");
const {
    addTuriyaYogaTeam,
    editTuriyaYogaTeam,
    deleteTuriyaYogaTeam,
    getAllTuriyaYogaTeam,
    getTuriyaYogaTeamById,
    toggleTuriyaYogaTeamStatus,
} = require("../controller/manage_about_us/turiyayogateamController");

const TuriyaYogaTeamroute = express.Router();

// Add a new entry
TuriyaYogaTeamroute.post("/add_turiyayogateam", addTuriyaYogaTeam);

// Edit an entry
TuriyaYogaTeamroute.put("/edit_turiyayogateam/:id", editTuriyaYogaTeam);

// Delete an entry
TuriyaYogaTeamroute.delete("/delete_turiyayogateam/:id", deleteTuriyaYogaTeam);

// Get all entries
TuriyaYogaTeamroute.get("/all_turiyayogateam", getAllTuriyaYogaTeam);

// Get a single entry by ID
TuriyaYogaTeamroute.get("/turiyayogateam/:id", getTuriyaYogaTeamById);

// Toggle the status of an entry (active/inactive)
TuriyaYogaTeamroute.put("/turiyayogateam_toggle_status/:id", toggleTuriyaYogaTeamStatus);

module.exports = TuriyaYogaTeamroute;
