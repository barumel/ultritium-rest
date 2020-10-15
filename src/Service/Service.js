

function Service(definition) {
  function getDefinition() {
    return definition;
  }

  return Object.freeze({
    getDefinition
  });
}

module.exports = Service;
