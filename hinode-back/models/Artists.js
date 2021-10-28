const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  socialId: { type: String, required: true },
  releaseId: { type: Number, required: true },
}, { versionKey: false });

module.exports = mongoose.model('Artists', artistSchema, "artist");