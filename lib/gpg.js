'use strict';

const spawnGPG = require('./spawn-gpg');
const parser = require('./parser');

function list() {
  return new Promise((resolve, reject) => {

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
  
        resolve(keys);
      })
      .catch(e => reject(e));
  });
}

function info(email) {
  return new Promise((resolve, reject) => {

    spawnGPG(['--list-keys', '--fingerprint', email])
    .then(result => {
      const key = parser.parseKey(result.toString('utf-8'));
      resolve(key);
    })
    .catch(e => reject(e));
  });
}

function sign(email) {
  return new Promise((resolve, reject) => {

  });
}



module.exports = {
  list: list,
  info: info
};