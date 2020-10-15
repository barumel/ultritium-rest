const { isUndefined } = require('lodash');

const Model = require('../Model/Model');

function Service(definition) {
  let model;

  function getDefinition() {
    return definition;
  }

  function getModel() {
    if (isUndefined(model)) model = Model(definition);
    
    return model;
  }

  return Object.freeze({
    getDefinition,
    getModel
  });
}

module.exports = Service;
