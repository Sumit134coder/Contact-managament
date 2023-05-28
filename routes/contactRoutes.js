const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const { getContacts , addContact , getContact , updateContact , deleteContact } = require('../Controllers/contactController')


// routes declations

// added verifyToken middleware to post , patch , delete requests
router.route('/').get(getContacts).post(verifyToken ,addContact)

router.route('/:id').get(getContact).patch(verifyToken ,updateContact).delete(verifyToken,deleteContact)




module.exports = router;
