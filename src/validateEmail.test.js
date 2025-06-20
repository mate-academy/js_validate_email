'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for email without '@'`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return 'false' for email with invalid characters in personal_info`,
    () => {
      expect(validateEmail('test!@mail.com')).toBe(false);
      expect(validateEmail('test$@mail.com')).toBe(false);
      expect(validateEmail('test%mail.com')).toBe(false);
    });

  it(`should return 'false' for email with starting dot in personal_info`,
    () => {
      expect(validateEmail('.test@mail.com')).toBe(false);
    });

  it(`should return 'false' for email with ending dot in personal_info`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return 'false' for email with double dots in personal_info`,
    () => {
      expect(validateEmail('te..st@mail.com')).toBe(false);
    });

  it(`should return 'false' for email with starting dot in domain`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  it(`should return 'false' for email with invalid domain (missing dot)`,
    () => {
      expect(validateEmail('test@mailcom')).toBe(false);
    });

  it(`should return 'false' for email with double dots in domain`, () => {
    expect(validateEmail('test@mail:com')).toBe(false);
  });

  it(`should return 'false' for empty string`, () => {
    expect(validateEmail('')).toBe(false);
  });

  it(`should return 'false' for just '@'`, () => {
    expect(validateEmail('@')).toBe(false);
  });
});
