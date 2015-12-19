var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (passport) {
  
  passport.use(new FacebookStrategy({
    clientID: '916501725113163',
    clientSecret: '2a2d73584be1549d84bae4ef44f271c0',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    passReqToCallback: true,
    enableProof: false,
    profileFields: ['id', 'emails', 'name']
  },
    function (req, accessToken, refreshToken, profile, done) {
      var query = {
        'facebook.id': profile.id
      };
    
      User.findOne(query, function(error, user){
        if (error) {
          return done(err);
        }
        if (user) {
          console.log("user found");
          done(null, user);
        } else {
          console.log('user not found, creating new user');
          var user = new User();
          
          user.email = profile.emails[0].value;
          user.displayName = profile.displayName;

          user.facebook = {};
          user.facebook.id = profile.id;
          user.facebook.token = accessToken;
          
          user.save();
          done(null, user);
        }
      });
    }));
};