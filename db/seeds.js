require('dotenv').config()
const Group = require('./models/Group')
const MeetUp = require('./models/MeetUp')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose
  .connection
  .once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
  })
mongoose
  .connection
  .on('error', (error) => {
    console.error(`
      MongoDB connection error!!!
      ${error}
    `)
    process.exit(-1)
  })

const Technology = new Group({name: "Technology", description: "Everything Tech", category: "Tech"})

const meetup1 = new MeetUp({title: " React ", description: "React.js Lovers Unite"})
const meetup2 = new MeetUp({title: " Angular ", description: "Angualar.js Lovers Unite"})
const meetup3 = new MeetUp({title: " Vue ", description: "Vue.js Lovers Unite"})

Technology
  .meetups
  .push(meetup1, meetup2, meetup3)

const Running = new Group({name: "Health", description: "Everything Health", category: "Health"})
const meetup4 = new MeetUp({title: " Atlanta Run CLub ", description: "Midtown Runners Unite"})
const meetup5 = new MeetUp({title: " General Assembly Fitness ", description: "Coding BootCamp Grads mixing it up code with fitness"})
const meetup6 = new MeetUp({title: " Sneaker Fitness ", description: "Sneaker Heads That Love Fitness"})

Running
  .meetups
  .push(meetup4, meetup5, meetup6)

Group
  .remove({})
  .then(() => {
    console.log(`Technology group saved`)
    return Technology.save()
  })
  .then(() => {
    console.log(`Running group saved`)
    return Running.save()
  })
  // MeetUp.remove({}).then(()=>{
  //   console.log('meetups removed')
  // })
  .then(() => {
    mongoose
      .connection
      .close()
    console.log(`
    Finished seeding database...Disconnected from MongoDB
    `)
  })
  .catch(error => {
    console.log('ERROR SAVING SEEDED DATA !!!!!!', error)
  })