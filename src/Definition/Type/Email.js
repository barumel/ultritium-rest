const { defaultsDeep } = require('lodash');

function TypeEmail(props = {}) {
  const defaults = {
    type: 'email',
    required: false,
    default: undefined,
    validations: {
      isEmail: []
    }
  };

  return defaultsDeep({}, props, defaults);
}

module.exports = TypeEmail;
