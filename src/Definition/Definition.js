const { get, capitalize } = require('lodash');

const validator = require('../Validator/Validator');
const Fields = require('./Fields');

function Definition(definition = {}) {
  const fields = Fields(definition);

  function getUri() {
    return get(definition, 'uri', '');
  }

  function getServiceId() {
    return get(definition, 'id');
  }

  function getMethods() {
    return get(definition, 'methods', []);
  }

  function getFields() {
    return fields;
  }

  function getCollectionName() {
    return get(definition, 'collection', capitalize(get(definition, 'id')));
  }

  function validate() {
    const validations = {
      validations: {
        id: {
          type: 'string',
          required: true
        },
        uri: {
          type: 'string',
          required: true,
          validations: {
            isURL: [{ require_protocol: false, require_host: false }]
          }
        },
        methods: {
          type: 'array',
          required: true,
          validations: {
            isSupportedMethod: []
          }
        },
        collection: {
          type: 'string',
          require: false
        },
        fields: {
          type: 'object',
          require: 'true',
          validations: fields.getDefinitionValidations()
        }
      }
    };

    const result = validator.validate(validations, definition);

    return result;
  }


  return Object.freeze({
    getServiceId,
    getUri,
    getMethods,
    getFields,
    getCollectionName,
    validate
  });
}

module.exports = Definition;
