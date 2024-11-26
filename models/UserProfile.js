import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userProfileSchema = new Schema({
  publicKey: {
    type: String,
    required: true,
    unique: true
  },
  handle: {
    type: String,
    required: true
  },
  pfp: {
    type: String,
    required: true
  }
});

export const UserProfile = model('UserProfile', userProfileSchema); 