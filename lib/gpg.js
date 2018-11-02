'use strict';

const spawnGPG = require('./spawn-gpg');
const parser = require('./parser');

function list() {
  return new Promise((resolve, reject) => {

    spawnGPG(['--list-keys', '--fingerprint'])
      .then(result => {
        var entries = result.content.split('\n\n');
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
      const key = parser.parseKey(result.content);
      resolve(key);
    })
    .catch(e => reject(e));
  });
}

function sign(message, user) {
  return new Promise((resolve, reject) => {
    spawnGPG(['--clear-sign', '-u', user], message)
    .then(result => {
      resolve(result.content);
    })
    .catch(e => reject(e));
  });
}

function verify(message) {
  return new Promise((resolve, reject) => {

    spawnGPG(['--verify'], message)
    .then(result => {
      var data = parser.parseVerified(result.message);
      resolve(data);
    })
    .catch(e => reject(e));
  });
}

function encrypt(message, user, recipient) {
  return new Promise((resolve, reject) => {
    spawnGPG(['--encrypt', '-u', user, '-r', recipient, '--armor'], message)
    .then(result => {
      resolve(result.content);
    })
    .catch(e => reject(e));
  });
}

function decrypt(message) {
  return new Promise((resolve, reject) => {
    spawnGPG(['--decrypt', '--armor'], message)
      .then(result => {
        const data = parser.parseDecryptMessage(result.message);
        const merged = { content: result.content, ...data };
        resolve(merged);
      })
      .catch(e => reject(e));
  });
}



module.exports = {
  list: list,
  info: info,
  sign: sign,
  verify: verify,
  encrypt: encrypt,
  decrypt: decrypt
};