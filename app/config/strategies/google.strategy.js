var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {
  
  passport.use(new GoogleStrategy({
    clientID: '747343027572-lpfeo5hhq3tetfl7vp98qa3a6b19mugr.apps.googleusercontent.com',
    clientSecret: 'gH4DrQj2EuwoymLfwDuzIuMk',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
    function (req, accessToken, refreshToken, profile, done) {
      var user = {};
      user.email = profile.emails[0].value;
      user.image = profile._json.image.url;
      user.displayName = profile.displayName;
    
      user.google = {};
      user.google.id = profile.id;
      user.google.token = accessToken;
    
      done(null, user);
    }));
};