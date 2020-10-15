const { isArray, isString, every } = require('lodash');

const supported = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

function isSupportedHttpMethod(value) {
  if (!isString(value) && !isArray(value)) return false;
  if (isString(value)) value = [value];

  return every(value, (m) => supported.includes(m.toUpperCase()));
}

module.exports = isSupportedHttpMethod;
