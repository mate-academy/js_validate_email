/* eslint-disable max-len */
'use strict';

const validateEmail = require('./validateEmail');

describe(`Function 'validateEmail':`, () => {
  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for a valid email`, () => {
    expect(validateEmail('test@gmail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
    expect(validateEmail('user-123_456@example-domain.com')).toBe(true);
    expect(validateEmail('test.email@sub.domain.co')).toBe(true);
    expect(validateEmail('valid_email@edu.org')).toBe(true);
  });

  it(`should return 'false' for an invalid email`, () => {
    expect(validateEmail('test@com')).toBe(false); // No valid domain
    expect(validateEmail('@domain.com')).toBe(false); // No personal_info part
    expect(validateEmail('test@.com')).toBe(false); // Domain can't start with `.`
    expect(validateEmail('test.@domain.com')).toBe(false); // Personal_info can't end with `.`
    expect(validateEmail('.test@domain.com')).toBe(false); // Personal_info can't start with `.`
    expect(validateEmail('test..email@domain.com')).toBe(false); // No consecutive dots in personal_info
    expect(validateEmail('user@domain@another.com')).toBe(false); // Only one `@` allowed
    expect(validateEmail('invalid!email@domain.com')).toBe(false); // Invalid character `!`
    expect(validateEmail('inva|id@domain.com')).toBe(false); // Invalid character `|`
  });

  it(`should return 'false' for completely invalid inputs`, () => {
    expect(validateEmail('')).toBe(false); // Empty string
    expect(validateEmail('justtext')).toBe(false); // No @ symbol
    expect(validateEmail('randomstring@')).toBe(false); // No domain part
    expect(validateEmail('@@@')).toBe(false); // Only @ symbols
  });
});
