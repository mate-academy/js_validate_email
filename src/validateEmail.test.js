'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('invalid-email')).toBe('boolean');
  });

  // Valid emails
  it(`should return true for standard valid emails`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
    expect(validateEmail('user123@mail.com')).toBe(true);

    expect(
      validateEmail('first_last-name@mail.com')
    ).toBe(true);

    expect(
      validateEmail('first.last@mail.com')
    ).toBe(true);

    expect(validateEmail('user@mail.co.uk')).toBe(true);

    expect(
      validateEmail('user@mail-domain.com')
    ).toBe(true);
  });

  // Invalid emails
  it(`should return false for email missing @ symbol`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return false for multiple @ symbols`, () => {
    expect(validateEmail('a@b@c.com')).toBe(false);
  });

  it(`should return false for personal info starting with dot`, () => {
    expect(validateEmail('.user@mail.com')).toBe(false);
  });

  it(`should return false for personal info ending with dot`, () => {
    expect(validateEmail('user.@mail.com')).toBe(false);
  });

  it(`should return false for personal info with consecutive dots`, () => {
    expect(validateEmail('first..last@mail.com')).toBe(false);
  });

  it(`should return false for domain starting with dot`, () => {
    expect(validateEmail('user@.mail.com')).toBe(false);
  });

  it(`should return false for domain missing dot`, () => {
    expect(validateEmail('user@mail')).toBe(false);
    expect(validateEmail('false@email')).toBe(false);
  });

  it(`should return false for personal info with invalid characters`, () => {
    const invalidChars = "!$%&'*+/=?^{}|~"; // per spec
    for (const char of invalidChars) {
      expect(
        validateEmail(`user${char}name@mail.com`)
      ).toBe(false);
    }
  });

  it(`should return false for domain with invalid characters`, () => {
    expect(validateEmail('user@ma_il.com')).toBe(false);
    expect(validateEmail('user@ma!l.com')).toBe(false);
  });
});
