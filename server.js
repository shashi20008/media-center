const NavigateFS = require('./nav-fs');
const http = require('http');

const root = '/media/collection/'

//NavigateFS(root);

const server = http.createServer(function(req, res) {
  console.log('hello world');
  res.end('hello world');
});

server.listen(8080);
