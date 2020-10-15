const { defaultsDeep } = require('lodash');

const Type = require('./Type');

function TypeArray(props = {}) {
  const defaults = {
    type: 'array',
    required: false,
    default: undefined,
    validations: {
      isArray: []
    }
  };

  const proto = Type(defaultsDeep({}, props, defaults));

  function getDefinitionValidations() {
    return {
      ...proto.getDefinitionValidations(),
      default: {
        type: 'array',
        required: false,
        validations: {
          isArray: []
        }
      }
    }
  }

  return Object.freeze({
    ...proto,
    type: 'array',
    getDefinitionValidations
  });
}

module.exports = TypeArray;
