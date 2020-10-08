const { defaultsDeep } = require('lodash');

function TypeNumber(props = {}) {
  const defaults = {
    type: 'number',
    required: false,
    default: undefined,
    validations: {
      isNumeric: []
    }
  };

  return defaultsDeep({}, props, defaults);
}

module.exports = TypeNumber;
