const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  discordID: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  yearOfStudy: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  isBanned: {
    type: Boolean,
    required: true,
    default: false,
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
