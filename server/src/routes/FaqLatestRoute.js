const express = require('express');
const { addFAQLatest,addFAQCategoryLatest  } = require('../controller/manage_faq/FaqLatest');
const { handleAddFAQ } = require('../controller/manage_faq/addFAQ');



const faqLatestRoute  = express.Router();


// faqLatestRoute.post('/add_faq_category_latest',addFAQCategoryLatest);
// faqLatestRoute.post('/add_faq_latest/:FAQCategoryLatestId', addFAQLatest);


// faqLatestRoute.put('/edit_faq_category/:id',editAddCategory);
// faqLatestRoute.put('/toggle_faq_category/:id',toggleFAQCategoryStatus);
// faqLatestRoute.delete('/delete_faq_category/:id',deleteFAQCategory);
// faqLatestRoute.get('/faq_category',FAQCategorys);
// faqLatestRoute.get('/faq_category/:id',getFAQCategory);

faqLatestRoute.post('/handleAddFAQ',handleAddFAQ);




module.exports = faqLatestRoute;