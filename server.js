const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config();


// connect to the database
mongoose.connect(process.env.URL, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());

// set up body-parser middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/programs', require('./routes/program'));
app.use('/exercises', require('./routes/exercise'));

// start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
