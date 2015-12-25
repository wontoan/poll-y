//Index.js should be for serving up only the index.html.
//pollyApp.js (Angular) will handle all the client-side routing.
var express = require('express');
var path = process.cwd();
var router = express.Router();
var passport = require('passport');

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/login');
  }
}

router.route('/').get(isLoggedIn, function (req, res) {
    res.sendFile(path + '/public/index.html');
  });

router.route('/login').get(function(req, res) {
    res.sendFile(path + '/public/auth.html');
  });

//I guess I need to switch the default to /login if I wanna secure the / route.

module.exports = router;