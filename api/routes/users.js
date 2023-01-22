const User = require("../models/User.js");
const express = require("express");

const router = express.Router();
//! Get All User
router.get("/get-all", async (req, res) => {
  try {
    const bills = await User.find();
    res.status(200).json(bills);
  } catch (err) {
    console.log(err);
  }
});
//! Add User
router.post("/add-bills", async (req, res) => {
  try {
    const newUser = new User(req.body);

    await newUser.save();

    res.status(200).json("Item added successfully");
  } catch (err) {
    res.status(400).json(err);
  }
});

//! Get a User
router.post("/", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
