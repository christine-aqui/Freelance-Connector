// require
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
// require routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');


// initilized
const app = express();
const port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Make connection to Mongo on mlab
mongoose
  .connect(db)
  .then(() => console.log('MongoDB COnnected'))
  .catch(err => console.log('MongoDB connection error: ', err));

app.get('/', (req, res) => res.send('Hello'));

// use routes
app.use('/api/user', users);
app.use('/api/profile', profile);
app.use('/api/post', post);

app.listen(port, () => {
  console.log(`==> 🌎   Server running on port ${port}`);
});
