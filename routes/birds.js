var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
  next();
});
// define the about route
router.get('/about', function(req, res, next) {
  console.log('Request Type:', req.method);
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  res.send('Hello')
  next()
});

module.exports = router;