const fs = require("fs");
const path = require("path");
const Blog = require("../../model/Blog"); // Assuming the Blog model is in models/blogModel.js
const multer = require("multer");

// Set up multer storage configuration
const uploadDir = path.join(__dirname, '../../../uploads/images/blogs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
};

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});


const upload = multer({ storage }).single('BlogImage');
 

const addBlog = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        console.error('File upload error:', err.message);
        return res.status(500).json({
          success: false,
          message: 'File upload failed',
          error: err.message,
        });
      }

      if (!req.file) {
        return res.status(400).json({ success: false, message: 'File is required' });
      }

      const sanitizedFilename = req.file.filename.replace(/\s+/g, '');
      const fileUrl = sanitizedFilename;

      const { blogHeading, blogContent } = req.body;

      if (!blogHeading || !blogContent) {
        return res.status(400).json({ success: false, message: 'blogHeading and blogContent are required' });
      }

      const newBlog = new Blog({
        blogHeading,
        blogContent,
        blogImage: fileUrl,
      });

      await newBlog.save();
      res.status(201).json({
        success: true,
        message: 'Blog added successfully',
        data: newBlog,
      });
    });
  } catch (error) {
    console.error('Error adding Blog:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to add Blog',
      error: error.message,
    });
  }
};


// ======================================================================================
const editBlog = async (req, res) => {
  try {
    // Use the upload middleware to handle the file upload
    upload(req, res, async (err) => {
      if (err) {
        console.error('File upload error:', err.message);
        return res.status(500).json({
          success: false,
          message: 'File upload failed',
          error: err.message,
        });
      }

      const { id } = req.params; // Extract the blog ID from the request parameters
      const { blogHeading, blogContent } = req.body; // Extract fields from the request body

      if (!blogHeading || !blogContent) {
        return res.status(400).json({
          success: false,
          message: 'blogHeading and blogContent are required',
        });
      }

      // Find the existing blog entry by ID
      const blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({ success: false, message: 'Blog not found' });
      }

      // Handle file replacement if a new file is uploaded
      let fileUrl = blog.blogImage; // Default to existing image
      if (req.file) {
        // Delete the old file if it exists
        const oldFilePath = path.join(uploadDir, blog.blogImage);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }

        // Save the new file
        const sanitizedFilename = req.file.filename.replace(/\s+/g, '');
        fileUrl = sanitizedFilename;
      }

      // Update the blog with new details
      blog.blogHeading = blogHeading;
      blog.blogContent = blogContent;
      blog.blogImage = fileUrl;

      // Save the updated blog entry
      await blog.save();

      // Send success response
      res.status(200).json({
        success: true,
        message: 'Blog updated successfully',
        data: blog,
      });
    });
  } catch (error) {
    console.error('Error editing blog:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to edit blog',
      error: error.message,
    });
  }
};



// Get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      success: true,
      message: 'Blog added successfully',
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Delete the image file from the server
    const imagePath = blog.blogImage;
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await blog.deleteOne();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error });
  }
};

const toggleBlogStatus = async (req, res) => {
  try {
      const { id } = req.params; // Get blog ID from URL params

      // Find the blog by ID
      const blog = await Blog.findById(id);

      if (!blog) {
          return res.status(404).json({
              success: false,
              message: "Blog not found",
          });
      }

      // Toggle the status
      blog.status = blog.status === "active" ? "inactive" : "active";

      // Save the updated blog
      await blog.save();

      res.status(200).json({
          success: true,
          message: "Blog status updated successfully",
          data: blog,
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: "Failed to toggle Blog status",
          error: error.message,
      });
  }
};


const getBlogById = async (req, res) => {
  try {
    const { id } = req.params; // Get the blog ID from the request params

    // Find the blog by ID
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // If blog is found, return it in the response
    res.status(200).json({
      success: true,
      message: "Blog found successfully",
      data: blog,
    });
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
      error: error.message,
    });
  }
};



module.exports = { addBlog, toggleBlogStatus, editBlog, getAllBlogs, deleteBlog, getBlogById };



// ====================================


 // =================================================================================
    // // Apply multer's middleware first
    // upload.single("blogImage")(req, res, async (err) => {
    //   if (err) {
    //     return res.status(400).json({ message: "Error uploading image", error: err });
    //   }
  
    //   try {
    //     const { id } = req.params;
    //     const { blogHeading, blogContent } = req.body;
  
    //     const blog = await Blog.findById(id);
  
    //     if (!blog) {
    //       return res.status(404).json({ message: "Blog not found" });
    //     }
  
    //     // If there's a new image, replace the old one
    //     if (req.file) {
    //       // Delete the old image if it's being replaced
    //       const oldImagePath = blog.blogImage;
    //       if (fs.existsSync(oldImagePath)) {
    //         fs.unlinkSync(oldImagePath); // Delete the old image
    //       }
  
    //       blog.blogImage = req.file.path; // Update with the new image path
    //     }
  
    //     // Update the blog content
    //     blog.blogHeading = blogHeading;
    //     blog.blogContent = blogContent;
  
    //     // Save the updated blog post
    //     await blog.save();
    //     res.status(200).json({ message: "Blog updated successfully", blog });
    //   } catch (error) {
    //     res.status(500).json({ message: "Failed to update blog", error });
    //   }
    // });
