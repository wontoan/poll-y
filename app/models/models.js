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
  //Define our Poll Schema using the datasets required by Chart.js
  labels: [],
  datasets: [
    {
      label: String,
      fillColor: String,
      strokeColor: String,
      highlightFill: String,
      highlightStroke: String,
      data: []
    }
  ]
});

mongoose.model('User', userSchema);
mongoose.model('Poll', pollSchema);