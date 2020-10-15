function IdPropertyNotAllowedError() {
  const error = new Error('ID property must not be present in payload on POST');
  error.statusCode = 400;

  return error;
}

module.exports = IdPropertyNotAllowedError;
