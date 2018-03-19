const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise


const MeetUpSchema = new Schema({
title:{
  type:String,
  required:true
},
description:{
  type:String,
  required: true
}


})




module.exports = {
  MeetUpSchema


}