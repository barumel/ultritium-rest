const { has, get } = require('lodash');

const TypeArray = require('./Array');
const TypeBoolean = require('./Boolean');
const TypeEmail = require('./Email');
const TypeNumber = require('./Number');
const TypeObject = require('./Object');
const TypeString = require('./String');

const map = {
  array: TypeArray,
  boolean: TypeBoolean,
  email: TypeEmail,
  number: TypeNumber,
  object: TypeObject,
  string: TypeString
};

module.exports = function create(type, props) {
  if (!has(map, type)) {
    throw new Error(`Type ${type} not supported!`);
  }

  return get(map, type)(props);
}
