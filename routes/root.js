const fs = require('fs');
const NavigateFS = require('../nav-fs');

const roots = [];

try {
  const rootsFromFile = JSON.parse(fs.readFileSync('./roots.json'));
  rootsFromFile && roots.push.apply(roots, rootsFromFile);
}
catch(e) { }

module.exports = function(app) {
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
      roots = roots.slice(0, found).concat(roots.slice(found + 1));
      fs.writeFileSync('./roots.json', JSON.stringify(roots));
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
};
