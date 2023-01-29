const Mongoose = require("mongoose");
const rankSchema = new Mongoose.Schema({
  general_point: {
    type: Number,
    required: true,
  },
  manager_point: {
    type: Number,
    required: true,
  },
  date_change: {
    type: Date,
    required: true,
  },
  value_point: {
    type: Number,
    required: true,
  },
  why: {
    type: String,
    required: true,
  },
  time_stamp: {
    type: Date,
    required: true,
  },
});

const Rank = Mongoose.model("Rank", rankSchema);

module.exports = Rank;