const express = require('express');
var mongoose = require('mongoose');
const app = express();
const port = 5000;
var keys = require('./config/keys');
var bodyParser = require('body-parser');

var menus = require('./models/MenuModel');
mongoose.connect(keys.mongodb.dbURL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

app.post('/data/new', (req, res) => {
  var player = req.body;
  console.log('ok ' + player);
  res.send('Success');
});

app.listen(port, () => console.log(`Listening on port ${port}`));