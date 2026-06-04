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

// Approve User With Validity
router.put("/approve/:id", async (req, res) => {

  const days = req.body.days || 30;

  const validTill = new Date();

  validTill.setDate(
    validTill.getDate() + days
  );

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
    message: `User Approved For ${days} Days`
  });

});

module.exports = router;