const expect = require('expect');

const TypeNumber = require('../../../src/Definition/Type/Number');

describe('Test type email factory', () => {
  it('Must apply the correct defaults', () => {
    const expected = {
      type: 'number',
      required: false,
      default: undefined,
      validations: { isNumeric: [] }
    };

    const type = TypeNumber({});

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
        required: false
      },
      default: { type: 'number', required: false, validations: { isNumeric: [] } }
    };

    const type = TypeNumber({});

    expect(type.getDefinitionValidations()).toEqual(expected);
  });
})
