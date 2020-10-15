const { DefaultValidator } = require('@ultritium/validate');

const {
  isPlainObjectValidation,
  isArrayValidation,
  isSupportedDefinitionTypeValidation,
  isSupportedHttpMethodValidation
} = require('./Validations/index');

const validator = DefaultValidator();

const validationProvider = validator.getProvider('validation');
const messageProvider = validator.getProvider('message');

// Add custom validations
validationProvider.addValidation('isPlainObject', isPlainObjectValidation);
validationProvider.addValidation('isArray', isArrayValidation);
validationProvider.addValidation('isSupportedDefinitionType', isSupportedDefinitionTypeValidation);
validationProvider.addValidation('isSupportedHttpMethod', isSupportedHttpMethodValidation);

// Add customer messages
messageProvider.addMessage('isPlainObject', 'Value must be a plain object!');
messageProvider.addMessage('isArray', 'Value must be an array!');
messageProvider.addMessage('isSupportedDefinitionType', 'The given definition type is not supported!');
messageProvider.addMessage('isSupportedHttpMethod', 'The given http method is not supported!');

module.exports = validator;
