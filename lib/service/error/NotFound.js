const Proto = require('./proto.js');

class NotFoundError extends Proto {
  constructor(message, info) {
    super(404, message, info);
  }
}

module.exports = NotFoundError;
