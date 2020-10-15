const { get, reduce, map } = require('lodash');

const create = require('./Type/index');

function Fields(definition = {}) {
  const fields = reduce(get(definition, 'fields', {}), (result, props, id) => {
    const type = get(props, 'type');
    result[id] = create(type, props);

    return result;
  }, {});

  function getById(id) {
    return get(fields, id);
  }

  function getDefinitionValidations() {
    return reduce(fields, (result, field, id) => {
      result[id] = { type: 'object', validations: field.getDefinitionValidations() };

      return result;
    }, {});
  }

  function mapFields(func) {
    return map(fields, func);
  }

  function reduceFields(func) {
    return reduce(fields, func);
  }

  return Object.freeze({
    getById,
    getDefinitionValidations,
    map: mapFields,
    reduce: reduceFields
  });
}

module.exports = Fields;
