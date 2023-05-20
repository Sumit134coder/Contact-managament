// @description
// api/v1/contacts Method : GET
const getContacts = (req , res) => {
    console.log('get request');
    res.json({ message : 'hello form get' })
}


// @description
// api/v1/contacts Method : GET
const getContact = (req , res) => {
    console.log('get request');
    res.json({ message : `Contact get with id ${req.params.id}` })
}

// @description
// api/v1/contacts Method : GET
const addContact = (req , res) => {
    console.log('POST request');
    res.json({ message : `Contact added with id` })
}


// @description
// api/v1/contacts/:id Method : PATCH
const updateContact = (req , res) => {
    console.log('patch request');
    res.json({ message : `Contact updated with id ${req.params.id}` })
}

// @description
// api/v1/contacts/:id Method : DELETE
const deleteContact = (req , res) => {
    console.log('delete request');
    res.json({ message : `Contact deleted with id ${req.param.id}` })
}


module.exports = {
    getContacts , getContact , updateContact , deleteContact , addContact
}