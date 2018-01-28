var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    ID: String,
    Chinese: String,
    English: String,
    Price: String
})
var model = mongoose.model('menu', Schema)
module.exports = model;