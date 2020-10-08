const { isPlainObject } = require('lodash');

function isPlainObjectValidation(value) {
  return isPlainObject(value);
}

module.exports = isPlainObjectValidation;
