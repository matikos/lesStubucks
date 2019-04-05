const mongoose = require('mongoose');
const shortid = require('shortid');

const genOrder = new mongoose.Schema({
  _id: {type: String, default: shortid.generate},
  name: {type: String, required:true},
  drink: {type: String, required: true},
  extras: {type: Array, required:false},
  size: {type: String, required: true},
  amount: {type: Number, required:true}
})


module.exports = mongoose.model('Order', genOrder);