const expect = require('expect');
const util = require('util');
const mongoose = require('mongoose');

const Definition = require('../../src/Definition/Definition');
const Service = require('../../src/Service/Service');

describe('Test service factory', () => {
  describe('Test getModel function', () => {
    it('Must return a mongoose model based on the given definition', () => {
      const d = {
        id: 'foo',
        uri: '/foo/bar',
        methods: ['GET'],
        fields: {
          firstName: {
            type: 'string'
          },
          lastName: {
            type: 'string'
          },
          age: {
            type: 'number'
          }
        }
      };

      const definition = Definition(d);
      const service = Service(definition);
      const model = service.getModel();

      expect(model.prototype).toBeInstanceOf(mongoose.Model);
    });
  });
});
