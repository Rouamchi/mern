const express = require('express');
const router = express.Router();
const topicsSport = require('../schemas/topicsSport.schema');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // const { member } = req.body
  // const topicsSport = await TopicsSport.find({ member })
  const topicSport = await topicsSport.find()
  res.send(topicSport);
});

router.post('/', async function (req, res, next) {
  const { title, text, section, member } = req.body
  const newtopicSport = await topicsSport.create({
    title,
    text,
    section,
    member,
    createdAt: new Date(),
  })
  res.send(newtopicSport)
})

router.put('/', async function (req, res, next) {
  const { title, text, _id } = req.body
  const newtopicSport = await topicsSport.findByIdAndUpdate(_id,
    {
      title,
      text
    }, { new: true })
  res.send(newtopicSport);
})


router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newtopicSport = await topicsSport.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newtopicSport);
})

module.exports = router;