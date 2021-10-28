const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  updated: { type: Date, default: Date.now() },
  userId: { type: String, required: true },
  role: { type: Number, required: true },
}, { versionKey: false });

var User = module.exports = mongoose.model('Users', userSchema, "users");

module.exports.get = function (callback, limit) {
   User.find(callback).limit(limit); 
}