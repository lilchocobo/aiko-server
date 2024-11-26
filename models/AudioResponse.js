const mongoose = require('mongoose');

// Add this schema with your other schemas
const AudioResponseSchema = new mongoose.Schema({
  messageId: {
    type: String,
    required: false,
  },
  agentId: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('AudioResponse', AudioResponseSchema);

// // Add this where you initialize your MongoDB connection
// mongoose.connection.collection('audioresponses').dropIndex('messageId_1')
//   .catch(err => {
//     // Ignore error if index doesn't exist
//     console.log('Note: No messageId index to drop or already dropped');
//   });