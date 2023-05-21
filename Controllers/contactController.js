const expressAsyncHandler = require("express-async-handler");
const Contact = require('../models/contactSchema')

// @description
// api/v1/contacts Method : GET
const getContacts = expressAsyncHandler(async(req , res) => {
    const contacts = await Contact.find();
    console.log('get request');
    res.json({ data: contacts, message : 'hello form get' })
})


// @description
// api/v1/contacts Method : GET
const getContact = expressAsyncHandler(async(req , res) => {
    console.log('get request');
    const contact = await Contact.findById(req.params.id);
    if(!contact?.name){
        res.status(400);
        throw new Error('No contact found!')
    }
    res.json({ data : contact })
})

// @description
// api/v1/contacts Method : GET
const addContact = expressAsyncHandler(async(req , res) => {
    console.log('POST request' ,req.body );
    const { name , phone , email } = req.body;

    if(!name?.firstName || !name?.lastName || !phone || !email){
        res.status(400).json({description : 'Some fields are missing'});
        throw new Error('Fields needed')
    }

    const newContact = await Contact.create({
        name,
        phone,
        email
    })
    res.status(201).json({ message : `Contact added` , data : newContact })
})


// @description
// api/v1/contacts/:id Method : PATCH
const updateContact = expressAsyncHandler(async(req , res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact?.name){
        res.status(400);
        throw new Error('No contact found!')
    }

    // this will update only the fields which will be in req.body
    const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body , {new :true})
    console.log('patch request' , updateContact);
    res.json({ data: updateContact, message : `Contact updated with id ${req.params.id}` })
})

// @description
// api/v1/contacts/:id Method : DELETE
const deleteContact = expressAsyncHandler(async(req , res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact?.name){
        res.status(400);
        throw new Error('No contact found!')
    }

    const contactToDelete = await Contact.findByIdAndDelete(req.params.id)
    const updatedCollections = await Contact.find()
    console.log('delete request');
    res.json({ message : `Contact deleted with id ${req.params.id}` , data: updatedCollections })
})


module.exports = {
    getContacts , getContact , updateContact , deleteContact , addContact
}