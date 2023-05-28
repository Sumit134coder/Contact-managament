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
    },
    addedBy : {
       type: String,
       required: true,
    }
} , {
    timestamps : true,
    collection: 'contacts',
})


module.exports = mongoose.model('Contact' , contactSchema , 'contacts')