const express = require('express')
const MeetUp = require('../db/models/MeetUp')
const router = express.Router()



router.get('/', async (request,response)=> {
  try {
    const meetups = await MeetUp.find({})
    response.json({meetups: meetups })
  } catch (error) {
    console.log('error getting meetups ',error)
  }
})

router.post('/', async (request,response)=>{
  try {
    const newMeetUp = await MeetUp.create(request.body)
    response.json({MeetUpCreated: newMeetUp})
  } catch (error) {
    response.json('couldnt post route', error)
  }
} )


//to get one specific meetup
router.get('/:id', async (request, response) => {
  const meetupId = request.params.id
  try {
    const meetup = await MeetUp.findById(meetupId)
    response.json(meetup)
  } catch (error) {
    console.log(`to get one pecific meetup route error ${error}`);
  }
})

router.delete('/:id/delete', async (request, response) =>{
  const meetupId = request.params.id
  try {
    const meetup = await MeetUp.findByIdAndRemove(meetupId)
    response.json('meetup deleted')
  } catch (error) {
    console.log('couldnt delete', error)
  }
}) 

module.exports = router