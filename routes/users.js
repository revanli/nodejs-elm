var express = require('express');
var router = express.Router();
var userDao = require('../model/userDao')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addUser', function (req, res, next) {
  userDao.add(req, res, next);
})

router.get('/queryAll', function (req, res, next) {
  userDao.queryAll(req, res, next);
})

module.exports = router;
