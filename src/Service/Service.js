const { has, get, set, isUndefined } = require('lodash');

const Model = require('../Model/Model');
const createHandler = require('./Handler/index');

function Service(definition) {
  let model;

  const handlers = definition.getMethods()
    .reduce((result, method) => {
      result[method] = createHandler(method);

      return result;
    }, {});

  function getDefinition() {
    return definition;
  }

  function getModel() {
    if (isUndefined(model)) model = Model(definition);

    return model;
  }

  function getSupportedMethods() {
    return definition.getMethods();
  }

  function getHandler(method) {
    const handler = get(handlers, method);

    return handler;
  }

  function registerHandler(method, handler) {
    if (has(handlers, method)) {
      throw new Error(`Handler for method ${method} on service with id ${definition.getServiceId()} already registered!`)
    }

    set(handlers, method, handler);
  }

  function replaceHandler(method, handler) {
    set(handlers, method, handler);
  }

  return Object.freeze({
    getDefinition,
    getModel,
    getHandler,
    getSupportedMethods,
    registerHandler,
    replaceHandler
  });
}

module.exports = Service;
