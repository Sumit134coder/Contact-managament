const mongoose = require('mongoose');

const connectDb = async() => {

    console.log()

    try {
        
        const connection = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('db connection established')

    }catch(e) {
        console.log('DB Connection Error' , e)
    }
} 


module.exports = connectDb