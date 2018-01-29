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
  // res.send([{"ID":"L1", "Chinese": "牛肉和西兰花", "English": "Beef with", "Desc":"(Beef, chicken or roast pork)", "Price":"$8.50"}, 
  // {"ID":"L2", "Chinese":"胡椒牛排", "English":"Pepper Steak", "Price":"$8.50"},
  // {"ID":"L3", "Chinese":"豆腐牛肉", "English":"Bean Curd with", "Desc":"(Beef, chicken or roast pork)", "Price":"$8.50"},
  // {"ID":"L15", "Chinese":"捞面", "English":"Lo Mein", "Desc":"(Chicken, beef, roast pork, vegetable, or shrimp)", "Price":"$8.50"}]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));