'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email(test_1@mail.com)`, () => {
    expect(validateEmail('test_1@mail.com')).toBe(true);
  });

  it(`should return 'false' if the @ symbol is missing
     (test_1mail.com)`, () => {
    expect(validateEmail('test_1mail.com')).toBe(false);
  });

  it(`should return 'false' if the first part of the email begins with the "."
     (.test_1@mail.com)`, () => {
    expect(validateEmail('.test_1@mail.com')).toBe(false);
  });

  it(`should return 'false' if the domain name begins with a "."
     (test_1@.mail.com)`, () => {
    expect(validateEmail('test_1@.mail.com')).toBe(false);
  });

  it(`should return 'false' if the email contains Cyrillic letters
     (тest_1@mail.com)`, () => {
    expect(validateEmail('тest_1@mail.com')).toBe(false);
  });

  // write more tests here
});
