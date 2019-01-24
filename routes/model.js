const NavigateFS = require('../nav-fs');
const TitlesController = require('../controllers/titles');

module.exports = function(app) {
  app.get('/model', function(req, res) {
    res.json(NavigateFS.getModel());
  });

  app.get('/series', TitlesController.model('series'));
  app.get('/series/list', TitlesController.list('series'));
  app.get('/series/:id', TitlesController.title('series', 'id'));

  app.get('/movies', TitlesController.model('movies'));
  app.get('/movies/list', TitlesController.list('movies'));
  app.get('/movies/:id', TitlesController.title('movies', 'id'));
};
