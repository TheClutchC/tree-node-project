const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String, 
    unique: true, 
    required: true, 
    maxLength: 20
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    
  }
});

module.exports = User = mongoose.model('users', UserSchema);