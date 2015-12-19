//Auth.js is for handling all authentication-related routing.
//In this case, logging in with passport and logging out
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
  
  router.get('/logout', function (req, res) {
    req.logout(); // Passport's function for ending a login session
    res.redirect('/#/login');
  });
  
  return router;
};