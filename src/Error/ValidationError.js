function ValidationError(result) {
  const error = new Error('Validation failed!');
  error.statusCode = 400;
  error.result = result;

  return error;
}

return ValidationError;
