const express = require('express');
const router = express.Router();
const {getContacts, createContact,deleteContact,updateContact, getContactsI} = require('../controllers/contactController');

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContactsI).put(updateContact).delete(deleteContact);

module.exports = router;