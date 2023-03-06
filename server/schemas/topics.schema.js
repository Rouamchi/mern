const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')
const TopicsSchema = new mongoose.Schema({
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

TopicsSchema.pre('find', findVisible(population));
TopicsSchema.pre('findOne', findVisible(population));
TopicsSchema.pre('findOneAndUpdate', findVisible());
TopicsSchema.pre('count', findVisible());
TopicsSchema.pre('countDocuments', findVisible());


TopicsSchema.plugin(deepPopulate, {})

const Topics = mongoose.model('Topics', TopicsSchema, 'Topics')

module.exports = Topics