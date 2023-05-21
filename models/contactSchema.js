const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    phone : {
        type: 'string',
        required: true,
    },
    email : {
        type: 'string',
        required: true,
    },
    name : {
        firstName : {
            type: 'string',
            required: true,
        },
        lastName : {
            type: 'string',
            required: true,
        }
    }
} , {
    timestamps : true,})


module.exports = mongoose.model('Contact' , contactSchema)