const fs = require('fs-extra');
const path = require('path');
const util = require('util')
const { get, isArray, isString, flattenDeep, compact, isEmpty, reduce } = require('lodash');

const Definition = require('../../Definition/Definition');
const Service =  require('../Service');

function ServiceLoaderFileSystem(config) {
  let definitionPaths = get(config, 'path', []);
  if (!isArray(definitionPaths) && !isString(definitionPaths)) {
    throw new Error(`The given path must either be a path to the services folder or an array with paths to the service folders!`);
  }
  if (!isArray(definitionPaths)) definitionPaths = [definitionPaths];


  function isDir(dirPath) {
    return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
  }

  function getDefinitionFiles(dirPath) {
    const files = fs.readdirSync(dirPath);

    const definitions = files.map((file) => {
      const filePath = path.join(dirPath, file);

      if (isDir(filePath)) {
        return getDefinitionFiles(filePath);
      }

      return file === 'definition.json'
        ? filePath
        : undefined;
    });

    return compact(flattenDeep(definitions));
  }

  async function load() {
    const definitions = flattenDeep(definitionPaths.map((dirPath) => getDefinitionFiles(dirPath)));

    return reduce(definitions, (result, d) => {
      const definition = Definition(fs.readJsonSync(d));

      const validationResult = definition.validate();
      if (!isEmpty(validationResult)) {
        console.log(util.inspect(validationResult, false, null, true))
        throw new Error(`The definition for service with id ${definition.getServiceId()} is not valid!`);
      }

      const service = Service(definition);

      // To be implemented: Register custom handler here. Check the service folder for a handler folder an use add / replace handler on service instance

      result[definition.getServiceId()] = service;

      return result;
    }, {});
  }

  return Object.freeze({
    load
  });
}

module.exports = ServiceLoaderFileSystem;
