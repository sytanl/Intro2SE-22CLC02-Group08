const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminID: { type: mongoose.Schema.Types.ObjectId, auto: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String }
});

module.exports = mongoose.model('Admin', adminSchema);