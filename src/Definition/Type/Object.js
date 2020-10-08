const { defaultsDeep } = require('lodash');

function TypeObject(props = {}) {
  const defaults = {
    type: 'object',
    required: false,
    default: undefined,
    validations: {
      isPlainObject: []
    }
  };

  return defaultsDeep({}, props, defaults);
}

module.exports = TypeObject;
