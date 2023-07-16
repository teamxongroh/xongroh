/**
 * Generate password from allowed word
 */
import crypto from 'crypto';

const digits = '0123456789';
const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
const specialChars = '#!&@';

const generate = function (length, options) {
  length = length || 10;
  const generateOptions = options || {};

  generateOptions.digits = Object.prototype.hasOwnProperty.call(generateOptions, 'digits')
    ? options.digits
    : true;
  generateOptions.lowerCaseAlphabets = Object.prototype.hasOwnProperty.call(
    generateOptions,
    'lowerCaseAlphabets'
  )
    ? options.lowerCaseAlphabets
    : true;
  generateOptions.upperCaseAlphabets = Object.prototype.hasOwnProperty.call(
    generateOptions,
    'upperCaseAlphabets'
  )
    ? options.upperCaseAlphabets
    : true;
  generateOptions.specialChars = Object.prototype.hasOwnProperty.call(generateOptions, 'specialChars')
    ? options.specialChars
    : true;

  const allowsChars =
    (generateOptions.digits && digits) +
    (generateOptions.lowerCaseAlphabets && lowerCaseAlphabets) +
    (generateOptions.upperCaseAlphabets && upperCaseAlphabets) +
    (generateOptions.specialChars && specialChars);
  let password = '';
  while (password.length < length) {
    const charIndex = crypto.randomInt(0, allowsChars.length);
    if (password.length === 0 && generateOptions.digits === true && allowsChars[charIndex] === '0') {
      continue;
    }
    password += allowsChars[charIndex];
  }
  return password;
};

export default {
  generate
};
