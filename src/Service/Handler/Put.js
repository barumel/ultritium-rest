const Handler = require('./Handler');

function PutHandler() {
  const proto = Handler({ method: 'GET' });

  async function handle(req, res, next) {
    try {
      const id = req.params.id;
      const payload = req.body;

      // Make sure we don't overwrite an existing record if id from params differs to id from payload
      const data = {
        ...payload,
        _id: id
      };

      const service = this.getService();
      const Model = service.getModel();

      await Model.replaceOne({ _id: id }, data, { new: true, upsert: true });
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

module.exports = PutHandler;
