const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
{
  brandName: String,
  businessGst: String,
  invoiceNo: String,
  clientName: String,
  total: Number
},
{
  timestamps: true
}
);

module.exports = mongoose.model("Invoice", invoiceSchema);