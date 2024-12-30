const express = require('express');
const {  galleries, deleteGallery, toggleGalleryStatus, gallery } = require('../controller/add_global_component/addGallery');
const {  addGallery } = require('../controller/add_global_component/addGallery2');
const {editGallery} = require('../controller/add_global_component/editGallery');
const galleryRoute = express.Router();



galleryRoute.post('/add_gallery', addGallery);
// galleryRoute.post('/add_gallery',handleAddGallery);
galleryRoute.put('/edit_gallery/:id',editGallery);
// galleryRoute.put('/edit_gallery/:id',editGallery);
galleryRoute.put('/toggle_gallery/:id',toggleGalleryStatus);
galleryRoute.delete('/delete_gallery/:id',deleteGallery);
galleryRoute.get('/galleries',galleries);
galleryRoute.get('/gallery/:id',gallery);



module.exports = galleryRoute


// ========================================================================



