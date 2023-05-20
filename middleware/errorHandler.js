const statusCode = require('../constants')

const errorHandler = (err, req,res , next) => {
    const status = res.statusCode || 500;

    // using swithc to handle error
    switch(status) {
        case 400: res.status(status).json({
            message: statusCode[status]
        })
        break;

        case 404: res.status(status).json({
            message: statusCode[status]
        })
        break;


        default: res.status(500).json({
            message: statusCode[500]
        })
        break;
    }

    console.log(status)
    res.status(status).json({
        message: err?.message
    })
}

module.exports = errorHandler