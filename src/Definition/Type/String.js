const { defaultsDeep } = require('lodash');

function TypeBoolean(props = {}) {
  const defaults = {
    type: 'boolean',
    required: false,
    default: undefined,
    validations: {
      isBoolean: []
    }
  };

  return defaultsDeep({}, props, defaults);
}

module.exports = TypeBoolean;
