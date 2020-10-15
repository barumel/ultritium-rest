function MethodNotAllowedError(method) {
  const error = new Error(`Method ${method} is not allowed on this service!`);
  error.statusCode = 405;

  return error;
}

module.exports = MethodNotAllowedError;
