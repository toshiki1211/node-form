import express from 'express';
const router = require('./routes/router');
const app = express();

// テンプレートエンジンの指定
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

// ルーティングモジュールをアプリケーションのパスにマウントさせる
app.use('/', router);

module.exports = app;