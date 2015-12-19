//Index.js should be for serving up only the index.html.
//pollyApp.js (Angular) will handle all the client-side routing.
var express = require('express');
var path = process.cwd();
var router = express.Router();

router.route('/')
  .get(function (req, res) {
    res.sendFile(path + '/public/index.html');
  });

module.exports = router;