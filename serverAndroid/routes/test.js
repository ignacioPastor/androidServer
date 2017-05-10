var express = require('express');
var router = express.Router();
var testBackend = require('../public/javascripts/backends/testBackend');

// GET all tests. 
router.get('/', function(req, res, next) {
  testBackend.getTests()
    .then(test => {
      res.json(test);
    })
    .catch(error => {
      res.status(500).end(error);
    });
});

module.exports = router;