const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')
const TopicsDetailsSchema = new mongoose.Schema({
  title: String,
  text: String,
  section:{type:mongoose.Schema.Types.ObjectId, ref: 'Sections'},
  member:{type:mongoose.Schema.Types.ObjectId, ref: 'Members'},
  createdAt: Date,
  isVisible: {type: Boolean, default: true},

})

const population = [{
  path: 'section',
  match: {isVisible: true}
},
{
  path: 'member',
  match: {isVisible: true}
}]

TopicsDetailsSchema.pre('find', findVisible(population));
TopicsDetailsSchema.pre('findOne', findVisible(population));
TopicsDetailsSchema.pre('findOneAndUpdate', findVisible());
TopicsDetailsSchema.pre('count', findVisible());
TopicsDetailsSchema.pre('countDocuments', findVisible());


TopicsDetailsSchema.plugin(deepPopulate, {})

const TopicsDetails = mongoose.model('TopicsDetails', TopicsDetailsSchema, 'TopicsDetails')

module.exports = TopicsDetails