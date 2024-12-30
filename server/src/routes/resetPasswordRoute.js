
const express = require('express');

const { resetPasswordController } = require("../controller/resetPasswordController");
const resetPasswordRoute  = express.Router();
// faqLatestRoute.post('/add_faq_category_latest',addFAQCategoryLatest);
// faqLatestRoute.post('/add_faq_latest/:FAQCategoryLatestId', addFAQLatest);


// faqLatestRoute.put('/edit_faq_category/:id',editAddCategory);
// faqLatestRoute.put('/toggle_faq_category/:id',toggleFAQCategoryStatus);
// faqLatestRoute.delete('/delete_faq_category/:id',deleteFAQCategory);
// faqLatestRoute.get('/faq_category',FAQCategorys);
// faqLatestRoute.get('/faq_category/:id',getFAQCategory);

resetPasswordRoute.post('/reset-password',resetPasswordController);




module.exports = resetPasswordRoute;



;