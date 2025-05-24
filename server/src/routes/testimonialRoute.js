const express = require('express');
const { handleAddTestimonial, deleteTestimonial, toggleTestimonialStatus, testimonials, testimonial } = require('../controller/add_global_component/addTestimonial');
const handleEditTestimonial = require('../controller/add_global_component/editTestimonial');


const testimonialRoute = express.Router();


testimonialRoute.post('/add_testimonial',handleAddTestimonial);
testimonialRoute.put('/edit_testimonial/:id',handleEditTestimonial);
testimonialRoute.put('/toggle_testimonial/:id',toggleTestimonialStatus);
testimonialRoute.delete('/delete_testimonial/:id',deleteTestimonial);
testimonialRoute.get('/testimonials',testimonials);
testimonialRoute.get('/testimonial/:id',testimonial);


module.exports = testimonialRoute
