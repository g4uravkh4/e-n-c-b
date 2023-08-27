//@desc get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req, res) => {
    res.status(200).json({message: 'Get Contact list'});
}
const getContactsI = (req, res) => {
    res.json({message: `Get Contact list for ${req.params.id}`});
}

const createContact = (req, res) => {
    console.log(req.body);
    const {name, email} = req.body;
    if(!name || !email){
        res.status(400).json({message: 'Please provide name and email'});
    }
    res.status(200).json({message: 'Create Contact list'});
}

const deleteContact = (req, res) => {
    res.status(200).json({message: 'Delete Contact list'});
}
const updateContact = (req, res) => {
    res.status(200).json({message: 'Update Contact list'});
}

module.exports = {getContacts,getContactsI, createContact, deleteContact, updateContact};