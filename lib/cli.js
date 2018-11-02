'use strict';

const app = require('commander');

app
  .version(require('./package.json').version, '-V, --version')
  .option('-v, --verbose', 'shows you every single step');

app
  .command('list')
  .description('list all keys from the gpg keyring')
  .action(() => {
    console.log('Hello, World!');
  });

app.parse(process.argv);

if (!app.args.length) app.help();