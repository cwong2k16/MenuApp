var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    ID: String,
    Chinese: String,
    English: String,
    Desc: String,
    Price: String
})
var model = mongoose.model('menus', Schema)
module.exports = model;