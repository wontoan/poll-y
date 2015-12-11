var express = require('express');
var session = require('session');
var passport = require('passport');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

var app = express();

mongoose.connect('mongodb://localhost/pollyApp');

app.listen(port, function(){
  console.log("Listening on port " + port);
});