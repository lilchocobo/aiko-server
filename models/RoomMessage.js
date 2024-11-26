const mongoose = require('mongoose');

const RoomMessageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  roomId: {
    type: String,
    required: true,
    index: true
  },
  agentId: {
    type: String,
    required: true
  },
  agentName: {
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
  readByAgent: {
    type: Boolean,
    default: false
  }
});

// Create compound index for efficient querying
RoomMessageSchema.index({ roomId: 1, createdAt: -1 });

module.exports = mongoose.model('RoomMessage', RoomMessageSchema); 