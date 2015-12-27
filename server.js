var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');

//MongoDB
var port = process.env.PORT || 3000;
require('./app/models/models');
mongoose.connect('mongodb://localhost/pollyApp');

var routes = require('./app/routes/index.js');
var auth = require('./app/routes/auth')(passport);
var api = require('./app/routes/api')(passport);

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: 'new star wars movie',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/api', api);
app.use('/', routes);

require('./app/config/passport')(passport);

app.listen(port, function () {
  console.log('Listening on port ' + port);
});