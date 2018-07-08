var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + ''
  res.send(responseText)
  // res.render('index', { title: 'Express' });
  // next();
});

module.exports = router;
