const { DefaultValidator } = require('@ultritium/validate');

const {
  isPlainObjectValidation,
  isArrayValidation,
  isSupportedDefinitionTypeValidation
} = require('./Validations/index');

const validator = DefaultValidator();

const validationProvider = validator.getProvider('validation');
const messageProvider = validator.getProvider('message');

// Add custom validations
validationProvider.addValidation('isPlainObject', isPlainObjectValidation);
validationProvider.addValidation('isArray', isArrayValidation);
validationProvider.addValidation('isSupportedDefinitionType', isSupportedDefinitionTypeValidation);

// Add customer messages
messageProvider.addMessage('isPlainObject', 'Value must be a plain object!');
messageProvider.addMessage('isArray', 'Value must be an array!');
messageProvider.addMessage('isSupportedDefinitionType', 'The given definition type is not supported!');

module.exports = validator;
