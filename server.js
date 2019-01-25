'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const fs = require('fs');
const path = require('path');

const rootRoutes = require('./routes/root');
const modelRoutes = require('./routes/model');
const imdbRoutes = require('./routes/imdb');

const { authMiddleware } = require('./libs/passport');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log(req.path, req.body);
  //res.end('hello world');
  next();
});

app.use(express.static('./dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(session({ 
  secret: 'keyboard cat',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', authMiddleware, (req, res) => res.status(200).end());
rootRoutes(app);
modelRoutes(app);
imdbRoutes(app);

app.listen(8080);
