const Handler = require('./Handler');

function GetHandler() {
  const proto = Handler({ method: 'GET' });

  async function handle(req, res, next) {
    try {
      const id = req.params.id;
      const service = this.getService();
      const Model = service.getModel();

      const result = await Model.findById(id);

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

module.exports = GetHandler;
