const asyncHandler = require('express-async-handler')
const Users = require('../models/userSchema')
const bcrypt = require('bcrypt');

const login = asyncHandler(async(req,res) => {
    res.status(200).json({
        message : 'Login'
    })
})


const register = asyncHandler(async(req,res) => {

    const body = req.body;

    const isUserExist = await Users.findOne({
        email : body.email
    })

    console.log(isUserExist);

    if(isUserExist) {
        res.status(400);
        throw new Error('User already exists');
    }

     // hashing password where password is passed along with salt rounds
    const hashedPassword  = await bcrypt.hash(body.password , 10)

    const newUser = await Users.create({
        ...body,
        password : hashedPassword
        })

    // const newUser = await Users.create(body)


    res.status(201).json({
        message : 'register',
        data : newUser
    })
})

module.exports = {
    login , register
}