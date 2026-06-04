const express = require("express");
const router = express.Router();
const Invoice = require("../models/Invoice");

router.post("/save", async (req, res) => {
  const invoice = await Invoice.create(req.body);

  res.json({
    success: true,
    invoice
  });
});

router.get("/all", async (req, res) => {
  const invoices = await Invoice.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    invoices
  });
});

module.exports = router;