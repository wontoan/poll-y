var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Poll = mongoose.model('Poll');

module.exports = function (passport) {

  router.get('/user', function (req, res) {
    if (req.user) {
      res.json(req.user);
    } else {
      res.send('api.js: No user found');
    }
  });

  router.route('/polls')
    .get(function (req, res) {
      Poll.find(function (err, polls) {
        if (err) {
          return res.send(500, err);
        } else {
          return res.send(200, polls);
        }
      });
    })

    .post(function(req, res) {
      var poll = new Poll();
      poll.labels = req.body.labels;
      poll.title = req.body.title;
      poll.createdBy = req.body.createdBy;
      poll.data = req.body.data;
      poll.save(function (err, poll) {
        if (err) {
          //console.log('debug1');
          return res.send(500, err);
        }
        return res.json(poll);
      });
    });

  router.route('/polls/:id')
    .get(function (req, res) {
      Poll.findById(req.params.id, function (err, poll) {
        if (err) {
          return res.send(err);
        }
        return res.json(poll);
      });
    })

    .put(function(req, res) {
      Poll.findById(req.params.id, function(err, post) {

      });
    })

    .delete(function (req, res) {
      Poll.remove({
        _id: req.params.id
      }, function (err) {
        if (err) {
          return res.send(err);
        }
        return res.json('This poll was deleted!');
      });
    });

  return router;
};