const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    name: {
        firstName: {
            type : 'string',
            required: true,
        },
        lastName: {
            type : 'string',
            required: true,
        },
    },
    dob: {
        type: 'string',
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
} , 
{
    timestamps : true,
})


module.exports = mongoose.model('Users' , userSchema)