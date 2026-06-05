const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/test", (req, res) => {
  res.send("User Route Working");
});

// Signup
router.post("/signup", async (req, res) => {

  await User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });

  res.json({
    success: true,
    message: "Wait 24 Hours For Admin Approval"
  });

});

// Login
router.post("/login", async (req, res) => {

  const user = await User.findOne({
    email: req.body.email
  });

  if (!user) {
    return res.json({
      success: false,
      message: "User Not Found"
    });
  }

  if (!user.approved) {
    return res.json({
      success: false,
      message: "Wait For Admin Approval"
    });
  }
   user.deviceId = req.body.deviceId;

  if (user.rejected) {
    return res.json({
      success: false,
      message: "Account Rejected"
    });
  }

  if (user.validTill && user.validTill < new Date()) {
    return res.json({
      success: false,
      message: "Subscription Expired"
    });
  }

  user.lastLogin = new Date();
  await user.save();

  res.json({
    success: true,
    message: "Login Success"
  });

});

module.exports = router;