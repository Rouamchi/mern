const express = require('express');
const router = express.Router();
const TopicsSport = require('../schemas/topicsSport.schema');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // const { member } = req.body
  // const topicsSport = await TopicsSport.find({ member })
  const topicSport = await TopicsSport.find()
  res.send(topicSport);
});

router.post('/', async function (req, res, next) {
  const { title, text, section, member } = req.body
  const newTopicSport = await TopicsSport.create({
    title,
    text,
    section,
    member,
    createdAt: new Date(),
  })
  res.send(newTopicSport)
})

router.put('/', async function (req, res, next) {
  const { title, text, _id } = req.body
  const newTopicSport = await TopicsSport.findByIdAndUpdate(_id,
    {
      title,
      text
    }, { new: true })
  res.send(newTopicSport);
})


router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newTopicSport = await TopicsSport.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newTopicSport);
})

module.exports = router;