'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('invalid-email')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it('should return false for an email without @ symbol', () => {
    expect(validateEmail('falseemail.com')).toBe(false);
  });

  it('should return false for double dots in personal_info', () => {
    expect(validateEmail('test..mail@mail.com')).toBe(false);
  });

  it('should return false for an email starting with dot', () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it('should return false for a personal_info ending with dot', () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it('should return false for an email with invalid characters', () => {
    const invalidChars = "!$%&'*+/=?^`{|}~";

    for (const char of invalidChars) {
      const emailPersonalInfo = `test${char}mail@mail.com`;
      const emailDomain = `test@mail${char}com`;

      expect(validateEmail(emailPersonalInfo)).toBe(false);
      expect(validateEmail(emailDomain)).toBe(false);
    }
  });

  it('should return false for an email with domain starting with dot', () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });
});
