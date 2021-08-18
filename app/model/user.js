'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    mobile: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    realName: { type: String, required: true },
    avatar: { type: String, default: 'https://avatars.githubusercontent.com/u/16918885?v=4' },
    extra: {
      type: mongoose.Schema.Types.Mixed,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('User', UserSchema);
};
