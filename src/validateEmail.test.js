'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@example.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    const validEmail = 'test838@gmail.com';

    expect(validateEmail(validEmail)).toBeTruthy();
  });

  it(`should return 'false' for an email 
  missing the @ symbol`, () => {
    const invalidEmail = 'testexample.com';

    expect(validateEmail(invalidEmail)).toBeFalsy();
  });

  it(`should return 'false' for an email 
  starting with a dot`, () => {
    const invalidEmail = '.test@example.com';

    expect(validateEmail(invalidEmail)).toBeFalsy();
  });

  it(`should return 'false' for an email
   ending with a dot`, () => {
    const invalidEmail = 'test.@example.com';

    expect(validateEmail(invalidEmail)).toBeFalsy();
  });

  it(`should return 'false' for an email with 
  consecutive dots`, () => {
    const invalidEmail = 'test..example.com';

    expect(validateEmail(invalidEmail)).toBeFalsy();
  });

  it(`should return 'false' for an email with
   disallowed characters`, () => {
    const invalidEmail = 'test$example.com';

    expect(validateEmail(invalidEmail)).toBeFalsy();
  });
});
