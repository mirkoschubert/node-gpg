'use strict';

const app = require('commander');
const gpg = require('./gpg');

app
  .version(require('../package.json').version, '-V, --version')
  .option('-v, --verbose', 'shows you every single step');

app
  .command('list')
  .description('list all keys from the gpg keyring')
  .action(() => {
    gpg.list().then(result => {
      console.log(result);
    });
  });

app
  .command('info [email]')
  .description('lists a key with a given email address')
  .action(email => {
    gpg.info(email).then(res => {
      console.log(res);
    });
  });

app
  .command('sign')
  .action(() => {
    const message = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const user = 'office@mirkoschubert.de';
    gpg.sign(message, user).then(res => {
      console.log(res);
    });
  });

  app
  .command('encrypt')
  .action(() => {
    const message = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const user = 'office@mirkoschubert.de';
    const recipient = 'aleth3ia@posteo.de';
    gpg.encrypt(message, user, recipient).then(res => {
      console.log(res);
    });
  });

  app
  .command('decrypt')
  .action(() => {
    const message = `
-----BEGIN PGP MESSAGE-----

hQIMAxWxaThTI+evAQ/+IpXZblL1g/DI9K7plaKoFXfVXcWctfPmVUkkEWHYT3z9
no6PbpxCFsj4Jb9+NSwoo96wytw6awTojImHxsPdPvRUKJHD2QpD+7M3i5SZeDFZ
F2SkQW3CZpm8UjFtAr7NoDb+UulfBcxNe7gxT6JjdgLyF45P0E49nnRcf6xQo6U0
zjeWF1IM2pxBk1oSIgrslJINPoIwwGZPSMAjC2sYIuOk1ayW/eVHf9ZlNOmmqAL/
kxsmJlPwYlr/zKtlSzxSZPUckd5AUoNIt3jtdz7Q9K5hbwTldgBpIZ6Q6uwbVhy6
3oqJmgHhvNWfs1qkoG58c0YBJ7DPAELhaX8REbf3+/cjAB7LTNXqaAI/lIZeqvDg
WjTrcQX15Gn2LdYxb0eB3O8GvjsJmpCItE96Y3cAw5laVl9rH+UJerjLodABphEv
kd2x7CvCTUL0KjfwOx/zM/a5D8Yds7X9MJybZIq9pTLShv0dseRCGo1HcxCFatxI
4k3qOxdgzHVHpRPdzHITv9j+qW4+Ycg3yUMgZjQ07TEJ6O5zLSA7KrEJsZX6wxs/
8Fdam980VpKgjkcykMedkP3HuV/ujBUduyMh2jl8cNpTPfl/67quC4mlQDsSdI1a
OHxtzVu6aHHBGq2j4fGzz9djpgP2dIuoeb/HUDcOb0ohVwPO6nc5I87MmwuwhqjS
XwH6Tfa9XzeZ4P9QOuvnoyFqg2x9N/luL4wuPf9ep1fna7ZAuExwRgHE8cGbUp3A
UHQu2r6dmq0pzW5ZCY/r6kgm35MFC6wj1czc7c5hvIi4GZn0Y/pZ9Q/PeR0yWbB2
=cDI/
-----END PGP MESSAGE-----`;
    gpg.decrypt(message).then(res => {
      console.log(res);
    })
    .catch(e => console.error(e));
  });

app.parse(process.argv);

if (!app.args.length) app.help();