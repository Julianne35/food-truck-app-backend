// IN USE
// TEST COMMENT 
const mongoose = require("mongoose");
const CompanyDetails = mongoose.model("snapshottest");

// get all
exports.getAllCompanyDetails = async (req, res) => {
  const data = await CompanyDetails
    // .find({ company: "Company Title 2" }); filters db by certin value
    .find(req.query);
  res.json(data);
};

//create info
exports.createCompanyDetails = async (req, res) => {
  console.log(req.body);
  let CompanyDt = new CompanyDetails({
    company: req.body.company,
    address: req.body.address,
    phone: req.body.phone,
    details: req.body.details,
    employee: req.body.employee,
    date: req.body.date,
    tax: req.body.tax,
    balance: req.body.balance,
    fee: req.body.fee,
    notes: req.body.notes,
  });
  console.log("created-snapshot:", CompanyDt);
  await CompanyDt.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "snapshot" + CompanyDt + "was not created",
      });
    } else {
      res.status(200).json({
        message: "Created" + CompanyDt + "successfuly!",
        data,
      });
    }
  });
};

//get by id
exports.getCompanyDetailsById = async (req, res) => {
  let getSnapShotID = req.params.companyId;
  await CompanyDetails.findById({ _id: getSnapShotID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Profile not found",
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

//update company name
exports.updateCompany = async (req, res) => {
  await CompanyDetails.findOneAndUpdate(
    { _id: req.params.companyId,},
    { $set: req.body },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "update" + companyId + "not created",
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

//update employee
exports.updateEmployee = async (req, res) => {
  await CompanyDetails.findOneAndUpdate(
    {
      _id: req.params.companyId,
      details: { $elemMatch: { _id: req.params.employeeId } },
    }, // FILTER
    {
      $set: {
        "details.$.balance": req.body.balance, // UPDATE
        "details.$.date": req.body.date, // UPDATE
        "details.$.notes": req.body.notes, // UPDATE
      },
    },
    { new: true, safe: true, upsert: true },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "update not created",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Post Updated",
        });
      }
    }
  );
};


//function to delete info
exports.deleteCompanyDt = async (req, res) => {
  let infoID = req.params.companyId;
  await CompanyDetails.deleteOne({ _id: infoID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "snapshot" + companyId + "deleted!",
      });
    } else {
      res.status(200).json({
        message: "This post has successfully been removed.",
        data,
      });
    }
  });
};
