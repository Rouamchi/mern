const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const MembersSchema = new mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  email: String,
  gender: String,
  birthdate: Date,
  createdAt: Date,
  isVisible: {type: Boolean, default: true},

})

const population = []
const Members = mongoose.model('Members', MembersSchema, 'Members')

module.exports = Members