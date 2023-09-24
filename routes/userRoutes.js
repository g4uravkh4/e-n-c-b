const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ msg: "Register User" });
});

router.post("/login", (req, res) => {
  res.json({ msg: "Login User" });
});

router.post("/", (req, res) => {
  res.json({ msg: "Current User Info" });
});

module.exports = router;
