const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String, 
    unique: true, 
    required: true, 
    maxLength: 16,
    minLength: 8,
    admin: Boolean
  },
  password: {
    type: String,
    required: true
  } 
}, {
  timestamps: true
});

module.exports = User = mongoose.model('users', UserSchema);