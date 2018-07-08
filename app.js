import express from 'express';
import config from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import winston from 'winston';
import expressWinston from 'express-winston';
import path from 'path';
import session from 'express-session';
var MySQLStore = require('express-mysql-session')(session);
// 配合前端单页面history模式
import history from 'connect-history-api-fallback';
// // style terminal string
import chalk from 'chalk';

import userDao from './model/userDao.js'

const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.Origin || req.headers.origin);
  res.header('Access-Control-Allow-Headers', "Content-Type, Authorization, X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1');
	if (req.method == 'OPTIONS') {
	  res.send(200);
	} else {
	  next();
	}
})

var sessionStore = new MySQLStore(config.mysql);
app.use(cookieParser())
app.use(session({
  key: config.session.name,
  secret: config.session.secret,
  store: sessionStore,
  resave: true,
  saveUninitialized: false
}))

app.get('/addUser', function(req, res, next) {
  userDao.add(req, res, next)
});

app.get('/queryAll', function (req, res, next) {
  userDao.queryAll(req, res, next);
})


app.use(history());
app.use(express.static('./public'));
app.listen(config.port, () => {
  console.log(
    chalk.green(`成功监听端口：${config.port}`)
  )
});