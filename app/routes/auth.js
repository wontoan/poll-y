var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  
  router.get('/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
  }));
  
  router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/error/'
  }));
  
  router.get('/twitter', passport.authenticate('twitter'));
  
  router.get('/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/error/'
  }));
  return router;
};