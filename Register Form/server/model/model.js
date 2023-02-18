const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter your name',
    trim: true,
  },
  email: {
    type: String,
    required: 'Please enter your email',
    trim: true,
  },
  website: {
    type: String,
    required: 'Please enter your website',
    trim: true,
  },
  gender: {
    type: String,
    required: 'Please enter your gender',
    trim: true,
  },
  skills: {
    type: Array,
    required: 'Please enter your address',
    trim: true,
  },
});
const student = mongoose.model("student", schema);
module.exports = student;
