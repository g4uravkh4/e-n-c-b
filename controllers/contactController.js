const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get all contacts
//@route GET /api/contacts
//@access Public

// to resolve promise use async
// async handler handles try catch so we dont have to use try catch

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.findByID(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contacts);
});

const getContactsI = asyncHandler(async (req, res) => {
  res.json({ message: `Get Contact list for ${req.params.id}` });
});

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("Please provide name and email");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete Contact list" });
  const contacts = await Contact.findByID(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await contacts.remove();
  res.status(200).json({ message: "Contact removed" });
});

const updateContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findByID(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(updateContact);
});

module.exports = {
  getContacts,
  getContactsI,
  createContact,
  deleteContact,
  updateContact,
};
