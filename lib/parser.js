'use strict';

function parseKey(entry) {
  const lines = entry.split('\n');
  var fingerprintIsNext = false;
  var key = {};
  var subkeys = [];
  var uids = [];
  lines.forEach(line => {
    if (fingerprintIsNext) {
      key.fingerprint = line.substring(6);
      fingerprintIsNext = false;
    }
    if (line.startsWith('pub')) {
      const parts = line.substring(6).split(' ');
      fingerprintIsNext = true;
      key.algorithm = parts[0];
      key.created = parts[1];
      key.capabilities = parts[2].substring(1, parts[2].length - 1);
      if (parts.length > 3) key.expires = parts[4].substring(0, parts[4].length - 1);
    }
    if (line.startsWith('sub')) {
      const parts = line.substring(6).split(' ');
      const subkey = {};
      subkey.algorithm = parts[0];
      subkey.created = parts[1];
      subkey.capabilities = parts[2].substring(1, parts[2].length - 1);
      if (parts.length > 3) subkey.expires = parts[4].substring(0, parts[4].length - 1);
      subkeys.push(subkey);
    }
    if (line.startsWith('uid')) {
      const uid = {};
      // has email address
      if (line.indexOf('@') !== -1) {
        uid.validity = line.match(/\[\ ?(.*)\]/)[1];
        const credentials = line.substring(line.indexOf(']') + 2);

        uid.name = (credentials.indexOf('<') !== -1) ? credentials.substring(0, credentials.indexOf('<') - 1) : '';
        uid.email = (credentials.indexOf('<') !== -1) ? credentials.substring(credentials.indexOf('<') + 1, credentials.indexOf('>')) : credentials;

        uids.push(uid);
      }
    }
  });
  if (Object.keys(uids).length !== 0) key.uids = uids;
  if (Object.keys(subkeys).length !== 0) key.subkeys = subkeys;

  return key;
}

module.exports = {
  parseKey: parseKey
};
