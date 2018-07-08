// 把 Babel 注册到 Node 的模块系统中并开始编译其中 require 的所有文件
require('babel-core/register');
require('./app.js');