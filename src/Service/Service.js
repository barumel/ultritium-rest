

function Service(definition) {
  let model;

  function getDefinition() {
    return definition;
  }

  function getModel() {
    return model;
  }

  return Object.freeze({
    getDefinition,
    getModel
  });
}

module.exports = Service;
