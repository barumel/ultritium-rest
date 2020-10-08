const { cloneDeep } = require('lodash');

function Type(definition = {}) {
  function getDefinition() {
    return cloneDeep(definition);
  }

  function getDefinitionValidations() {
    return {};
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
