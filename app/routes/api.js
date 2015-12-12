var express = require('express');
var pollRouter = express.Router();

pollRouter.route('/polls')
  .get(function (req, res) {
    var responseJson = {hello: "This is my api"};
    res.json(responseJson);
  })  
  .post();

module.exports = pollRouter;