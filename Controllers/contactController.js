const { response } = require('express')
const contactSchema  = require('../models/contactSchema')
const asyncHandler = require('express-async-handler')

const getContacts = asyncHandler(async(req , res) => {

    const contacts = await contactSchema.find()

    res.status(200).json({
        message: 'Success',
        data: contacts
    })
})

const getContact = asyncHandler(async(req , res) => {

    const { id } = req.params;
    const contact = await contactSchema.findById(id)
    console.log('conatct' , contact);

    if(!contact){
        res.status(404);
    }

    res.status(200).json({
        data: contact
    })
})


// add a new contact
const addContact = asyncHandler(async(req , res) => {

    const { phone , email , name } = req.body

    if(!phone || !email || !name) {
        res.status(400);
        throw new Error('All Fields required')
    }

    const isExist = await contactSchema.findOne({
        phone
    })

    console.log(isExist)

    if(isExist) {
        res.status(403);
        throw new Error('Contact already exists')
    }

    const newContact = await contactSchema.create({
        name, phone , email 
    })


  res.status(201).json({
    message: 'Contact added',
    data : newContact
  })
})

const updateContact = asyncHandler(async(req,res) => {


    const { id } = req.params;

    //extract body 
    const body = req.body

    const contact = await contactSchema.findByIdAndUpdate(id , {
        ...body
    })


    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }

    const updatedContact = await contactSchema.findById(id)


    res.status(201).json({
        message: 'Contact updated',
        data: updatedContact
    })


})

//delete contact
const deleteContact = asyncHandler(async(req,res)=>{

    const  { id } = req.params

    const deletedContact = await contactSchema.findByIdAndDelete(id);

    if(!deletedContact){
        res.status(404);
        throw new Error('No Contact found');
    }

    res.status(200).json({
        message: 'Contact deleted',
    })
})

module.exports = {
    getContacts , getContact , addContact , updateContact , deleteContact
}