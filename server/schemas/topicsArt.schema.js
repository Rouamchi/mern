const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')
const TopicsArtSchema = new mongoose.Schema({
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

TopicsArtSchema.pre('find', findVisible(population));
TopicsArtSchema.pre('findOne', findVisible(population));
TopicsArtSchema.pre('findOneAndUpdate', findVisible());
TopicsArtSchema.pre('count', findVisible());
TopicsArtSchema.pre('countDocuments', findVisible());


TopicsArtSchema.plugin(deepPopulate, {})

const TopicsArt = mongoose.model('TopicsArt', TopicsArtSchema, 'TopicsArt')

module.exports = TopicsArt