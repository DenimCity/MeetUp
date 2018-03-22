const express = require('express')
const Group = require('../db/models/Group')
const router = express.Router()

//to get all the groups
router.get('/', async(request, response) => {
  try {
    const group = await Group.find({})
    response.json(group)
  } catch (error) {
    console.log({error: " error grabbing groups "})
  }
})

// to create a group
router.post('/', async(request, response) => {
  try {
    const newGroup = await Group.create(request.body)
    response.json(newGroup)
  } catch (error) {
    response.json(error)
  }
})

// to get one specific group
router.get('/:id', async(request, response) => {
  const groupId = request.params.id
  try {
    const group = await Group.findById(groupId)
    response.json(group)
  } catch (error) {
    response.json(error);
  }
})

router.put('/:id', (request, response) => {
  const groupId = request.params.id
  const updateInfo = request.body
  Group
    .findByIdAndUpdate(groupId, updateInfo)
    .then(response => response.json('updateInfo'))
    .catch((error) => response.json(error))
})

//to delete group
router.delete('/:id', async(request, response) => {
  const groupId = request.params.id
  try {
    const meetup = await Group.findByIdAndRemove(groupId)
    response.json('group deleted')
  } catch (error) {
    response.json(error)
  }
})

module.exports = router