const mongoose = require("mongoose");

//create schema
const CompanyMainSchema = new mongoose.Schema(
  {
    company: { type: String, trim: true, default: '' },
    address: { type: String, trim: true, default: "" },
    phone: { type: String, trim: true, default: "" },
  },
  {
    collection: "company",
  }
);

module.exports = mongoose.model("company", CompanyMainSchema);
