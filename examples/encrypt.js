/**
 * node-gpg by Mirko Schubert <office@mirkoschubert.de>
 * MIT licensed
 * 
 * This is an example how to enrypt a message with async/ await.
 * In order for this to work you should replace the user and recipient with entries from your gpg keychain!
 */

var gpg = require('../lib/gpg');

const message = 'abcdefghijklmnopqrstuvwxyz1234567890';
const user = 'office@mirkoschubert.de';
const recipient = 'office@mirkoschubert.de';

async function encrypt() {
  try {
    let result = await gpg.encrypt(message, user, recipient);
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

encrypt();
