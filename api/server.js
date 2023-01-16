const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const PORT = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

  } catch (err) {
    throw err;
  }
};

app.get("/", (req, res) => res.send("API me hoşgeldiniz"));

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);

connect();

});
