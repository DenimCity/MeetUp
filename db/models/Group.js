const mongoose = require('mongoose')
const Schema = require('../schema')
const Group = mongoose.model('Group', Schema.GroupSchema)


module.exports = Group