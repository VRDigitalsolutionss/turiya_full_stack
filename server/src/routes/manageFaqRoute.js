const express = require('express');
const { handleAddTestimonial, editTestimonial, deleteTestimonial, toggleTestimonialStatus, testimonials } = require('../controller/add_global_component/addTestimonial');
const { handleAddVideoTestimonial, editVideoTestimonial, toggleVideoTestimonialStatus, deleteVideoTestimonial, Videotestimonials } = require('../controller/add_global_component/addVideoTestimonial');
const { handleAddFAQ, editFAQ, toggleFAQStatus, deleteFAQ, FAQs, getFaq } = require('../controller/manage_faq/addFAQ');


const faqRoute  = express.Router();


faqRoute.post('/add_faq',handleAddFAQ);
faqRoute.put('/edit_faq/:id',editFAQ);
faqRoute.put('/toggle_faq/:id',toggleFAQStatus);
faqRoute.delete('/delete_faq/:id',deleteFAQ);
faqRoute.get('/faq',FAQs);
faqRoute.get('/get_faq/:id',getFaq)

module.exports = faqRoute