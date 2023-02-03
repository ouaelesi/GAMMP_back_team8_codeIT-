const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["event", "project", "internal_activity", "community"],
    default: "event",
  },
  description: {
    type: String,
    required: true,
  },
  mainManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  managers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  teamLeaders: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }],
  organizers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
}, {timestamps: true});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;