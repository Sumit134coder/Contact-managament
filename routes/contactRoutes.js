const express = require('express');
const router = express.Router();
const { getContacts , addContact , getContact , updateContact , deleteContact } = require('../Controllers/contactController')


// routes declations
router.route('/').get(getContacts).post(addContact)

router.route('/:id').get(getContact).patch(updateContact).delete(deleteContact)




module.exports = router;
