var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  
  router.get('/google', passport.authenticate('google', {
    //TO-DO: Insert scope after setting up app on google developers console!
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
  }));
  
  router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/error'
  }));
  return router;
};