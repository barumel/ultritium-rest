const { defaultsDeep, cloneDeep } = require('lodash');

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
        type: 'string',
        required: false,
        validations: {
          isString: []
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
    type: 'array',
    getDefinitionValidations
  });
}

module.exports = TypeArray;
