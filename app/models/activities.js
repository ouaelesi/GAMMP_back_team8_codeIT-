const Mongoose = require("mongoose");
const activities = new Mongoose.Schema({
  type: {
    type: String,
    enum: ["events", "project", "internal_activity", "community"],
    default: "events",
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // e/p manager: {
  //   type: String,
  //   required: true,
  // },
  managers: {
    type: String,
    required: true,
  },
  team_leaders: {
    type: String,
    required: true,
  },
  organisateurs: {
    type: String,
    required: true,
  },
  // task: {
  //   type: String,
  //   required: true,
  // },
});
Mongoose.model("Activities", activities);
