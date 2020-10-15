const { isArray, isString, every } = require('lodash');

const supported = ['ALL', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

function isSupportedMethod(value) {
  if (!isString(value) && !isArray(value)) return false;
  if (isString(value)) value = [value];

  return every(value, (m) => supported.includes(m.toUpperCase()));
}

module.exports = isSupportedMethod;
