const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')
const TopicsNewsSchema = new mongoose.Schema({
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

TopicsNewsSchema.pre('find', findVisible(population));
TopicsNewsSchema.pre('findOne', findVisible(population));
TopicsNewsSchema.pre('findOneAndUpdate', findVisible());
TopicsNewsSchema.pre('count', findVisible());
TopicsNewsSchema.pre('countDocuments', findVisible());


TopicsNewsSchema.plugin(deepPopulate, {})

const TopicsNews = mongoose.model('TopicsNews', TopicsNewsSchema, 'TopicsNews')

module.exports = TopicsNews