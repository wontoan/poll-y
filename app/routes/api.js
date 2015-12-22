var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

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
      res.send('Polls');
    });

  router.route('/polls/:id')
    .get(function (req, res) {

    });

  return router;
};