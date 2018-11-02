/**
 * node-gpg by Mirko Schubert <office@mirkoschubert.de>
 * MIT licensed
 * 
 * This is an example how to verify a message.
 * In order for this to work you should replace the message with a self-signed one!
 */

var gpg = require(__dirname + '/../lib/gpg');

const signed_message = `
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

abcdefghijklmnopqrstuvwxyz1234567890
-----BEGIN PGP SIGNATURE-----

iQJMBAEBCAA2FiEEP8ph2bWbU6yQy3JcOtc2Vowb7fAFAlvcWFEYHG9mZmljZUBt
aXJrb3NjaHViZXJ0LmRlAAoJEDrXNlaMG+3wtFQP/jI5RWycFCje9oLQab9b+4GY
+j11gLbjh14G2hoLhJ0GMxeqbMjxlX4735+7hlNCXzURxlZHjMw3pTYUGwbe1SBr
pl6T4aAjlqHjKc9aqhsuRMvo4EYErlIfCIY1fYyvQak2jN3/sVeTv4VPwDe8PSF1
PU+zEP3dWSyhCYs25hJ/AmBZzbYqsvaiHxFBpHtQsZZQc2eglNCnbDAeu7ObSNUq
FNFTWzkWPqQJn1I0Usg43UhoVK/TS5lsa7cZWXl9sOkfxDTp7jhGoqes7LEn59/O
MVdDNZVh1OmhYNgm5NmfUx9kvJbr1knRvYqgIv468tRMUuL4Ep6wHleQ3PIdpCV4
Ux4h4j5IEBRplBAW6kJCJcsnI8jTGJeSs+W0o+nb5s9cSKIjmUfPsSoqXPnf6zO9
f08yMwS3hSSCfDPeJqC07gCWIVH5sGWXwe4RNxDaM0aXWefCUQ1ulJ8pyO4LVgDw
MOstLAJy64X5LDf4PKWrdQILZ+zrQOtCMVUqmrxd7xLfZ+KhXIgMSmCktyVxn9XV
cE/66hemT75WZV4aIRfWCQ1JPXr/hmja3yhzoNVZHEB7FH4Vwg2pK1xqX0PjyJUU
NPZ0A+bwiK5Q6Tkep/sg8N/l85oHgPj4t3fu1jiLZdB2rpp9QB8h9BPsy5jM/CJJ
g5W0WW+q6+SLq+2jvVxH
=iYGS
-----END PGP SIGNATURE-----
`;


gpg.verify(signed_message).then(res => {
  console.log(res);
}).catch(e => console.error(e));