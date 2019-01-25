const NavigateFS = require('../nav-fs');
const TitlesController = require('../controllers/titles');

const authMiddleware = function(req, res, next) {
  if(!req.isAuthenticated() || !req.user){
    return res.status(401).json({});
  }
  next();
};

module.exports = function(app) {
  app.get('/model', authMiddleware, function(req, res) {
    res.json(NavigateFS.getModel());
  });

  app.get('/series', authMiddleware, TitlesController.model('series'));
  app.get('/series/list', authMiddleware, TitlesController.list('series'));
  app.get('/series/:id', authMiddleware, TitlesController.title('series', 'id'));

  app.get('/movies', authMiddleware, TitlesController.model('movies'));
  app.get('/movies/list', authMiddleware, TitlesController.list('movies'));
  app.get('/movies/:id', authMiddleware, TitlesController.title('movies', 'id'));
};
