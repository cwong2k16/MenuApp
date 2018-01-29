const express = require('express');
var mongoose = require('mongoose');
const app = express();
const port = 5000;
var keys = require('./config/keys');

var menus = require('./models/MenuModel');
mongoose.connect(keys.mongodb.dbURL);

app.get('/api/menu', (req, res) => {
  menus.find({}, (err, data)=>{
    if(err){
      throw err;
    }
    if(data)
      res.send(data);
    else{
      res.send("Database does not exist");
    }
  });
});

app.post('/api/menu', (req, res)=>{
  res.send("aaa");
});

app.listen(port, () => console.log(`Listening on port ${port}`));