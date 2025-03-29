/* eslint-disable max-len */
'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@example.com')).toBe('boolean');
  });

  it(`should return 'true' for a valid email`, () => {
    expect(validateEmail('test@example.com')).toBeTruthy();
  });

  it(`should return 'false' for an invalid email without '@'`, () => {
    expect(validateEmail('testexample.com')).toBeFalsy();
  });

  it(`should return 'false' for an invalid email starting with a dot`, () => {
    expect(validateEmail('.test@example.com')).toBeFalsy();
  });

  it(`should return 'false' for an invalid email with double dots in personal info`, () => {
    expect(validateEmail('test..example@example.com')).toBeFalsy();
  });

  it(`should return 'false' for an invalid email with disallowed characters`, () => {
    expect(validateEmail('test!example@example.com')).toBeFalsy();
  });

  it(`should return 'false' for an invalid email with spaces`, () => {
    expect(validateEmail('test example@example.com')).toBeFalsy();
  });

  it(`should return 'false' for an invalid email without domain part`, () => {
    expect(validateEmail('test@')).toBeFalsy();
  });

  it(`should return 'false' for an invalid email with special characters in domain`, () => {
    expect(validateEmail('test!@example.com')).toBeFalsy();
  });

  it(`should return 'false' for an invalid email with cyrillic characters`, () => {
    expect(validateEmail('тест@example.com')).toBeFalsy();
  });

  // More tests can be added here
});
