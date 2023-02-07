const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["warning, promotion, demotion, activity, points"]
  },
  body: {
    type: String,
    required: true,
  },
  from: {
    type: String, //admin, system
    required: true,
  },
  isRead: {
    type: Boolean,
    required: true,
  },
  //read time <==> updatedAt

}, {timestamps: true}); //the timestamps option will automatically add "created at" and "updated at" for the object

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;