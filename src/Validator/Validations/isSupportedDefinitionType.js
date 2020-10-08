const supportedTypes = [
  'string',
  'number',
  'boolean',
  'date',
  'email',
  'object',
  'array'
];

function isSupportedDefinitionTypeValidation(value) {
  return supportedTypes.includes(value);
}

module.exports = isSupportedDefinitionTypeValidation;
