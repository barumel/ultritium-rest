const expect = require('expect');

const Type = require('../../../src/Definition/Type/Type');

describe('Test type proto factory', () => {
  it('Must return the correct definiton validations', () => {
    const expected = {
      type: {
        type: 'string',
        required: true,
        validations: {
          isSupportedDefinitionType: []
        }
      },
      required: {
        type: 'boolean',
        required: false
      },
      validations: {
        type: 'object',
        required: false
      }
    };

    const type = Type('proto', {});

    expect(type.getDefinitionValidations()).toEqual(expected);
  });
})
