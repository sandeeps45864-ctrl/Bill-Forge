const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/users", async (req, res) => {

  const users = await User.find().sort({
    signupDate: -1
  });

  res.json({
    success: true,
    users
  });

});

module.exports = router;