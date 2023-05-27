const asyncHandler = require('express-async-handler')
const Users = require('../models/userSchema')

const login = asyncHandler(async(req,res) => {
    res.status(200).json({
        message : 'Login'
    })
})


const register = asyncHandler(async(req,res) => {

    const body = req.body;

    const newUser = await Users.create(body)


    res.status(200).json({
        message : 'register',
        data : newUser
    })
})

module.exports = {
    login , register
}