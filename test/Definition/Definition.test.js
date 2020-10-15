const expect = require('expect');
const util = require('util')

const Definition = require('../../src/Definition/Definition');


describe('Test definition factory', () => {
  describe('Test validate function', () => {
    it('Must return validation errors', () => {
      const definiton = {
        id: 'foo',
        methods: ['GET', 'FOO'],
        fields: {
          id: {
            type: 'string'
          },
          firstName: {
            type: 'string',
            required: true
          },
          lastName: {
            type: 'string',
            required: true,
            validations: {
              isFoo: []
            }
          }
        }
      };

      const expected = {
        uri: {
          required: {
            valid: false,
            value: undefined,
            message: 'The provided value is not valid!'
          }
        },
        methods: {
          '1': {
            isSupportedMethod: {
              valid: false,
              item: 'FOO',
              args: [],
              message: 'The given http method is not supported!'
            }
          }
        }
      };

      const d = Definition(definiton);

      expect(d.validate()).toEqual(expected);
    });

    it('Must not return validation errors', () => {
      const definiton = {
        id: 'foo',
        uri: '/foo/bar',
        methods: ['GET'],
        fields: {
          id: {
            type: 'string'
          },
          firstName: {
            type: 'string',
            required: true
          },
          lastName: {
            type: 'string',
            required: true,
            validations: {
              isFoo: []
            }
          }
        }
      };

      const d = Definition(definiton);

      expect(d.validate()).toEqual({});
    });
  });
});
