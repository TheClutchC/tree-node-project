const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FactorySchema = new Schema({
  factoryName: {
    type: String, 
    unique: true, 
    required: true
  }
}, {
  timestamps: true
});

module.exports = Factory = mongoose.model('factories', FactorySchema);