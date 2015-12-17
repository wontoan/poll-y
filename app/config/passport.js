module.exports = function (passport) {
  
  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
  require('./strategies/google.strategy')(passport);
  require('./strategies/twitter.strategy')(passport);
  require('./strategies/facebook.strategy')(passport);
};