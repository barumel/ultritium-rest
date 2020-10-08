const Validate = require('@ultritium/validate');

const validator = Validator.DefaultValiator();

const baseValidatons = {
  id: {
    type: 'string',
    required: true
  },
  path: {
    type: 'string',
    required: true
  },
  version: {
    type: 'number',
    required: false,
    validations: {
      isFloat: []
    }
  }
}

/**
 * Service definition factory
 *
 * @param {Object} definition Json service definition
 *
 * @constructor
 */
function ServiceDefinition(definition) {

  /**
   * Validate the given service definition
   *
   * @return {Object} result Validation result
   */
  function validate() {

  }

  return Object.freeze({
    validate
  });
}
