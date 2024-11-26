const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  agentId: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  avatar: { // Add avatar field
    type: String,
    required: true
  },
  handle: { // Add handle field
    type: String,
    required: false
  },
  readByAgent: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Comment', CommentSchema);