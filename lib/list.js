'use strict';

const spawnGPG = require('./spawn-gpg');

function list(callback) {

  spawnGPG(['--list-keys', '--fingerprint'])
  .then(result => {
    callback(result.toString('utf-8'))
  })
  .catch(e => callback(e));
}



module.exports = list;