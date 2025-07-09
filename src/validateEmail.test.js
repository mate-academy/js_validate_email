'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return true for valid email 'test@mail.com'`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it(`should return true for valid short email 't@q.c'`, () => {
    expect(validateEmail('t@q.c')).toBe(true);
  });

  it(`should return false for email
     without top-level domain 'false@email'`,
  () => {
    expect(validateEmail('false@email')).toBe(false);
  });

  it(`should return false for email starting with dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return false for email with double dots`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  it(`should return false for missing '@'`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return false for invalid characters in personal info`, () => {
    expect(validateEmail('te!st@mail.com')).toBe(false);
  });

  it(`should return false for domain starting with dot`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  it(`should return false for domain ending with dot`, () => {
    expect(validateEmail('test@mail.com.')).toBe(false);
  });

  it(`should return false for double dots in domain`, () => {
    expect(validateEmail('test@mail..com')).toBe(false);
  });

  it(`should return false for special characters in domain`, () => {
    expect(validateEmail('test@mail!.com')).toBe(false);
  });

  it(`should return true for valid email with digits and hyphens`, () => {
    expect(validateEmail('user-123@sub-domain.com')).toBe(true);
  });

  it(`should return false for email longer than 80 chars`, () => {
    const longEmail = 'a'.repeat(72) + '@mail.com';

    expect(validateEmail(longEmail)).toBe(false);
  });
});
