const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  updated: { type: Date, default: Date.now() },
  userId: { type: String, required: true },
  role: { type: Number, required: true },
}, { versionKey: false });

module.exports = mongoose.model('Users', userSchema, "simple");