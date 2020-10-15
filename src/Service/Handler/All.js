const Handler = require('./Handler');

function AllHandler() {
  const proto = Handler({ method: 'ALL' });

  async function handle(req, res, next) {
    try {
      const service = this.getService();
      const Model = service.getModel();

      const result = await Model.find();

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

module.exports = AllHandler;
