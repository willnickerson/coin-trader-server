const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  coinbaseId: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true
  },
  sellPoint: {
    type: Number,
    default: 1000000000000000000000000000000000000
  },
  buyPoint: {
    type: Number,
    default: 0
  },
  strategy: {
    type: String,
    default: 'flat'
  }
});

module.exports = mongoose.model('Juice', schema);