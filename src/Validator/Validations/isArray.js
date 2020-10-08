const { isArray } = require('lodash');

function isArrayValidation(value) {
  return isArray(value);
}

module.exports = isArrayValidation;
