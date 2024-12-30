const express = require("express");
const {
    addOurStory,
    editOurStory,
    deleteOurStory,
    getAllOurStories,
 
    getOurStoryById,
    toggleOurStoryStatus,
} = require("../controller/manage_about_us/addOurStoryController");

const ourStoryRoutes = express.Router();

// Add Our Story
ourStoryRoutes.post("/add_our_story", addOurStory);

// Edit Our Story
ourStoryRoutes.put("/edit_our_story/:id", editOurStory);

// Delete Our Story
ourStoryRoutes.delete("/delete_our_story/:id", deleteOurStory);





// Get All Our Stories


// ourStoryRoutes.get('/our_story/:id', ourStory);
// // Get All Our Stories

ourStoryRoutes.get("/our_stories", getAllOurStories);


// Get Our Story by ID
ourStoryRoutes.get("/our_story/:id", getOurStoryById); // Route to fetch story by ID

// Toggle Our Story Status
ourStoryRoutes.put("/toggle_status_story/:id", toggleOurStoryStatus); // Route to toggle the status


module.exports = ourStoryRoutes;
