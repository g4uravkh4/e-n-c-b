const asyncHandler = require("express-async-handler");

//@desc register a user
//@route GET /api/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ msg: "Register User" });
});

module.exports = { registerUser };

// login user
const loginUser = asyncHandler(async (req, res) => {
  res.json({ msg: "Login User" });
});

module.exports = { registerUser, loginUser };

// current user
const currentUser = asyncHandler(async (req, res) => {
  res.json({ msg: "Current User Info" });
});

module.exports = { registerUser, loginUser, currentUser };
