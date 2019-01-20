const NavigateFS = require('./nav-fs');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const rootRoutes = require('./routes/root');
const modelRoutes = require('./routes/model');
const imdbRoutes = require('./routes/imdb');

app.use(function(req, res, next) {
  console.log(req.path);
  //res.end('hello world');
  next();
});

app.use(express.static('./dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

rootRoutes(app);
modelRoutes(app);
imdbRoutes(app);

app.listen(8080);
