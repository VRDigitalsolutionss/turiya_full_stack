const path = require('path');
const fs = require('fs');
const multer = require('multer');
const Blog = require('../../model/Blog'); // Adjust the path if necessary

// Ensure the uploads/blog directory exists
const uploadDir = path.join(__dirname, '../../../uploads/images/blogs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Edit Blog Function
const editBlog = async (req, res) => {
  console.log("edit blog request", req.body);
  try {
    // Get the blog ID from the request parameters
    const { id } = req.params;

    // Search for the existing blog entry
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    // Configure Multer for File Upload
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    });

    const upload = multer({ storage }).single('blogImage'); // 'blogImage' is the field name in the form

    // Handle the file upload
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'File upload failed',
          error: err.message,
        });
      }

      // If a new file is uploaded, construct the new file URL
      let fileUrl = blog.blogImage; // Use the existing file URL if no new image is uploaded
      if (req.file) {
        // If a new file is uploaded, delete the old file if it exists
        if (blog.blogImage) {
          const oldFilePath = path.join(__dirname, '../../../uploads/images/blogs', blog.blogImage.split('/').pop());
          if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath); // Delete the old file
          }
        }

        // Sanitize filename and construct the new file URL
        const sanitizedFilename = req.file.filename.replace(/\s+/g, '');
        fileUrl = sanitizedFilename;
      }

      // Extract the blog heading and content from the request body
      const { blogHeading, blogContent } = req.body;

      // Validate the heading and content fields
      if (!blogHeading || !blogContent) {
        return res.status(400).json({
          success: false,
          message: 'Blog heading and content are required',
        });
      }

      // Update the blog entry with the new heading, content, and image URL
      blog.blogHeading = blogHeading;
      blog.blogContent = blogContent;
      blog.blogImage = fileUrl;

      // Save the updated blog entry to the database
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

// Export the function
module.exports = {
  editBlog,
};
