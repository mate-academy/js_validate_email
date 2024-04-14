'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail)
      .toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('testemail1@gmail.com');

    expect(typeof result)
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    const validEmail = validateEmail('TeSt1-_.y@gmail.com');

    expect(validEmail)
      .toBeTruthy();
  });

  it(`should return 'false' for the email without @`, () => {
    const invalidEmail = validateEmail('test838gmail.com');

    expect(invalidEmail)
      .toBeFalsy();
  });

  it(`should return 'false' for the email with . as first character`, () => {
    const invalidEmail = validateEmail('.tes-t@gmail.com');

    expect(invalidEmail)
      .toBeFalsy();
  });

  it(`should return 'false' for the email with . as last character`, () => {
    const invalidEmail = validateEmail('tes-1t.@gmail.com.');

    expect(invalidEmail)
      .toBeFalsy();
  });

  it(`should return 'false' for the email with double dots`, () => {
    const invalidEmail = validateEmail('tes1:-t@gmail.com.');

    expect(invalidEmail)
      .toBeFalsy();
  });

  it(`should return 'false' for the email with not allowed characters`, () => {
    const invalidEmail = validateEmail('tes1!$%+-t@gmail.com.');

    expect(invalidEmail)
      .toBeFalsy();
  });
});
