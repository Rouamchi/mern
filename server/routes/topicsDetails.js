const express = require('express');
const router = express.Router();
const topicsDetails = require('../schemas/topicsDetails.schema');

router.get('/', async function (req, res, next) {
  const topicDetails = await topicsDetails.findById(req.params.id)
    .then((result) => {
      res.render("TopicsDetails", { details: result })
    })
    .catch((err) => { console.log(err) })
  res.send(topicDetails);
});

// router.get('/', async function (req, res, next) {
//   const topicDetails = await topicsDetails.findById(req.params.id)
//     .then((result) => {
//       res.render("TopicsDetails", { details: result })
//     })
//     .catch((err) => { console.log(err) })
//   res.send(topicDetails);
// });

// router.get('/', async function (req, res, next) {
//   const topicDetails = await topicsDetails.findById(req.params.id)
//     .then((result) => {
//       res.render("TopicsDetails", { details: result })
//     })
//     .catch((err) => { console.log(err) })
//   res.send(topicDetails);
// });

module.exports = router;
