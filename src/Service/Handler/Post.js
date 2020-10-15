const { get, isUndefined } = require('lodash');

const Handler = require('./Handler');
const IdPropertyNotAllowedError = require('../../Error/IdPropertyNotAllowed');

function PostHandler() {
  const proto = Handler({ method: 'GET' });

  async function handle(req, res, next) {
    try {
      const payload = req.body;

      if (!isUndefined(get(payload, 'id'))) {
        const err = IdPropertyNotAllowedError();
        return next(err);
      }

      const service = this.getService();
      const Model = service.getModel();

      const record = new Model(payload);
      const result = await record.save();

      res.locals.result = result;

      return next();
    } catch (err) {
      return next(err);
    }
  }

  return Object.freeze({
    ...proto,
    handle
  });
}

module.exports = PostHandler;
