const expect = require('expect');

const TypeBoolean = require('../../../src/Definition/Type/Boolean');

describe('Test type boolean factory', () => {
  it('Must apply the correct defaults', () => {
    const expected = {
      type: 'boolean',
      required: false,
      default: undefined,
      validations: { isBoolean: [] }
    };

    const type = TypeBoolean({});

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
      default: { type: 'boolean', required: false, validations: { isBoolean: [] } }
    };

    const type = TypeBoolean({});

    expect(type.getDefinitionValidations()).toEqual(expected);
  });
})
