const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  user: {
    type: String,
    required: false
  },
  agentId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  handle: String,
  pfp: String
});

LikeSchema.index({ user: 1, agentId: 1 }, {
  unique: true,
  partialFilterExpression: { user: { $exists: true } }
});

module.exports = mongoose.model('Like', LikeSchema);
