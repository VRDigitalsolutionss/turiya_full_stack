const express = require('express');
const {addBlog, getAllBlogs, deleteBlog, getBlogById, toggleBlogStatus,editBlog, getBlogBySlug} = require('../controller/add_global_component/addBlog2');
// const { editBlog } = require('../controller/add_global_component/editBlog');
// const { toggleBlogStatus, deleteBlog, blogs, handleAddBlog, editBlog, blog } = require('../controller/add_global_component/addBlog');



const blogRoute = express.Router();

// blogRoute.post('/add_blog',handleAddBlog);
// blogRoute.put('/edit_blog/:id',editBlog);
// blogRoute.put('/toggle_blog/:id',toggleBlogStatus);
// blogRoute.delete('/delete_blog/:id',deleteBlog);
// blogRoute.get('/blog/:id',blog);
// blogRoute.get('/blogs',blogs);

// =======================================================================






blogRoute.post('/add_blog',addBlog);
blogRoute.put('/edit_blog/:id',editBlog);
blogRoute.put('/toggle_blog/:id',toggleBlogStatus);
blogRoute.delete('/delete_blog/:id',deleteBlog);
blogRoute.get('/blog/:id',getBlogById);
blogRoute.get('/blog/slug/:slug',getBlogBySlug);
blogRoute.get('/blogs',getAllBlogs);


module.exports = blogRoute
