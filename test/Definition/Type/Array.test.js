const expect = require('expect');

const TypeArray = require('../../../src/Definition/Type/Array');

describe('Test type array factory', () => {
  it('Must apply the correct defaults', () => {
    const expected = {
      type: 'array',
      required: false,
      default: undefined,
      validations: { isArray: [] }
    };

    const type = TypeArray({});

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
      default: { type: 'array', required: false, validations: { isArray: [] } }
    };

    const type = TypeArray({});

    expect(type.getDefinitionValidations()).toEqual(expected);
  });
})
