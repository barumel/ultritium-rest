const EventEmitter = require('events');
const NotFoundError = require('./error/NotFound.js');

class Service extends EventEmitter {
  /**
   * @param {Object} definition Instance of Definition
   *
   * @return void
   */
  constructor(definition) {
    if (!definition) throw new Error(`You must pass an instance of Definition to the service constructor!`);
    
    super();

    this.handlers = {};
    this.definition = definition;
  }

  /**
   * Try to find a handler for the given request and call it
   *
   * @param {String}   method HTTP method (e.g. GET/PUT)
   * @param {Object}   res    Response object from express
   * @param {Object}   req    Request object from express
   * @param {Function} next   Next function from express
   *
   * @return void
   */
  handle(method, req, res, next) {
    method = method.toUpperCase();
    const handler = this.handlers[method];

    if (!handler) {
      const err = new NotFoundError(`No handler for method ${method} on service ${definition.getUri()} registered!`, this);
      return next(err, req, res, next);
    }

    return handler.handle(req, res, next);
  }

  /**
   * Regsiter a handler for the given http method
   *
   * @param  {String}  method  HTTP method
   * @param  {Handler} handler Handler instance
   *
   * @return {Service} this This instance
   */
  registerHandler(method, handler) {
    const { definition, handlers } = this;
    method = method.toUpperCase();

    if (handlers[method]) {
      throw new Error(`Handler for method ${method} already registered for service ${definition.getUri()}`);
    }

    return this;
  }

  /**
   * Unregister the handler for the given http method
   *
   * @param  {String} method HTTP method
   *
   * @return {Service} this This instance
   */
  unregisterHandler(method) {
    method = method.toUpperCase();

    delete this.handlers[method];

    return this;
  }

  /**
   * Replace the handler for the given http method
   *
   * @param  {String}  method  HTTP method
   * @param  {Handler} handler Handler instance
   *
   * @return {Service} this This instance
   */
  replaceHandler(method, handler) {
    method = method.toUpperCase();

    this.unregisterHandler(method);
    this.registerHandler(method, handler);

    return this;
  }

  getUri() {
    const { definition } = this;

    return definition.getUri();
  }

  getDefinition() {
    return this.definition;
  }
}

module.exports = Service;
