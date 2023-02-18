const student = require("../model/model");
exports.submit = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can't be empty" });
    return;
  }
  //new student
  const students = new student({
    name: req.body.name,
    email: req.body.email,
    website:req.body.website,
    gender:req.body.gender,
    skills:req.body.skills,
  });
  //save student in db
  students
    .save(students)
    .then(
      setTimeout(() => {
        
        res.redirect("/")
      }, 4000)
    )
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured",
      });
    });
 
};