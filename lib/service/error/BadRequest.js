const Proto = require('./proto');

class BadRequestError extend Proto {
  constructor(message='Could not perform your request!', info={}) {
    super(400, message, info);
  }
}
