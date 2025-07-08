'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@example.com')).toBe('boolean');
  });

  it(`should return true for valid emails`, () => {
    expect(validateEmail('test838@gmail.com.')).toBe(true);
    expect(validateEmail('user.name@example.co.uk.')).toBe(true);
  });

  it(`should return false for emails missing "@"`, () => {
    expect(validateEmail('userexample.com.')).toBe(false);
  });

  it(`should return false for missing username`, () => {
    expect(validateEmail('@example.com.')).toBe(false);
  });

  it(`should return false for emails without domain`, () => {
    expect(validateEmail('user@.')).toBe(false);
  });

  it(`should return false for empty string`, () => {
    expect(validateEmail('')).toBe(false);
  });

  it(`should throw for non-string input`, () => {
    const invalidInputs = [null, undefined, 123, {}, [], true];

    for (const input of invalidInputs) {
      expect(() => validateEmail(input)).toThrow();
    }
  });
});
