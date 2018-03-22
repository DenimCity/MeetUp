require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();



mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); 


const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());


const meetup = require('./routes/meetupController')
app.use('/groups/:groupId/meetup', meetup)

const group = require('./routes/groupController')
app.use('/groups/', group)

app.use(express.static(__dirname + '/client/build/'));
app.get('*', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`your server - Api is running on port + ${PORT}`);
})