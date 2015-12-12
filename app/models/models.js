var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define our database via mongoose schemas
var userSchema = mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  password: String,
  createdOn: {type: Date, default: Date.now}
});

var pollSchema = mongoose.Schema({
  title: String,
  options: [{count: Number}]
});

mongoose.model('User', userSchema);
mongoose.model('Poll', pollSchema);