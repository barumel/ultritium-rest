const expect = require('expect');

const TypeEmail = require('../../../src/Definition/Type/Email');

describe('Test type email factory', () => {
  it('Must apply the correct defaults', () => {
    const expected = {
      type: 'email',
      required: false,
      default: undefined,
      validations: { isEmail: [] }
    };

    const type = TypeEmail({});

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
      default: { type: 'email', required: false, validations: { isEmail: [] } }
    };

    const type = TypeEmail({});

    expect(type.getDefinitionValidations()).toEqual(expected);
  });
})
