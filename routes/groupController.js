const express = require('express')
const Group = require('../db/models/Group')
const router = express.Router()

router.get('/', async(request, response) => {
  try {
    const group = await Group.find({})
    response.json(group)
  } catch (error) {
    console.log({error: " error grabbing groups "})
  }
})

router.post('/', async(request, response) => {
  try {
    const newGroup = await Group.create(request.body)
    console.log('new group data', newGroup)
    response.json(newGroup)
  } catch (error) {
    response.json({
      error: 'could not create new group: title is required & must be unique, name must be 5 c' +
          'harcters long description is requried, Description must be 10 charcters long'
    })
  }
})

// //to get one specific meetup
router.get('/:id', async(request, response) => {

  const groupId = request.params.id
  try {
    const group = await Group.findById(groupId)
    response.json(group)
  } catch (error) {
    console.log(`to get one pecific meetup route error ${error}`);
  }
})

router.delete('/:id', async(request, response) => {
  const groupId = request.params.id
  try {
    const meetup = await Group.findByIdAndRemove(groupId)
    response.json('group deleted')
  } catch (error) {
    console.log('couldnt delete', error)
  }
})

module.exports = router