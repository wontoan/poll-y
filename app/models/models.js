var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Mongoose User Models
var userSchema = mongoose.Schema({
  displayName: {
    type: String
  },
  image: {
    type: String
  },
  email: {
    type: String
  },
  facebook: {
    type: Object
  },
  twitter: {
    type: Object
  },
  google: {
    type: Object
  }
});

//Mongoose Poll Model
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