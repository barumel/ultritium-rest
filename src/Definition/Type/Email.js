const { defaultsDeep } = require('lodash');

const Type = require('./Type');

function TypeEmail(props = {}) {
  const defaults = {
    type: 'email',
    required: false,
    default: undefined,
    validations: {
      isEmail: []
    }
  };

  const proto = Type(defaultsDeep({}, props, defaults));

  function getDefinitionValidations() {
    return {
      ...proto.getDefinitionValidations(),
      default: {
        type: 'email',
        required: false,
        validations: {
          isEmail: []
        }
      }
    }
  }

  return Object.freeze({
    ...proto,
    type: 'email',
    getDefinitionValidations
  });
}

module.exports = TypeEmail;
