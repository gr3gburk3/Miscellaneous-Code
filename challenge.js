'use strict'

const letters = {
  Plain: 'abcdefghijklmnopqrstuvwxyz'
}

const ROT13Cipher = function () {
}
ROT13Cipher.encode = plainText => {
  let cipherText = ''
  for (let i = 0; i < plainText.length; i++) {
    const currentIndex = letters.Plain.indexOf(plainText[i])
    if (currentIndex === -1) {
      cipherText += plainText[i]
      continue
    } if (currentIndex < 13) {
      cipherText += letters.Plain[currentIndex + 13]
    } else {
      cipherText += letters.Plain[currentIndex - 13]
    }
  }

  // console.log(letters.Plain.indexOf(plainText[i]))

  return cipherText
}

ROT13Cipher.decode = ROT13Cipher.encode


// create function that takes string as a paramneter
// shift character 13 spaces








// let cipher = require('./lib/challenge');
ROT13Cipher.encode('hello'); //=> 'uryyb'
ROT13Cipher.encode('jeff'); //=> 'wrss'
module.exports = ROT13Cipher
