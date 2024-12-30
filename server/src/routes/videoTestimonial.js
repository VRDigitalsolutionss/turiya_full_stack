const express = require('express');

const { handleAddVideoTestimonial, editVideoTestimonial, toggleVideoTestimonialStatus, deleteVideoTestimonial, Videotestimonials , Videotestimonial} = require('../controller/add_global_component/addVideoTestimonial');



const video_testimonialRoute  = express.Router();


video_testimonialRoute.post('/add_video_testimonial',handleAddVideoTestimonial);
video_testimonialRoute.put('/edit_video_testimonial/:id',editVideoTestimonial);
video_testimonialRoute.put('/toggle_video_testimonial/:id',toggleVideoTestimonialStatus);
video_testimonialRoute.delete('/delete_video_testimonial/:id',deleteVideoTestimonial);
video_testimonialRoute.get('/video_testimonials',Videotestimonials);
video_testimonialRoute.get('/Videotestimonial/:id',Videotestimonial);


module.exports = video_testimonialRoute