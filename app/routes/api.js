var express = require('express');
var mongoose = require('mongoose');
var pollRouter = express.Router();
var Poll = mongoose.model('Poll');

pollRouter.route('/Polls')
  .get(function (req, res) {
    Poll.find(function (err, polls) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(polls);
    });
  });

module.exports = pollRouter;