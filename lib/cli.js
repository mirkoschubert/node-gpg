'use strict';

const app = require('commander');

app
  .version(require('../package.json').version, '-V, --version')
  .option('-v, --verbose', 'shows you every single step');

app
  .command('list')
  .description('list all keys from the gpg keyring')
  .action(() => {
    const list = require('./list');
    list(result => {
      console.log(result);
    });
  });

app.parse(process.argv);

if (!app.args.length) app.help();