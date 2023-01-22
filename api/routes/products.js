const Product = require("../models/Product.js");
const express = require("express");

const router = express.Router();
//! Get All Product
router.get("/get-all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
  }
});
//! Add Product
router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    res.status(200).json("Item added successfully");
  } catch (err) {
    res.status(400).json(err);
  }
});
//! Update Product
router.put("/update-product", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
    res.status(200).json("Item updated successfully");
  } catch (err) {
    console.log(err);
  }
});
//! Delete Product
router.delete("/delete-product", async (req, res) => {
  try {
    await Product.findByIdAndDelete({ _id: req.body.productId });
    res.status(200).json("Item deleted successfully");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
