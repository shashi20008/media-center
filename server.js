const NavigateFS = require('./nav-fs');
const app = require('express')();
const fs = require('fs');

const rootRoutes = require('./routes/root');
const modelRoutes = require('./routes/model');
const imdbRoutes = require('./routes/imdb');

app.use(function(req, res, next) {
  console.log(req.path);
  //res.end('hello world');
  next();
});

rootRoutes(app);
modelRoutes(app);
imdbRoutes(app);

app.listen(8080);
