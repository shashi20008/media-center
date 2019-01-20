const fs = require('fs');
const NavigateFS = require('../nav-fs');

module.exports = function(app) {
  app.get('/model', function(req, res) {
    res.json(NavigateFS.getModel());
  });

  app.get('/series', function(req, res) {
    res.json(NavigateFS.getModel().series);
  });

  app.get('/series/list', function(req, res) {
    res.json(Object.keys(NavigateFS.getModel().series));
  });

  app.get('/series/:id', function(req, res) {
    res.json(NavigateFS.getModel().series[req.params.id]);
  });

  app.get('/movies', function(req, res) {
    res.json(NavigateFS.getModel().movies);
  });

  app.get('/movies/list', function(req, res) {
    res.json(Object.keys(NavigateFS.getModel().movies));
  });

  app.get('/movies/:id', function(req, res) {
    res.json(NavigateFS.getModel().movies[req.params.id]);
  });
};
