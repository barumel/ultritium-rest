const { cloneDeep, get } = require('lodash');

function Type(definition = {}) {
  function getDefinition() {
    return cloneDeep(definition);
  }

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
      validations: {
        type: 'object',
        required: false
      }
    };
  }

  function getType() {
    return this.type;
  }

  function getValidations() {
    return get(definition, 'validations', {});
  }

  return Object.freeze({
    type: 'proto',
    getDefinition,
    getDefinitionValidations,
    getType,
    getValidations
  });
}

module.exports = Type;
