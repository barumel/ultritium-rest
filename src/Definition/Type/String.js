const { defaultsDeep } = require('lodash');

const Type = require('./Type');

function TypeBoolean(props = {}) {
  const defaults = {
    type: 'boolean',
    required: false,
    default: undefined,
    validations: {
      isAlphanumeric: []
    }
  };

  const proto = Type(defaultsDeep({}, props, defaults));

  function getDefinitionValidations() {
    return {
      ...proto.getDefinitionValidations(),
      default: {
        type: 'string',
        required: false,
        validations: {
          isAlphanumeric: []
        }
      }
    }
  }

  return Object.freeze({
    ...proto,
    type: 'string',
    getDefinitionValidations
  });
}

module.exports = TypeBoolean;
