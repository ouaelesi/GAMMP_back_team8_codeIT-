const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
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