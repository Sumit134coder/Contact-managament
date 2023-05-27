const express = require('express');
const router = express.Router();
const { login , register } = require('../Controllers/userController')

router.route('/login').post(login)
router.route('/register').post(register)
// router.route('/profile').get()


module.exports = router