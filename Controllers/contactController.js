const expressAsyncHandler = require("express-async-handler");

// @description
// api/v1/contacts Method : GET
const getContacts = expressAsyncHandler(async(req , res) => {
    console.log('get request');
    res.json({ message : 'hello form get' })
})


// @description
// api/v1/contacts Method : GET
const getContact = expressAsyncHandler(async(req , res) => {
    console.log('get request');
    let isFound = true;
    if(!isFound){
        res.status(400);
        throw new Error('No contact found!')
    }
    res.json({ message : `Contact get with id ${req.params.id}` })
})

// @description
// api/v1/contacts Method : GET
const addContact = expressAsyncHandler(async(req , res) => {
    console.log('POST request' ,req.body );
    const { name , contact , email } = req.body;

    if(!name || !contact || !email){
        res.status(400);
        throw new Error('Fields needed')
    }
    res.status(201).json({ message : `Contact added` , data: req.body })
})


// @description
// api/v1/contacts/:id Method : PATCH
const updateContact = expressAsyncHandler(async(req , res) => {
    console.log('patch request');
    res.json({ message : `Contact updated with id ${req.params.id}` })
})

// @description
// api/v1/contacts/:id Method : DELETE
const deleteContact = expressAsyncHandler(async(req , res) => {
    console.log('delete request');
    res.json({ message : `Contact deleted with id ${req.params.id}` })
})


module.exports = {
    getContacts , getContact , updateContact , deleteContact , addContact
}