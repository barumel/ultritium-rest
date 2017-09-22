const assert = require('assertthat');
const Service = require('../../lib/service/Service');

it ('Must throw an error if the constructor is called without a Definition instance.', () => {
  assert.that(() => {
    const service = new Service();
  }).is.throwing('You must pass an instance of Definition to the service constructor!');
});
