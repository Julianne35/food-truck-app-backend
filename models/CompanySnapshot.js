const mongoose = require("mongoose");

//create schema
const CompanySnapShopSchema = new mongoose.Schema(
  {
      company: {type: String, trim: true, default: ''},
      employee: {type: String,  trim: true, default: ''},
      date: {type: String,  trim: true, default: ''},
      tax: {type: Boolean,  trim: true, default: false},
      balance: {type: Number,  trim: true, default: ''},
      fee: {type: Number,  trim: true, default: true},
      notes: {type: String,  trim: true, default: ''}
  },
  {
    collection: "snapshot",
  }
);

module.exports = mongoose.model("snapshot", CompanySnapShopSchema);


  // {
  //   company: {
  //     details: {
  //       name: { type: String, trim: true, default: "" },
  //       employee: { type: String, trim: true, default: "" },
  //       date: { type: String, trim: true, default: "" },
  //       tax: { type: String, trim: true, default: "" },
  //       balance: { type: String, trim: true, default: "" },
  //     },
  //   },
  // },


// {
//   company: String,
//   employeeInfo:
//   [
//     {
//       employee: String,
//       date: String,
//       tax: String,
//       balance: Number,
//     },
//   ],
// },
