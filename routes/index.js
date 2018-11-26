var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hi33d3hi33h222ihi' });
});

module.exports = router;
