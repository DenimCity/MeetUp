const express = require('express')
const MeetUp = require('../db/models/MeetUp')
const router = express.Router()



router.get('/', async (request,response)=> {
  try {
    const meetups = await MeetUp.find({})
    console.log('all created meetups ',meetups)
    response.json({meetups: meetups })
  } catch (error) {
    console.log('error getting meetups ',error)
  }
})

router.post('/', async (request,response)=>{
  try {
    const newMeetUp = await MeetUp.create(request.body)
    console.log('new meetup data', newMeetUp);
    response.json({MeetUpCreated: newMeetUp})
    
  } catch (error) {
    response.json('couldnt post route', error)
  }
} )

module.exports = router