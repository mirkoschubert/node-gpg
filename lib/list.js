'use strict';

const spawnGPG = require('./spawn-gpg');
const parser = require('./parser');

function list(callback) {

  spawnGPG(['--list-keys', '--fingerprint'])
  .then(result => {
    const res = result.toString('utf-8');
    var entries = res.split('\n\n');
    if (entries[entries.length - 1] === '') entries.pop();
    var keys = [];
    
    entries.forEach(entry => {
      const key = parser.parseKey(entry);
      keys.push(key);
    });

    callback(keys);
  })
  .catch(e => callback(e));
}



module.exports = list;