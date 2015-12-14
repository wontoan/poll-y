var TwitterStrategy = require('passport-twitter').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (passport) {
  passport.use(new TwitterStrategy({
    consumerKey: 'eveHRXhrBaKaLPD5JVbt5nQtH',
    consumerSecret: 'q52LzcmijUE5DdbW1Jdmj6x1DSwst11YJYPgXwBKwzCeYB94Ke',
    callbackURL: 'http://localhost:3000/auth/twitter/callback',
    passReqToCallback: true
  },
    function (req, token, tokenSecret, profile, done) {
      var query = {
        'twitter.id': profile.id
      };
      User.findOne(query, function(error, user){
        if (user) {
          console.log('user found');
        } else {
          var user = new User();
          user.image = profile._json.image.url;
          user.displayName = profile.displayName;

          user.twitter = {};
          user.twitter.id = profile.id;
          user.twitter.token = token;

          done(null, user);
        }
      });
  }));
};