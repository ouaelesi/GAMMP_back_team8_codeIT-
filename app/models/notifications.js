const Mongoose = require("mongoose");
const notification = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: Number,
    required: true,
  },
  receiver: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  is_readed: {
    type: Boolean,
    required: true,
  },
  // read_time: {
  //   type: TimeRanges,
  //   required: true,
  // },
});
Mongoose.model("Notification", notification);
