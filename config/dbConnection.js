const mongoose = require('mongoose');

const connectDb = async() => {

    try {
        
        const connection = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('db connection establishes' , connection.connections[0].name)

    }catch(e) {
        console.log('DB Connection Error' , e)
    }
} 


module.exports = connectDb