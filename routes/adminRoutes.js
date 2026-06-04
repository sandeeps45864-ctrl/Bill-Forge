const express = require("express");
const router = express.Router();

const User = require("../models/User");

// All Users
router.get("/users", async (req, res) => {

  const users = await User.find().sort({
    signupDate: -1
  });

  res.json({
    success: true,
    users
  });

});

// Reject User
router.put("/reject/:id", async (req, res) => {

  await User.findByIdAndUpdate(
    req.params.id,
    {
      rejected: true,
      approved: false
    }
  );

  res.json({
    success: true
  });

});

// 30 Days
router.put("/activate30/:id", async (req, res) => {

  const validTill = new Date();

  validTill.setDate(validTill.getDate() + 30);

  await User.findByIdAndUpdate(
    req.params.id,
    {
      approved: true,
      rejected: false,
      validTill
    }
  );

  res.json({
    success: true,
    message: "30 Days Activated"
  });

});

// 90 Days
router.put("/activate90/:id", async (req, res) => {

  const validTill = new Date();

  validTill.setDate(validTill.getDate() + 90);

  await User.findByIdAndUpdate(
    req.params.id,
    {
      approved: true,
      rejected: false,
      validTill
    }
  );

  res.json({
    success: true,
    message: "90 Days Activated"
  });

});

// 365 Days
router.put("/activate365/:id", async (req, res) => {

  const validTill = new Date();

  validTill.setDate(validTill.getDate() + 365);

  await User.findByIdAndUpdate(
    req.params.id,
    {
      approved: true,
      rejected: false,
      validTill
    }
  );

  res.json({
    success: true,
    message: "365 Days Activated"
  });

});

module.exports = router;