const { defaultsDeep } = require('lodash');

const Type = require('./Type');

function TypeBoolean(props = {}) {
  const defaults = {
    type: 'boolean',
    required: false,
    default: undefined,
    validations: {
      isBoolean: []
    }
  };

  const proto = Type(defaultsDeep({}, props, defaults));

  function getDefinitionValidations() {
    return {
      ...proto.getDefinitionValidations(),
      default: {
        type: 'boolean',
        required: false,
        validations: {
          isBoolean: []
        }
      }
    }
  }

  return Object.freeze({
    ...proto,
    type: 'boolean',
    getDefinitionValidations
  });
}

module.exports = TypeBoolean;
