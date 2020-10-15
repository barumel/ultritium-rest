const Handler = require('./Handler');

function Get() {
  const proto = Handler({ method: 'GET' });

  function handle(req, res, next) {

  }

  return Object.freeze({
    ...proto,
    handle
  });
}

module.exports = Get;
