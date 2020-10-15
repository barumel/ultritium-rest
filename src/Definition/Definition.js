const { get } = require('lodash');

const validator = require('../Validator/Validator');
const Fields = require('./Fields');

function Definition(definition = {}) {
  const fields = Fields(definition);

  function getUri() {
    return get(definition, 'uri', '');
  }

  function getMethods() {
    return get(definition, 'methods', []);
  }

  function validate() {
    const validations = {
      validations: {
        uri: {
          type: 'string',
          required: true
        },
        methods: {
          type: 'array',
          required: true
        },
        fields: {
          type: 'object',
          require: 'true',
          validations: fields.getDefinitionValidations()
        }
      }
    }

    const result = validator.validate(validations, definition);

    return result;
  }


  return Object.freeze({
    getUri,
    getMethods,
    validate
  });
}

module.exports = Definition;
