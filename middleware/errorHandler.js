const statusCode = require('../constants')

const errorHandler = (err, req,res , next) => {

    console.log('err' , err)

    const status = res.statusCode || 500;
    const description = err.message || 'Something went wrong'

    // using swithc to handle error
    switch(status) {
        case 400: res.status(status).json({
            message: statusCode[status],
            description,
        })
        break;

        case 404: res.status(status).json({
            message: statusCode[status],
            description,

        })
        break;

        case 403: res.status(status).json({
            message: statusCode[status],
            description,

        })
        break;


        default: res.status(500).json({
            message: statusCode[500],
            description,

        })
        break;
    }

    res.status(status).json({
        message: err?.message
    })
}

module.exports = errorHandler