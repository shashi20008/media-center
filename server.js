'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
const path = require('path');

const rootRoutes = require('./routes/root');
const modelRoutes = require('./routes/model');
const imdbRoutes = require('./routes/imdb');

const { authMiddleware } = require('./libs/passport');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./dist'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(morgan('tiny'));
app.use(session({ 
  secret: 'keyboard cat',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', authMiddleware, (req, res) => res.status(200).json({}));
app.get('/logout', (req, res) => {
  req.isAuthenticated() && req.logout();
  res.status(200).json({});
});

rootRoutes(app);
modelRoutes(app);
imdbRoutes(app);

app.listen(8080);
