const express = require('express');
const router = express.Router();
const topicsArt = require('../schemas/topicsArt.schema');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // const { member } = req.body
  // const topicsArt = await topicsArt.find({ member })
  const topicArt = await topicsArt.find()
  res.send(topicArt);
});

router.post('/', async function (req, res, next) {
  const { title, text, section, member } = req.body
  const newtopicArt = await topicsArt.create({
    title,
    text,
    section,
    member,
    createdAt: new Date(),
  })
  res.send(newtopicArt)
})

router.put('/', async function (req, res, next) {
  const { title, text, _id } = req.body
  const newtopicArt = await topicsArt.findByIdAndUpdate(_id,
    {
      title,
      text
    }, { new: true })
  res.send(newtopicArt);
})

router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newtopicArt = await topicsArt.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newtopicArt);
})

module.exports = router;