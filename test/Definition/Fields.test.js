const expect = require('expect');
const util = require('util')

const Fields = require('../../src/Definition/Fields');

const definiton = {
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

describe('Test fields factory', () => {
  it('Must return the correct validation definition for the given fields', () => {
    const expected = {
      id: {
        type: 'object',
        validations: {
          type: {
            type: 'string',
            required: true,
            validations: { isSupportedDefinitionType: [] }
          },
          required: { type: 'boolean', required: false },
          validations: {
            type: 'object',
            required: false
          },
          default: {
            type: 'string',
            required: false,
            validations: { isAlphanumeric: [] }
          }
        }
      },
      firstName: {
        type: 'object',
        validations: {
          type: {
            type: 'string',
            required: true,
            validations: { isSupportedDefinitionType: [] }
          },
          required: { type: 'boolean', required: false },
          validations: {
            type: 'object',
            required: false
          },
          default: {
            type: 'string',
            required: false,
            validations: { isAlphanumeric: [] }
          }
        }
      },
      lastName: {
        type: 'object',
        validations: {
          type: {
            type: 'string',
            required: true,
            validations: { isSupportedDefinitionType: [] }
          },
          required: { type: 'boolean', required: false },
          validations: {
            type: 'object',
            required: false
          },
          default: {
            type: 'string',
            required: false,
            validations: { isAlphanumeric: [] }
          }
        }
      }
    }
    const fields = Fields(definiton);

    expect(fields.getDefinitionValidations()).toEqual(expected);
  });
});
