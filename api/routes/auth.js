const User = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
//! Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json("A new user created succesfully.");
  } catch (err) {
    res.status(400).json(err);
  }
});
//! Login

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send({ error: "User not found!" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).send("Invalid Password!");
    } else {
      res.status(400).json(user);
    }

    res.send(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;