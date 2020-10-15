const { get } = require('lodash');

function Handler(props) {
  function handle(req, res, next) {
    next(req, res);
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
