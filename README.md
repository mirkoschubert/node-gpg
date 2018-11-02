# node-gpg

**node-gpg** is a wrapper for Node.js so you can use [GnuPGP](https://www.gnupg.org) in your applications. I was working on an Mailspring plugin for GPG and needed a connection to the GPG keyring. Since most of the wrappers didn't work for me, I simply wrote one myself.

*Please note, that this node module is still work in progress! I tested it with my own keyring on macOS and for me it's working so far. But I can't guarantee that it's working for everyone else.*

## Usage

To install this package is easy: Simply use your favorite package manager and type the following command:

```
npm install node-gpg
```

There are [some examples](https://github.com/mirkoschubert/node-gpg/tree/master/examples) for encrypting, decrypting, signing and verifying messages. Please use them to learn how to use the API of this module. Promises have been made, so async/ await should work just fine. :smirk:

## Credits

This package is inspired by, but not based on [drudge/node-gpg](https://github.com/drudge/node-gpg), but without him I wouldn't have written this code so fast.