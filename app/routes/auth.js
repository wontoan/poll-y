var express = require('express');
var router = express.Router();

module.exports = function (passport) {
  
  //Google Routes
  router.get('/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
  }));
  
  router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/error/'
  }));
  
  //Twitter routes
  router.get('/twitter', passport.authenticate('twitter'));
  
  router.get('/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/error/'
  }));
  
  //Facebook routes
  router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
  }));
  
  router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/error/'
  }));
  
  return router;
};