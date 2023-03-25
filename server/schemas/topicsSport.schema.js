const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')
const TopicsSportSchema = new mongoose.Schema({
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

TopicsSportSchema.pre('find', findVisible(population));
TopicsSportSchema.pre('findOne', findVisible(population));
TopicsSportSchema.pre('findOneAndUpdate', findVisible());
TopicsSportSchema.pre('count', findVisible());
TopicsSportSchema.pre('countDocuments', findVisible());


TopicsSportSchema.plugin(deepPopulate, {})

const TopicsSport = mongoose.model('TopicsSport', TopicsSportSchema, 'TopicsSport')

module.exports = TopicsSport