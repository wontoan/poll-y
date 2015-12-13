module.exports = function (passport) {
  
  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
  require('./strategies/google.strategy')(passport);
};