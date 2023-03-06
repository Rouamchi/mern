const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')
const SectionsSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdAt: Date,
  isVisible: {type: Boolean, default: true},

})

const population = []
const Sections = mongoose.model('Sections', SectionsSchema, 'Sections')

module.exports = Sections