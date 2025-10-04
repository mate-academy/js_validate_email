/* eslint-disable max-len */
'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@gmail.com.')).toBe('boolean');
    expect(typeof validateEmail('invalid-email')).toBe('boolean');
  });

  it(`should return true for valid email with ending dot`, () => {
    expect(validateEmail('test838@gmail.com')).toBe(true);
  });

  it(`should return false for email without @ symbol`, () => {
    expect(validateEmail('testgmail.com')).toBe(false);
  });

  it(`should return false for email starting with @`, () => {
    expect(validateEmail('@gmail.com')).toBe(false);
  });

  it(`should return false for email with double dots before @`, () => {
    expect(validateEmail('test..name@gmail.com')).toBe(false);
  });

  it(`should return false for email with spaces`, () => {
    expect(validateEmail('test name@gmail.com')).toBe(false);
  });

  it(`should return true for email with hyphen and underscore`, () => {
    expect(validateEmail('my-test_email@mail-domain.com')).toBe(true);
  });

  it(`should return false for email with Cyrillic letters`, () => {
    expect(validateEmail('тест@gmail.com')).toBe(false);
  });

  it(`should return false for domain longer than 66 characters`, () => {
    const longDomain = `test@${'a'.repeat(70)}.com`;

    expect(validateEmail(longDomain)).toBe(false);
  });
});
