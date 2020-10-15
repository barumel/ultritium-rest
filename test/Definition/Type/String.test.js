const expect = require('expect');

const TypeString = require('../../../src/Definition/Type/String');

describe('Test type email factory', () => {
  it('Must apply the correct defaults', () => {
    const expected = {
      type: 'boolean',
      required: false,
      default: undefined,
      validations: { isAlphanumeric: [] }
    };

    const type = TypeString({});

    expect(type.getDefinition()).toEqual(expected);
  });

  it('Must return the correct definiton validations', () => {
    const expected = {
      type: {
        type: 'string',
        required: true,
        validations: { isSupportedDefinitionType: [] }
      },
      required: { type: 'boolean', required: false },
      validations: {
        type: 'object',
        required: false,
        validations: { isPlainObject: [] }
      },
      default: {
        type: 'string',
        required: false,
        validations: { isAlphanumeric: [] }
      }
    };

    const type = TypeString({});

    expect(type.getDefinitionValidations()).toEqual(expected);
  });
})
