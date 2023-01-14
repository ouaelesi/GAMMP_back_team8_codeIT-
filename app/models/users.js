const Mongoose = require("mongoose");
const users = new Mongoose.Schema({
  unique_id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  family_name: {
    type: String,
    required: true,
  },
  discord_id: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  year_of_study: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  id_password: {
    type: String,
    required: true,
  },
  //  role: {
  //   type: String,
  //   required: true,
});

module.exports = Mongoose.model("User", users);