const mongoose = require("mongoose");

const rankSchema = new mongoose.Schema({
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
  }
}, {timestamps: true});

const Rank = mongoose.model("Rank", rankSchema);

module.exports = Rank;