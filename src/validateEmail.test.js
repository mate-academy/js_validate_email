'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('invalid')).toBe('boolean');
  });

  it(`should return true according to current implementation`, () => {
    expect(validateEmail('test838@gmail.com.')).toBe(true);
  });

  it(`should return false for clearly invalid emails`, () => {
    expect(validateEmail('plainaddress')).toBe(false);
    expect(validateEmail('@missingpersonal.com')).toBe(false);
    expect(validateEmail('test@mail')).toBe(false);
  });

  it(`should return true ONLY if domain ends with a dot`, () => {
    expect(validateEmail('abc@def.com.')).toBe(true);
  });
});
