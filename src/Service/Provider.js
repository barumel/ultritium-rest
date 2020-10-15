const { has, get, set } = require('lodash');

function ServiceProvider() {
  const services = {};

  function hasService(id) {
    return has(services, id);
  }

  function hasServiceByUri(uri) {

  }

  function getService(id) {
    return get(services, id);
  }

  function getServiceByUri(uri) {

  }

  function registerService(id, service) {
    if (has(services, id)) {
      throw new Error(`Service with id ${id} already registered!`);
    }

    set(services, id, service);
  }

  function replaceService(id, service) {
    set(services, id, service);
  }

  function removeService(id) {
    if (has(services, id)) {
      delete services[id];
    }
  }

  return Object.freeze({
    hasService,
    hasServiceByUri,
    getService,
    getServiceByUri,
    registerService,
    replaceService,
    removeService
  });
}

module.exports = ServiceProvider();
