const Category = require("../models/Category.js");
const express = require("express");

const router = express.Router();
//! Get All Category
router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
  }
});
//! Add Category
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);

    await newCategory.save();

    res.status(200).json("Item added successfully");
  } catch (err) {
    res.status(400).json(err);
  }
});
//! Update Category
router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("Item updated successfully");
  } catch (err) {
    console.log(err);
  }
});
//! Delete Category
router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findByIdAndDelete({ _id: req.body.categoryId });
    res.status(200).json("Item deleted successfully");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
