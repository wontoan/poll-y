var express = require('express');
var session = require('session');
var passport = require('passport');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/pollyApp');

app.listen(3000, function(){
  console.log("Listening on port 3000");
});