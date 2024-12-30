const Testimonial = require("../../model/Testimonial");
const VideoTestimonial = require("../../model/VideoTestimonial");

const handleAddVideoTestimonial = async (req, res) => {
  try {
    console.log("Adding video testimonial", req.body);
    // Extract data from the request body
    const { feedbackType, youtubeLink, feedbackContent } = req.body;

    // Validate required fields
    if (!feedbackType || !youtubeLink || !feedbackContent) {
      return res.status(400).json({
        success: false,
        message: "feedbackType, youtubeLink, and feedbackContent are required",
      });
    }

    // Create a new testimonial document
    const newvideoTestimonial = new VideoTestimonial({
      feedbackType,
      youtubeLink,
      feedbackContent,
     
    });

    // Save to the database
    await newvideoTestimonial.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Testimonial added successfully",
      data: newvideoTestimonial,
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      success: false,
      message: "Failed to add testimonial",
      error: error.message,
    });
  }
};

const editVideoTestimonial = async (req, res) => {
  const id = req.params.id;

  try {
    // Extract data from the request body
    const { feedbackType, youtubeLink, feedbackContent } = req.body;

    // Validate required fields
    if (!feedbackType || !youtubeLink || !feedbackContent) {
      return res.status(400).json({
        success: false,
        message: "feedbackType, youtubeLink, and feedbackContent are required",
      });
    }

    if (id) {
      // If ID is provided, update the testimonial
      const updatedvideoTestimonial = await VideoTestimonial.findByIdAndUpdate(
        id,
        { feedbackType, youtubeLink, feedbackContent }
      );

      if (!updatedvideoTestimonial) {
        return res.status(404).json({
          success: false,
          message: "video Testimonial not found for update",
        });
      }

      // Send success response for update
      return res.status(200).json({
        success: true,
        message: "Video Testimonial updated successfully",
        data: updatedvideoTestimonial,
      });
    } else {
      // If no ID is provided, create a new testimonial
      const newVideoTestimonial = new VideoTestimonial({
        feedbackType,
        youtubeLink,
        feedbackContent,
      });

      // Save to the database
      await newVideoTestimonial.save();

      // Send success response for creation
      return res.status(201).json({
        success: true,
        message: "Video Testimonial added successfully",
        data: newVideoTestimonial,
      });
    }
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      success: false,
      message: "Failed to add or update Video Testimonial",
      error: error.message,
    });
  }
};

const toggleVideoTestimonialStatus = async (req, res) => {
  try {
    const { id } = req.params; // Get testimonial ID from URL params

    // Find the testimonial by ID
    const videoTestimonial = await VideoTestimonial.findById(id);

    if (!videoTestimonial) {
      return res.status(404).json({
        success: false,
        message: "Video Testimonial not found",
      });
    }

    // Toggle the status
    videoTestimonial.status =
      videoTestimonial.status == "active" ? "inactive" : "active";

    // Save the updated testimonial
    await videoTestimonial.save();

    res.status(200).json({
      success: true,
      message: "Video Testimonial status updated successfully",
      data: videoTestimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to toggle video testimonial status",
      error: error.message,
    });
  }
};

const deleteVideoTestimonial = async (req, res) => {
  try {
    const { id } = req.params; // Extract testimonial ID from URL params

    // Find and delete the testimonial
    const deleteVideoTestimonial = await VideoTestimonial.findByIdAndDelete(id);

    if (!deleteVideoTestimonial) {
      return res.status(404).json({
        success: false,
        message: "Video Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Video Testimonial deleted successfully",
      data: deleteVideoTestimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete video testimonial",
      error: error.message,
    });
  }
};

const Videotestimonials = async (req, res) => {
  VideoTestimonial.find()
    .then((data) => {
      res.status(200).json({ success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error: error.message });
    });
};

const Videotestimonial = async (req, res) => {
  try {
    const id = req.params.id;

    // Ensure the id is a valid MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid ID format" });
    }

    // Query the database by _id
    const data = await VideoTestimonial.findById(id);

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "testimonial not found" });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching testimonial:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  Videotestimonial,
  handleAddVideoTestimonial,
  editVideoTestimonial,
  toggleVideoTestimonialStatus,
  deleteVideoTestimonial,
  Videotestimonials,
};
