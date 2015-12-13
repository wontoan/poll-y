var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function () {
  passport.use(new TwitterStrategy({
    consumerKey: 'eveHRXhrBaKaLPD5JVbt5nQtH',
    consumerSecret: 'q52LzcmijUE5DdbW1Jdmj6x1DSwst11YJYPgXwBKwzCeYB94Ke',
    callbackURL: 'http://localhost:3000/auth/twitter/callback',
    passReqToCallback: true
  },
    function (req, token, tokenSecret, profile, done) {
      var user = {};
    
      user.image = profile._json.image.url;
      user.displayName = profile.displayName;
    
      user.twitter = {};
      user.twitter.id = profile.id;
      user.twitter.token = token;
    
      done(null, user);
  }));
};