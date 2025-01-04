const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Manager', 'Staff'], required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);