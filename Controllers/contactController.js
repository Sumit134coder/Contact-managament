const contactSchema = require("../models/contactSchema");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { decodeJWT } = require("../utils");

const getContacts = asyncHandler(async (req, res) => {
    
    console.log('queries' , req.query)
    
    // handling params in case of filters
    const contacts = await contactSchema.find(req.query);
  res.status(200).json({
    message: "Success",
    data: contacts,
  });
});

const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await contactSchema.findById(id);
  console.log("conatct", contact);

  if (!contact) {
    res.status(404);
  }

  res.status(200).json({
    data: contact,
  });
});

// add a new contact
const addContact = asyncHandler(async (req, res) => {
  //TODO: Pasrse incoming JWT token to get the user who added the contact
  const receivedToken = req.headers.authorization.replace("Bearer ", "");

  const { user } = decodeJWT(receivedToken);

  const { phone, email, name } = req.body;

  if (!phone || !email || !name) {
    res.status(400);
    throw new Error("All Fields required");
  }

  const isExist = await contactSchema.findOne({
    phone,
  });

  console.log(isExist);

  if (isExist) {
    res.status(403);
    throw new Error("Contact already exists");
  }

  const newContact = await contactSchema.create({
    name,
    phone,
    email,
    addedBy: user._id,
  });

  res.status(201).json({
    message: "Contact added",
    data: newContact,
  });
});

const updateContact = asyncHandler(async (req, res) => {
  const receivedToken = req.headers.authorization.replace("Bearer ", "");

  const { user } = decodeJWT(receivedToken);

  const { id } = req.params;

  //extract body
  const body = req.body;

  //find the contact with id and match the added by param
  const contactToUpdate = await contactSchema.findById(id);

  if (!contactToUpdate) {
    res.status(404);
    throw new Error("No contact found");
  }

  if (user._id !== contactToUpdate.addedBy) {
    res.status(401);
    throw new Error("You cannot edit this contact");
  }

  const contact = await contactSchema.findByIdAndUpdate(id, {
    ...body,
  });

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await contactSchema.findById(id);

  res.status(201).json({
    message: "Contact updated",
    data: updatedContact,
  });
});

//delete contact
const deleteContact = asyncHandler(async (req, res) => {
  const receivedToken = req.headers.authorization.replace("Bearer ", "");

  const { user } = decodeJWT(receivedToken);

  const { id } = req.params;

  //find the contact with id and match the added by param
  const contactToDelete = await contactSchema.findById(id);

  if (!contactToDelete) {
    res.status(404);
    throw new Error("No contact found");
  }

  if (user._id !== contactToDelete.addedBy) {
    res.status(401);
    throw new Error("You cannot delete this contact");
  }

  const deletedContact = await contactSchema.findByIdAndDelete(id);

  res.status(200).json({
    message: "Contact deleted",
  });
});

module.exports = {
  getContacts,
  getContact,
  addContact,
  updateContact,
  deleteContact,
};
