const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const MeetUpSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    min: [5, 'title must be at least 5 character long']
  },
  description: {
    type: String,
    required: true,
    min: [5, "description must be at least"]
  },
  eventDate: {
    type: Date
  }
}, {timestamps: true})

const GroupSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    // min: [2, "name must be at least  5 charcters long"]
  },
  description: {
    type: String,
    required: true,
    // min: [2, "Description must be 10 charcters long"]
  },
  category: {
    type: String
  },
  meetup: [MeetUpSchema]
}, {timestamps: true})

module.exports = {
  GroupSchema,
  MeetUpSchema
  

}