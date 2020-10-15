const { get } = require('lodash');

function Handler(props) {
  async function handle(req, res, next) {
    return next();
  }

  function getMethod() {
    return get(props, 'method', 'proto');
  }

  function getService() {
    return get(props, 'service');
  }

  return Object.freeze({
    getMethod,
    getService,
    handle
  });
}

module.exports = Handler;
