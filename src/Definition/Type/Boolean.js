const { defaultsDeep } = require('lodash');

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
      type: {
        type: 'string',
        required: true,
        validations: {
          isSupportedDefinitionType: []
        }
      },
      required: {
        type: 'boolean',
        required: false
      },
      default: {
        type: 'boolean',
        required: false,
        validations: {
          isBoolean: []
        }
      },
      validations: {
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
    type: 'boolean',
    getDefinitionValidations
  })
}

module.exports = TypeBoolean;
