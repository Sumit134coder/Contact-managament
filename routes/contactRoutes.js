const express = require('express');
const router = express.Router();
const {  getContacts , getContact , updateContact , deleteContact , addContact } = require('../Controllers/contactController')

// routes declations
router.route('/').get(getContacts).post(addContact)

// binding similar routes with same endpoints with diff methods
router.route('/:id').get(getContact).patch(updateContact).delete(deleteContact)





module.exports = router;
