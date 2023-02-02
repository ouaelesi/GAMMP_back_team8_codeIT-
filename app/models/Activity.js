const Mongoose = require("mongoose");
const activitySchema = new Mongoose.Schema({
  type: {
    type: String,
    enum: ["event", "project", "internal_activity", "community"],
    default: "event",
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

const Activity = Mongoose.model("Activities", activitySchema);

module.exports = Activity;