const mongoose = require("mongoose");
const CompanyShapShot = mongoose.model("snapshot");

// get all
exports.getAllSnapShots = async (req, res) => {
  const data = await CompanyShapShot
    // .find({ company: "Company Title 2" }); filters db by certin value
    .find(req.query);
  res.json(data);
};

//create info
exports.createSnapShot = async (req, res) => {
  console.log(req.body);
  let companySnapShot = new CompanyShapShot({
    company: req.body.company,
    // details: req.body.details,
    // name: req.body.name,
    employee: req.body.employee,
    date: req.body.date,
    tax: req.body.tax,
    balance: req.body.balance,
    fee: req.body.fee,
    notes: req.body.notes
  });
  console.log("created-snapshot:", companySnapShot);
  await companySnapShot.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "snapshot" + companySnapShot + "was not created",
      });
    } else {
      res.status(200).json({
        message: "Created" + companySnapShot + "successfuly!",
        data,
      });
    }
  });
};

//get by id
exports.getSnapShotById = async (req, res) => {
  let getSnapShotID = req.params.id;
  await CompanyShapShot.findById({ _id: getSnapShotID }, (err, data) => {
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

//update
exports.updateSnapShot = async (req, res) => {
  // let snapShotID = req.params.id;
  let snapShotID = req.params.id;
  await CompanyShapShot.findByIdAndUpdate(
    { _id: snapShotID },
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
exports.deleteSnapShot = async (req, res) => {
  let infoID = req.params.id;
  await CompanyShapShot.deleteOne({ _id: infoID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "snapshot" + id + "NOT-deleted!",
      });
    } else {
      res.status(200).json({
        message: "This post has successfully been removed.",
        data,
      });
    }
  });
};
