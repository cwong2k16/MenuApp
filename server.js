const express = require('express');
var mongoose = require('mongoose');
const app = express();
const port = 5000;
var keys = require('./config/keys');

mongoose.connect(keys.mongodb.dbURL);

var model = ('./models/MenuModel');

app.get('/', (req, res) => {
  model.find({}, (err, data)=>{
    if(err){
      throw err;
    }
    else if(data){
      res.send(data);
    }
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));