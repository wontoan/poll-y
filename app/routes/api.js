var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Poll = mongoose.model('Poll');

//function isAuthenticated (req, res, next) {
//  if (req.user) {
//    return next();
//  }
//  return res.redirect('/login');
//}

router.route('/Polls')
  .get(function (req, res) {
    Poll.find(function (err, polls) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(polls);
    });
  });

module.exports = router;