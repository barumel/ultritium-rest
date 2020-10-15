const Definition = require('../Definition/Definition');

function Service(serviceDefinition) {
  const definition = Definition(serviceDefinition);

  function getDefinition() {
    return definition;
  }

  return Object.freeze({
    getDefinition
  });
}

module.exports = Service;
