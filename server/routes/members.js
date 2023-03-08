const express = require('express');
const router = express.Router();
const Members = require('../schemas/members.schema')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const members = await Members.find()
  res.send(members);
});

///////////////////////////////////////////////////////////
router.post('/', async function (req, res, next) {
  const { username, fullname, password, email, gender, birthdate } = req.body
  // Check if the user already exist:
  // Check the Username
  let error = false
  const memberUsername = await Members.findOne({
    username
  })
  if (memberUsername) {
    error = true
    res.send({ msg: 'Username is already registred', ok: false })
  }
  // Check the Password
  const memberPassword = await Members.findOne({
    password
  })
  if (memberPassword) {
    error = true
    res.send({ msg: 'The password is already registred', ok: false })
  }
  //Check the Email
  const memberEmail = await Members.findOne({
    email
  })
  if (memberEmail) {
    error = true
    res.send({ msg: 'The email is already registred', ok: false })
  }

  if (!error) {
    const newMember = await Members.create({
      username,
      fullname,
      password,
      email,
      gender,
      birthdate,
      createdAt: new Date(),
    })
    res.send({ newMember, ok: true })
  }
})

///////////////////////////////////////////////////////////
// Check member
router.post('/login', async function (req, res, next) {
  const { username, password } = req.body
  const member = await Members.findOne({
    username,
    password
  })
  if (member) {
    res.send({ state: 'Successfully logged in', ok: true, _id: member._id })

  } else {
    res.send({ state: 'Can not find this member, Please Check again', ok: false })
  }
})

router.put('/', async function (req, res, next) {
  const { username, fullname, password, email, gender, birthdate, _id } = req.body
  const newMember = await Members.findByIdAndUpdate(_id,
    {
      username,
      fullname,
      password,
      email,
      gender,
      birthdate,
    }, { new: true })
  res.send(newMember);
})

router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newMember = await Members.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newMember);
})

module.exports = router;