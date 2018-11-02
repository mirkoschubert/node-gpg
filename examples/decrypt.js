/**
 * node-gpg by Mirko Schubert <office@mirkoschubert.de>
 * MIT licensed
 * 
 * This is an example how to derypt a message with Promises.
 * In order for this to work you should replace the message with one correspondig to your gpg key!
 */

var gpg = require('../lib/gpg');

const message = `
-----BEGIN PGP MESSAGE-----

hQIMAzrXNlaMG+3wAQ//UrOJ+IRSEOA6WSK/IwaBk33tBFVOqU50aEwS4WmaAziE
xnTVBysFKTjHhEUZbVUn+2gcC8mOQjAt8j+K9HCYTapAgpOtjJwX0AQHzBqRwXu3
QcS8PjVY3+0fGIr9uAStFu5+j17tr8HbBQvjf6wTbLdui7x0xvd1pkcS9HHscgu5
sMabRB1Suf/Xc2+F7UrHII7/3u7hVtCgoJvdVwifWUYJiojEavi3cQhgSb2pP86o
IT4zgqomJzOwlS4wDc/T6i2L5du+yc8nhMjcCExKFy5a+FtPSbhN1IwpSn/9Uvmv
+Q3YppipOIV2RCXCs+EELY1gc9+A9R01UTCl6+OaKfWaCpD8lvYXQgJCNiVKstzk
wLF87oNKhlkOW9bKTa+H0/sZqrLcXABHjUSJ6LroxtsB9w/p0V05TQwce+TEJjxE
ZBE1Z+r4Z2iKeG3BJUnVXaWv+zHuc+mTnwTfnP8OnBUGvJaIKYZG+IXgmPuBkies
B6rTBQxmmlI/+BsYnUx4zMGAS2Xw8i35a4l2eUa2cV95C5ncnAFFRPQuacdfEz+M
QvN86s+UvwM3WYJsD9q8OZ8GpWWeXm2iomAxvIQCxlYfUKsRzhJRNtVhBvGe4vy7
P5GgG15WH8T+7iHnRvsWFWsGOekndpZhkJ60kbQyLwGYLng9KwjOf0twLrvbWovS
XwGp7q6R8K3Brv1I6hxHrLu3wq616LPp/hm/8U16sfMv91dUdGU1ta6YneD9PS3P
yNKHeoZ7TOKVI8CEkI/mk5zdcQzijIlbILqduX3EXSGhCnBnbOAUqn9Badd3khy7
=rWbx
-----END PGP MESSAGE-----
`;

gpg.decrypt(message).then(res => {
  console.log(res);
}).catch(e => console.error(e));