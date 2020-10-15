const { defaultsDeep } = require('lodash');

const Type = require('./Type');

function TypeNumber(props = {}) {
  const defaults = {
    type: 'number',
    required: false,
    default: undefined,
    validations: {
      isNumeric: []
    }
  };

  const proto = Type(defaultsDeep({}, props, defaults));

  function getDefinitionValidations() {
    return {
      ...proto.getDefinitionValidations(),
      default: {
        type: 'number',
        required: false,
        validations: {
          isNumeric: []
        }
      }
    }
  }

  return Object.freeze({
    ...proto,
    type: 'number',
    getDefinitionValidations
  });
}

module.exports = TypeNumber;
