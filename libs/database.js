'use strict';

const sqlite3 = require('sqlite3').verbose();
const Bluebird = require('bluebird');

const DB_FILE_NAME = './details.db';

let db;
const connectDB = () => {
  return new Bluebird(function(resolve, reject) {
    db = new sqlite3.Database(DB_FILE_NAME);

    db.on('error', function(e) {
      console.log('an error occurred: ', e);
      reject(e);
    });

    db.on('open', function(e) {
      console.log('connected to DB');
      resolve(db);
    });
  });
}

const API = [
  'all',
  'close',
  'get',
  'each',
  'run', // don't chain.
  'parallelize',
  'serialize'
];

const proxy = (fn) => {
  return function() {
    const origArgs = Array.from(arguments);
    if(!db || !db.open) {
      connectDB()
        .then(() => {
          db[fn].apply(db, origArgs);
        });
      return;
    }
    return db[fn].apply(db, origArgs);
  }
};

module.exports = API.reduce((orig, fn) => Object.assign(orig, { [fn]: proxy(fn) }), {});

const createSeriesTable = `CREATE TABLE IF NOT EXISTS TITLES (
  TITLE    TEXT NOT NULL,
  DESCRIPTION    TEXT,
  POSTER    TEXT,
  TRAILER    TEXT,
  TYPE     TEXT NOT NULL
)`;

const createIndex = `CREATE UNIQUE INDEX titles_title_index ON TITLES(TITLE)`;

connectDB()
  .then((db) => {
    db.serialize(() => {
      db.run(createSeriesTable)
        .run(createIndex, function(err) {
          // ignore.
        });
    });
  })
