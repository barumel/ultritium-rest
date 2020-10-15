const { has, get } = require('lodash');

const AllHandler = require('./All');
const DeleteHandler = require('./Delete');
const GetHandler = require('./Get');
const PostHandler = require('./Post');
const PutHandler = require('./Put');

const mapping = {
  ALL: AllHandler,
  DELETE: DeleteHandler,
  GET: GetHandler,
  POST: PostHandler,
  PUT: PutHandler
};

module.exports = function getHandler(method, props = {}) {
  const m = method.toUpperCase();

  if (!has(mapping, m)) {
    throw new Error(`No default handler for method ${m} registered!`);
  }

  return get(mapping, m, props);
}
