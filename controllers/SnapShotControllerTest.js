const mongoose = require("mongoose");
const CompanySnapShotTest = mongoose.model("snapshottest");

// get all
exports.getAllSnapShotsTest = async (req, res) => {
  const data = await CompanySnapShotTest
    // .find({ company: "Company Title 2" }); filters db by certin value
    .find(req.query);
  res.json(data);
};

//create info
exports.createSnapShotTest = async (req, res) => {
  console.log(req.body);
  let companySnapTest = new CompanySnapShotTest({
    company: req.body.company,
    details: req.body.details,
    employee: req.body.employee,
    date: req.body.date,
    tax: req.body.tax,
    balance: req.body.balance,
    fee: req.body.fee,
    notes: req.body.notes,
  });
  console.log("created-snapshot:", companySnapTest);
  await companySnapTest.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "snapshot" + companySnapTest + "was not created",
      });
    } else {
      res.status(200).json({
        message: "Created" + companySnapTest + "successfuly!",
        data,
      });
    }
  });
};

//get by id
exports.getSnapShotByIdTest = async (req, res) => {
  let getSnapShotID = req.params.id;
  await CompanySnapShotTest.findById({ _id: getSnapShotID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Profile" + id + "not found",
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
  let snapShotID = req.params.companyId;
  await CompanySnapShotTest.findOneAndUpdate(
    { _id: snapShotID },
    { $set: req.body },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "update" + id + "not created",
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
  await CompanySnapShotTest.findOneAndUpdate(
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
exports.deleteSnapShotTest = async (req, res) => {
  let infoID = req.params.id;
  await CompanySnapShotTest.deleteOne({ _id: infoID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "snapshot" + id + "deleted!",
      });
    } else {
      res.status(200).json({
        message: "This post has successfully been removed.",
        data,
      });
    }
  });
};
