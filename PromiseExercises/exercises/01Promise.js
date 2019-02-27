const crypto = require('crypto');

const makeSecureRandom = (size) => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buf) => {
            if (err) {
                return reject(err);
            }
            return resolve(`length: ${buf.length*2}, random: ${buf.toString('hex')}`);
        })
    })
}

var promise1 = makeSecureRandom(24);
var promise2 = makeSecureRandom(20);
var promise3 = makeSecureRandom(16);
var promise4 = makeSecureRandom(12);
var promise5 = makeSecureRandom(8);
var promise6 = makeSecureRandom(4);

Promise.all([promise1, promise2, promise3, promise4, promise5, promise6]).then(function(values) {
    console.log(values);
});

module.exports = { makeSecureRandom: makeSecureRandom }