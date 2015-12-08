'use strict';

var koa = require('koa');
var serve = require('koa-static');
var app = koa();

// Static Middleware
// 全局的公共目录
app.use(serve('public'));

// logger

app.use(function*(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function*() {
  this.body = 'Hello World';
});

app.listen(8080);
