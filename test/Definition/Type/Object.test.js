const expect = require('expect');

const TypeObject = require('../../../src/Definition/Type/Object');

describe('Test type email factory', () => {
  it('Must apply the correct defaults', () => {
    const expected = {
      type: 'object',
      required: false,
      default: undefined,
      validations: { isPlainObject: [] }
    };

    const type = TypeObject({});

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
        type: 'object',
        required: false,
        validations: { isPlainObject: [] }
      }
    };

    const type = TypeObject({});

    expect(type.getDefinitionValidations()).toEqual(expected);
  });
})
