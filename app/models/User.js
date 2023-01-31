const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
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
  email: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["lead", "co-lead", "manager", "member", "alumni"],
    default: "member",
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "banned"],
    default: "pending",
  },
  department: {
    type: String,
    enum: ["none","development", "design", "multimedia", "communication", "marketing"],
    default: "none",
  },
  contributions: [{
    activityID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity"
    },
    role: {
      type: String,
      enum: ["project-manager", "manager", "team-leader", "organizer"],
      default: "organizer",
    }
  }],
  rank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rank'
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;