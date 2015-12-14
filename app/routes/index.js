var express = require('express');
var path = process.cwd();
var router = express.Router();

router.route('/').get(function (req, res) {
  res.sendFile(path + '/public/index.html');
});

router.route('/login').get(function (req, res) {
  res.sendFile(path + '/public/auth.html');
});

module.exports = router;