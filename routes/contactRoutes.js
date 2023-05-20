const express = require('express');
const router = express.Router();

// routes declations
router.route('/').get((req , res) => {
    console.log('get request');
    res.json({ message : 'hello form get' })
}).post((req , res) => {
    console.log('Post request');
    res.json({ message : 'hello form POST' })
})

// binding similar routes with same endpoints with diff methods
router.route('/:id').get((req , res) => {
    console.log('get request');
    res.json({ message : `hello form get ${req.params.id}` })
}).patch((req , res) => {
    console.log('patch request');
    res.json({ message : `hello form patch ${req.params.id}` })
}).delete((req , res) => {
    console.log('delete request');
    res.json({ message : `hello form delete ${req.params.id}` })
})





module.exports = router;
