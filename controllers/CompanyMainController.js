//OLD

const mongoose = require("mongoose");
const CompanyGenInfo = mongoose.model("company");

//function baseRoute 
exports.baseRoute = async (req, res) => {
    res.send("Server Running");
  };


// function get all info
exports.getAllInfo = async (req, res) => {
    const data = await CompanyGenInfo.find(); //query the database
    res.json(data); //send var as a json
  };

  
//create info
exports.createInfo = async (req, res) => {
    console.log(req.body);
  let companyInfo = new CompanyGenInfo({
    company: req.body.company,
    address: req.body.address,
    phone: req.body.phone
  });
  console.log('created-info:', companyInfo);
    await companyInfo.save((err, data) => {
      if (err) {
        res.status(500).json({
          message: "snapshot" + companyInfo + "was not created",
        });
      } else {
        res.status(200).json({
          message: "Info Created",
          data,
        });
      }
    });
  };

  //function to specific info by id
exports.getInfoById = async (req, res) => {
    // get id from URL by using req.params
    let getInfoID = req.params.id;
    // we use mongodb's findById() functionality here
    await CompanyGenInfo.findById({ id: getInfoID }, (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Info" + id + "not found",
        });
      } else {
        console.log(data);
        res.status(200).json({
          message: "Post found",
          data,
        });
      }
    });
  };

  //function to update info
exports.updateInfo = async (req, res) => {
    let postID = req.params.id;
    await CompanyGenInfo.findByIdAndUpdate(
      { _id: postID },
      { $set: req.body },
      (err, data) => {
        if (err) {
          res.status(500).json({
            message: "update" + id + "NOT created",
          });
        } else {
          res.status(200).json({
            message: "Post Updated",
            data,
          });
        }
      }
    );
  };

  //function to delete info
exports.deleteInfo = async (req, res) => {
    let infoID = req.params.id;
    await CompanyGenInfo.deleteOne({ _id: infoID }, (err, data) => {
      if (err) {
        res.status(500).json({
          message: "info" + id + "NOT-deleted!",
        });
      } else {
        res.status(200).json({
          message: "This post has successfully been removed.",
          data,
        });
      }
    });
  };
  