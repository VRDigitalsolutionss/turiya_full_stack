const Blog = require("../../model/Blog");

const handleAddBlog = async (req,res) => {
    try {
        // Extract data from the request body
        const { blogHeading, blogContent} = req.body;

        // Validate required fields
        if (!blogHeading || !blogContent || !blogImage) {
            return res.status(400).json({
                success: false,
                message: "blogHeading, blogContent, and blogImage are required",
            });
        }

        // Create a new testimonial document
        const newBlog = new Blog({
            blogHeading,
            blogContent,
            blogImage,
       
        });

        // Save to the database
        await newBlog.save();

        // Send success response
        res.status(201).json({
            success: true,
            message: "Blog added successfully",
            data: newBlog,
        });
    } catch (error) {
        // Handle any errors
        res.status(500).json({
            success: false,
            message: "Failed to add blog",
            error: error.message,
        });
    }
};

const editBlog = async  (req, res) => {

const id  = req.params.id;

    try {
        // Extract data from the request body
        const { blogHeading, blogContent,blogImage } = req.body;

        // Validate required fields
        if (!blogHeading || !blogContent || !blogImage) {
            return res.status(400).json({
                success: false,
                message: "blogHeading, blogContent, and blogImage are required",
            });
        }

        if (id) {
            // If ID is provided, update the testimonial
            const updatedBlog = await Blog.findByIdAndUpdate(
                id,
                { blogHeading, blogContent, blogImage },
            );

            if (!updatedBlog) {
                return res.status(404).json({
                    success: false,
                    message: "Blog not found for update",
                });
            }

            // Send success response for update
            return res.status(200).json({
                success: true,
                message: "Blog updated successfully",
                data: updatedBlog,
            });
        } else {
            // If no ID is provided, create a new testimonial
            const newBlog = new Blog({
                blogHeading,
                blogContent,
                blogImage,
              
            });

            // Save to the database
            await newBlog.save();

            // Send success response for creation
            return res.status(201).json({
                success: true,
                message: "Blog added successfully",
                data: newBlog,
            });
        }
    } catch (error) {
        // Handle any errors
        res.status(500).json({
            success: false,
            message: "Failed to add or update testimonial",
            error: error.message,
        });
    }
};


const toggleBlogStatus = async (req, res) => {
    try {
        const { id } = req.params; // Get testimonial ID from URL params

        // Find the testimonial by ID
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        // Toggle the status
        blog.status = blog.status === "active" ? "inactive" : "active";

        // Save the updated testimonial
        await blog.save();

        res.status(200).json({
            success: true,
            message: "Blog status updated successfully",
            data: blog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to toggle Gallery status",
            error: error.message,
        });
    }
};


const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params; // Extract testimonial ID from URL params

        // Find and delete the testimonial
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            data: deletedBlog,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete testimonial",
            error: error.message,
        });
    }
};


const blogs = async (req,res) => {
    Blog.find().then((data) => {
        res.status(200).json({ success: true, data })
    }).catch((error) => {
        res.status(500).json({ success: false, error: error.message })
    })
}



const blog = async (req, res) => {
    try {
      const id = req.params.id;
  
      // Ensure the id is a valid MongoDB ObjectId
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ success: false, message: 'Invalid ID format' });
      }
  
      // Query the database by _id
      const data = await Blog.findById(id);
  
      if (!data) {
        return res.status(404).json({ success: false, message: 'Blog not found' });
      }
  
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error fetching blog:', error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  };
  

module.exports= {handleAddBlog,editBlog,toggleBlogStatus,deleteBlog,blogs,blog}