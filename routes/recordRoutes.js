const express = require('express');
const router = express.Router();

router.route('/').get((req , res) => {
    let dataToSend = {
        data : [
            {
                _id : 234234,
                name: 'Sumit Mehra'
            }
        ]
    }

    res.json(dataToSend)
})

module.exports = router