var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Poll = mongoose.model('Poll');

router.use('/', function(req, res, next){
  if (!req.user) {
    res.redirect('/');
  }
  next();
});

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