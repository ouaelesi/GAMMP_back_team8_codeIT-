const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  from: {
    type: String, //to be checked
    required: true,
  },
  receiver: {
    type: String, // mongoose.Schema.Types.ObjectId
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    required: true,
  },
  // read_time: {
  //   type: TimeRanges,
  //   required: true,
  // },
}, {timestamps: true}); //the timestamps option will automatically add "created at" and "updated at" for the object

const Notification = mongoose.model("notifications", notificationSchema);

module.exports = Notification;