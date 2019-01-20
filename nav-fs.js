const fs = require('fs');
const path = require('path');
const Bluebird = require('bluebird');

const SEASON_REGEX = /^s(eason)?\s*(\d{1,3})$/i;
const SEASON_EPI_REGEX = /s(eason)?\s*(\d{1,3})e(pisode)?\s*(\d{1,3})/i;
const EPI_REGEX = /ep?(isode)?\s*(\d{1,3})/i;

const VIDEO_EXTENSIONS = ['.webm', '.mkv', '.flv', '.vob', '.ogv', '.ogg', '.drc', '.mng', '.avi', '.MTS', '.M2TS', '.mov', '.qt', '.wmv', '.yuv', '.rm', '.rmvb', '.asf', '.amv', '.mp4', '.m4p ', '.m4v', '.mpg', '.mpeg', '.mpv', '.m2v', '.svi', '.3gp', '.3g2'];
const AUDIO_EXTENSIONS = [];

const FS_METHODS = ['lstat', 'stat', 'readdir', 'readFile'];
const fsAsync = FS_METHODS.reduce((orig, method) =>
  Object.assign(orig, {
    [method]: Bluebird.promisify(fs[method], {
      context: fs
    })
  }), {});

const model = {
  series: {},
  movies: {},
  unsorted: []
};
const allPaths = [];

function processFile(file) {
  return fsAsync.stat(file)
    .then(stats => {
      if (!stats.isFile()) {
        throw new Error('not a file');
      }
      const fileObj = path.parse(file);
      const dirs = fileObj.dir.split(path.sep);

      const isVideo = VIDEO_EXTENSIONS.some(ext => ext === fileObj.ext);
      if(!isVideo) {
        // log to log file.
        throw new Error('not a video file');
      }

      let title, season, episode, type = 'MOVIE';
      const details = fileObj.name.match(SEASON_EPI_REGEX);
      if(details && (details[2] || detail[4])) {
        season = details[2];
        episode = details[4];
      }
 
      if(!episode) {
        // Check if file name has just episode number.
        const epiFromFileName = fileObj.name.match(EPI_REGEX);
        epiFromFileName && (episode = epiFromFileName[2]);
      }

      //All numberic file name could also be episode number.
      if(!episode && /^\d{1,3}$/.test(fileObj.name)) {
        episode = fileObj.name.match(/^\d{1,3}$/)[1];
      }

      // Check if the directory name contains season number.
      const seasonNumFromDir = dirs[dirs.length - 1].match(SEASON_REGEX);
      if(!season && seasonNumFromDir) {
         season = seasonNumFromDir[2];
      }

      if(season) {
        type = 'SERIES',
        seasonNumFromDir && dirs.pop();
        title = dirs.pop();

        model.series[title] || (model.series[title] = {});
        model.series[title][season] || (model.series[title][season] = {});

        if(episode) {
          model.series[title][season][episode] = { file };
        }
        else {
          model.series[title][season].unsorted = model.series[title][season].unsorted || [];
          model.series[title][season].unsorted.push({ file });
        }
        
        return;
      }
      title = fileObj.name;
      model.movies[title] = { file };
    })
    .catch(e => console.log(`${file} wasn't processed because: `, e));
}

function collate() {
  if (allPaths.length === 0) {
    console.log(JSON.stringify(model, null, 2));
    module.exports.scanComplete = true;
    return;
  }

  const root = allPaths.shift();

  fsAsync.readdir(root)
    .then(files => allPaths.push.apply(allPaths, files.map(file => path.join(root, file))))
    .catch(e => {
      if (e.code === 'ENOTDIR') {
        processFile(root);
      } else {
        console.log(`${root} won't be processed because: `, e);
      }
    })
    .finally(collate);
}

const navFSTree = module.exports = (root, options) => {
  options || (options = {});

  // if (!path.isAbsolute(root)) {
  //   root = path.join(__dirname, root);
  // }

  allPaths.push.apply(allPaths, root);

  module.exports.scanComplete = false;

  return collate();
};

module.exports.getModel = function() {
  return model;
}

function printModal() {
  JSON.stringify(model, null, 2);
  if(!module.exports.scanComplete) {
    setTimeout(printModal, 10000);
  }
}
