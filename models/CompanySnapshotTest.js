const mongoose = require("mongoose");

//create schema
const CompanySnapShopSchema = new mongoose.Schema(
  {
    company: { type: String, trim: true, default: "" },
    details: [
      {
        employee: { type: String, trim: true, default: "" },
        date: { type: String, trim: true, default: "" },
        tax: { type: String, trim: true, default: "" },
        balance: { type: String, trim: true, default: "" },
        fee: {type: Number,  trim: true, default: true},
        notes: {type: String,  trim: true, default: ''}
      },
    ],
  },
  {
    collection: "snapshottest",
  }
);

module.exports = mongoose.model("snapshottest", CompanySnapShopSchema);
