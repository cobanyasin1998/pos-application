const Bill = require("../models/Bill.js");
const express = require("express");

const router = express.Router();
//! Get All Bill
router.get("/get-all", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (err) {
    console.log(err);
  }
});
//! Add Bill
router.post("/add-bills", async (req, res) => {
  try {
    const newBill = new Bill(req.body);

    await newBill.save();

    res.status(200).json("Item added successfully");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
