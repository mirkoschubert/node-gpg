'use strict';

const spawn = require('child_process').spawn;

function spawnGPG(args) {
  return new Promise((resolve, reject) => {
    const gpg = spawn('gpg', args);
    let buffer = [];
    var bufferLength = 0;
    var error = '';

    gpg.stdout.on('data', (data) => {
      buffer.push(data);
      bufferLength += data.length;
    })

    gpg.stderr.on('data', (data) => {
      error += data.toString('utf-8');
    })

    gpg.on('exit', (code) => {

      if (code !== 0) {
        reject(error)
      } else {
        var msg = Buffer.concat(buffer, bufferLength);
        resolve(msg);
      }
    })
  })
}

module.exports = spawnGPG;