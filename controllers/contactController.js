const asyncHandler = require("express-async-handler");

//@desc get all contacts
//@route GET /api/contacts
//@access Public

// to resolve promise use async
// async handler handles try catch so we dont have to use try catch

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Contact list" });
});

const getContactsI = asyncHandler(async (req, res) => {
  res.json({ message: `Get Contact list for ${req.params.id}` });
});

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ message: "Please provide name and email" });
  }
  res.status(200).json({ message: "Create Contact list" });
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
