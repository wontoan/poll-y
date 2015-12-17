var express = require('express');
var path = process.cwd();
var router = express.Router();

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}

router.route('/')
  .get(isAuthenticated, function (req, res) {
    res.sendFile(path + '/public/index.html');
  });

router.route('/login')
  .get(function (req, res) {
    res.sendFile(path + '/public/auth.html');
  });

router.route('/logout')
  .get(function (req, res) {
    req.logout();
    res.redirect('/login');
  });

router.route('/profile')
  .get(function (req, res) {
    res.sendFile(path + '/public/profile.html');
  });

router.route('/api/:id')
  .get(function (req, res) {
    res.json(req.user);
  });

module.exports = router;