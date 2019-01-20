const request = require('request');

const URL = 'https://v2.sg.media-imdb.com/suggests/<first-char>/<search-term>.json?_=';

module.exports = function(app) {
  app.get('/search', function(req, res) {
    const { term } = req.query;
    if(typeof term === 'string' && term.length > 0) {
      const termURL = URL.replace('<first-char>', term[0].toLowerCase()).replace('<search-term>', term) + Date.now();
      request(termURL, function(err, resp) {
        if(err) {
          return res.status(400).json({});
        }

        let respParts = (resp.body || '').match(/^.*?\((.*)\)$/);

        res.json(JSON.parse((respParts && respParts[1]) || '{}'));
      })
      return;
    }
    return res.status(200).json({})
  });
};