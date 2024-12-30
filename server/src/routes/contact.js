const express = require('express');
const { addcontact, editcontact, deleteContact, contact,getContact, getallcontact } = require('../controller/contact/contact');



const contactRoute = express.Router();


contactRoute.post('/add_contact',addcontact);
contactRoute.put('/edit_contact/:id',editcontact);
contactRoute.delete('/delete_contact/:id',deleteContact);
contactRoute.get('/contact',getallcontact);
contactRoute.get('/contact/:id',getContact);





module.exports = contactRoute
