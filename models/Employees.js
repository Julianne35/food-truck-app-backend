const mongoose = require("mongoose");

//create schema
const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String
    },
    });

module.exports = mongoose.model("employee", EmployeeSchema);