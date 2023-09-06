const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get all contacts
//@route GET /api/contacts
//@access Public

// to resolve promise use async
// async handler handles try catch so we dont have to use try catch

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
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
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Contact list" });
});

module.exports = {
  getContacts,
  getContactsI,
  createContact,
  deleteContact,
  updateContact,
};
