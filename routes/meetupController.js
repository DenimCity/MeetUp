const express = require('express')
const Group = require('../db/models/Group')
const MeetUp = require('../db/models/MeetUp')
const router = express.Router({mergeParams: true})

//to get all the meetup affilitate with group
router.get('/', async(request, response) => {
  try {
    const groupId = request.params.groupId
    const group = await Group.findById(groupId)
    const meetups = await group.meetup
    response.json(meetups)
  } catch (error) {}
  console.log(error)
})

router.post('/', async(request, response) => {
  try {
    const group = await Group.findById(request.params.groupId)
    const newMeetUp = request.body
    group
      .meetup
      .push(newMeetUp)
    const saved = await group.save()
    response.json('meetup saved')
  } catch (error) {

    response.json({
      error: 'could not create new meetup: title is required & must be unique, name must be 5 c' +
          'harcters long description is requried, Description must be 10 charcters long'
    })
    
  }
})

// get metup Id
router.get('/:meetUpId', async(request, response) => {
  try {
    const groupId = request.params.groupId
    const meetupId = request.params.meetUpId
    const group = await Group.findById(groupId)
    const meetup = await group
      .meetup
      .id(meetupId)
    response.json(meetup)
  } catch (error) {
    console.log(error, 'error grabbing meetupId')
  }
})

//to delete meetup
router.delete('/:meetUpId/', async(request, response) => {
  console.clear()
  try {
    const groupId = request.params.groupId
    const meetupId = request.params.meetUpId
    const group = await Group.findById(groupId)
    meetup = group
      .meetup
      .id(meetupId)

    meetup.remove()
    group.save()
    response.json('deleted meetup')
  } catch (error) {
    console.log(error, 'error deleting meetupId')
  }
})

module.exports = router