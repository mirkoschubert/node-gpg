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

function sign(message, user) {
  return new Promise((resolve, reject) => {
    spawnGPG(['--clear-sign', '-u', user], message)
    .then(result => {
      resolve(result.toString('utf-8'));
    })
    .catch(e => reject(e));
  });
}

function encrypt(message, user, recipient) {
  return new Promise((resolve, reject) => {
    spawnGPG(['--encrypt', '-u', user, '-r', recipient, '--armor'], message)
    .then(result => {
      resolve(result.toString('utf-8'));
    })
    .catch(e => reject(e));
  });
}

function decrypt(message) {
  return new Promise((resolve, reject) => {
    spawnGPG(['--decrypt', '--armor'], message)
      .then(result => {
        resolve(result.toString('utf-8'));
      })
      .catch(e => reject(e));
  });
}



module.exports = {
  list: list,
  info: info,
  sign: sign,
  encrypt: encrypt,
  decrypt: decrypt
};