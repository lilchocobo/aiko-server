import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const giftTransactionSchema = new Schema({
  senderPublicKey: {
    type: String,
    required: true,
    index: true
  },
  recipientAgentId: {
    type: String,
    required: true,
    index: true
  },
  recipientWallet: {
    type: String,
    required: true
  },
  giftName: {
    type: String,
    required: true
  },
  giftCount: {
    type: Number,
    required: true,
    min: 1
  },
  coinsTotal: {
    type: Number,
    required: true,
    min: 0
  },
  txHash: {
    type: String,
    required: true,
    unique: true
  },
  readByAgent: {
    type: Boolean,
    default: false,
    index: true
  },
  handle: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    required: false
  },
  pfp: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
});

// Only create compound indexes or special indexes here
// Removed duplicate index definitions

export const GiftTransaction = model('GiftTransaction', giftTransactionSchema); 