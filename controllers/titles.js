const NavigateFS = require('../nav-fs');
const DB = require('../libs/database');

module.exports.list = type => {
  return (req, res) => {
    const titles = Object.keys(NavigateFS.getModel()[type]);

    let numTitles = titles.length;
    let success = true;
    const result = {};

    const checkDone = () => {
      numTitles--;
      if(numTitles <= 0) {
        res.json(titles.map(title => result[title]));
      }
    };

    titles.forEach(title => {
      DB.get('select * from TITLES where TITLE=$title', {$title: title}, function(err, row) {
        if(err) {
          success = false;
          console.log('error: ', err);
          return checkDone();
        }
        result[title] = row;
        checkDone();
      })
    });
  };
};

module.exports.model = type => {
  return (req, res) => {
    res.json(NavigateFS.getModel()[type]);
  };
};

module.exports.title = (type, param) => {
  return (req, res) => {
    res.json(NavigateFS.getModel()[type][req.params[param]]);
  };
};
