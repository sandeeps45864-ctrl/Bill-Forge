router.get("/all", async (req, res) => {
  const invoices = await Invoice.find().sort({ createdAt: -1 });
  res.json(invoices);
});