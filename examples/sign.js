/**
 * node-gpg by Mirko Schubert <office@mirkoschubert.de>
 * MIT licensed
 * 
 * This is an example how to sign a message without any encryption.
 * In order for this to work you should replace the user with an email address from your gpg keychain!
 */

var gpg = require('../lib/gpg');

const message = 'abcdefghijklmnopqrstuvwxyz1234567890';
const user = 'office@mirkoschubert.de';

gpg.sign(message, user).then(res => {
  console.log(res);
}).catch(e => console.error(e));