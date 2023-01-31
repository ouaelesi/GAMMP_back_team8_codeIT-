const mongoose = require("mongoose");

const rankSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  generalPoints: {
    type: Number,
    required: true,
  },
  totalAddedPoints: {
    type: Number,
    required: true,
  },
  history: [{
    addedPoints: {
      type: Number
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    reason: {
      type: String
    }
  }]
}, {timestamps: true});

const Rank = mongoose.model("Rank", rankSchema);

module.exports = Rank;