const express = require('express');
const app = express();

const PORT = 3000;

app.get('/' , (req , res) => {
    console.log('get request');
    res.json({ message : 'hello form get' })
})

app.post('/' , (req , res) => {
    console.log('post request');
    res.json({ message : 'hello form post' })
})

app.listen(PORT , ()=>{
    console.log('App listening on port 3000')
})