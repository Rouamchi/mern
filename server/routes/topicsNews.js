const express = require('express');
const router = express.Router();
const topicsNews = require('../schemas/topicsNews.schema');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // const { member } = req.body
  // const topicsNews = await topicsNews.find({ member })
  const topicNews = await topicsNews.find()
  res.send(topicNews);
});

router.post('/', async function (req, res, next) {
  const { title, text, section, member } = req.body
  const newtopicNews = await topicsNews.create({
    title,
    text,
    section,
    member,
    createdAt: new Date(),
  })
  res.send(newtopicNews)
})

router.put('/', async function (req, res, next) {
  const { title, text, _id } = req.body
  const newtopicNews = await topicsNews.findByIdAndUpdate(_id,
    {
      title,
      text
    }, { new: true })
  res.send(newtopicNews);
})

router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newtopicNews = await topicsNews.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newtopicNews);
})

module.exports = router;