const mongoose = require('mongoose')
const Schema = require('../schema')
const MeetUp = mongoose.model('MeetUp', Schema.MeetUpSchema)

module.exports = MeetUp