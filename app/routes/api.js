var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

module.exports = function (passport) {
  
  router.get('/me', function (req, res) {
    if (req.user) {
      res.json(req.user);
    } else {
      res.send('api.js: No user found');
    }
  });
  
  return router;
};