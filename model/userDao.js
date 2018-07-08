const mysql = require('mysql');
const config = require('../config/default');
const $sql = require('./userSqlMapping');

// 使用连接池
var pool = mysql.createPool(config.mysql);

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret);
  }
}

module.exports = {
  add: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      var param = req.query || req.params;

      connection.query($sql.insert, [param.name, param.age], function (err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '增加成功'
          }
        }
        jsonWrite(res, result)

        connection.release()
      })
    })
  },
  queryAll: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      connection.query($sql.queryAll, function (err, result) {
        jsonWrite(res, result)
        connection.release()
      })
    })
  }
}