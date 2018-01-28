const express = require('express');
var mongoose = require('mongoose');
const app = express();
const port = 5000;
var keys = require('./config/keys');

mongoose.connect(keys.mongodb.dbURL);

app.get('/menu', (req, res) => {
  res.send({ express: 'Menu' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));