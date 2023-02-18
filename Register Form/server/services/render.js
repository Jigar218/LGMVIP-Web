var student = require("../model/model");

exports.home = (req, res) => {
  student
  .find()
  .then((students) => {
    res.render("index", { student: students });
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "some error occured when retreiving drug data",
    });
  });
};