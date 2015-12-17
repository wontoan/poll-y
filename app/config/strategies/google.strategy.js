var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (passport) {
  passport.use(new GoogleStrategy({
    clientID: '747343027572-lpfeo5hhq3tetfl7vp98qa3a6b19mugr.apps.googleusercontent.com',
    clientSecret: 'gH4DrQj2EuwoymLfwDuzIuMk',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
    function (req, accessToken, refreshToken, profile, done) {
      var query = {
        'google.id': profile.id
      };
  
      User.findOne(query, function (error, user) {
        if (error) {
          return done(error);
        }
        if (user) {
          console.log('found user');
          done(null, user);
        } else {
          console.log('user not found, creating user');
          var user = new User();
          
          user.email = profile.emails[0].value;
          user.image = profile._json.image.url;
          user.displayName = profile.displayName;
          user.google = {};
          user.google.id = profile.id;
          user.google.token = accessToken;
          
          user.save();
          done(null, user);
        }
      });
    }));
};