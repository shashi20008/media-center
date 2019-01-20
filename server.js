const NavigateFS = require('./nav-fs');
const app = require('express')();
const fs = require('fs');

const roots = [];

try {
  const rootsFromFile = JSON.parse(fs.readFileSync('./roots.json'));
  rootsFromFile && roots.push.apply(roots, rootsFromFile);
}
catch(e) { }

app.use(function(req, res, next) {
  console.log(req.path);
  //res.end('hello world');
  next();
});

// Root section
app.get('/root', function(req, res) {
  res.json(roots);
});

app.post('/root', function(req, res) {
  const { root } = req.query;
  roots.push(root);
  fs.writeFileSync('./roots.json', JSON.stringify(roots));
  res.status(202).end();
});

app.delete('/root', function(req, res) {
  const { root } = req.query;
  const found = roots.indexOf(root);

  if(found >= 0) {
    roots = roots.slice(0, found).concat(roots.slice(found + 1))
  }
  res.status(202).end();
});

app.get('/refresh', function(req, res) {
  if(NavigateFS.scanComplete !== false) {
    NavigateFS(roots);
    return res.status(202).end();
  }
  res.status(400).end();
});
// Root section end

// Model section
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
// Model section end

app.listen(8080);
