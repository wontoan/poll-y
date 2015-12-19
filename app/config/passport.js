var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (app) {
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.serializeUser(function (user, done) {
    console.log('PASSPORT SERIALIZING');
    done(null, user._id);
  });
  
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      console.log('PASSPORT DESERIALIZING');
      done(err, user);
    });
  });
  
  require('./strategies/google.strategy')(passport);
  require('./strategies/twitter.strategy')(passport);
  require('./strategies/facebook.strategy')(passport);
};