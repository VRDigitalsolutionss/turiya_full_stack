const express = require('express');
const { handleAddFAQ, editFAQ } = require('../controller/manage_faq/addFAQ');
const { toggleFAQCategoryStatus, deleteFAQCategory, FAQCategorys, AddFaqCategory, editAddCategory,getFAQCategory } = require('../controller/manage_faq/addFAQCategories');


const faqCategoryRoute  = express.Router();


faqCategoryRoute.post('/add_faq_category',AddFaqCategory);
faqCategoryRoute.put('/edit_faq_category/:id',editAddCategory);
faqCategoryRoute.put('/toggle_faq_category/:id',toggleFAQCategoryStatus);
faqCategoryRoute.delete('/delete_faq_category/:id',deleteFAQCategory);
faqCategoryRoute.get('/faq_category',FAQCategorys);
faqCategoryRoute.get('/faq_category/:id',getFAQCategory);




module.exports = faqCategoryRoute