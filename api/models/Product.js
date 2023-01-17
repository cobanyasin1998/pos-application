const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    title: {
      img: String,
      require: true,
    },
    price: {
      img: Number,
      require: true,
    },
    category: {
        img: String,
        require: true,
      },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
