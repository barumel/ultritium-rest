const { defaultsDeep } = require('lodash');

const Type = require('./Type');

function TypeObject(props = {}) {
  const defaults = {
    type: 'object',
    required: false,
    default: undefined,
    validations: {
      isPlainObject: []
    }
  };

  const proto = Type(defaultsDeep({}, props, defaults));

  function getDefinitionValidations() {
    return {
      ...proto.getDefinitionValidations(),
      default: {
        type: 'object',
        required: false,
        validations: {
          isPlainObject: []
        }
      }
    }
  }

  return Object.freeze({
    ...proto,
    type: 'object',
    getDefinitionValidations
  });
}

module.exports = TypeObject;
