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

  // Valid email tests
  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it(`should return 'true' for short valid emails`, () => {
    expect(validateEmail('t@q.c')).toBe(true);
  });

  it(`should return 'true' for email with digits`, () => {
    expect(validateEmail('test838@gmail.com')).toBe(true);
  });

  it(`should return 'true' for email with hyphen in personal_info`, () => {
    expect(validateEmail('test-user@mail.com')).toBe(true);
  });

  it(`should return 'true' for email with underscore in personal_info`, () => {
    expect(validateEmail('test_user@mail.com')).toBe(true);
  });

  it(`should return 'true' for email with dot in personal_info`, () => {
    expect(validateEmail('test.user@mail.com')).toBe(true);
  });

  it(`should return 'true' for email with multiple dots in domain`, () => {
    expect(validateEmail('user@mail.co.uk')).toBe(true);
  });

  // Invalid email tests - missing @
  it(`should return 'false' if @ is missing`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  // Invalid email tests - no domain
  it(`should return 'false' for email without domain`, () => {
    expect(validateEmail('false@email')).toBe(false);
  });

  // Invalid email tests - dot position
  it(`should return 'false' if personal_info starts with dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return 'false' if personal_info ends with dot`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return 'false' if domain starts with dot`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  // Invalid email tests - double dots
  it(`should return 'false' for double dots in personal_info`, () => {
    expect(validateEmail('test..user@mail.com')).toBe(false);
  });

  // Invalid email tests - not allowed characters
  it(`should return 'false' for invalid characters in personal_info`, () => {
    expect(validateEmail('test!user@mail.com')).toBe(false);
    expect(validateEmail('test$user@mail.com')).toBe(false);
    expect(validateEmail('test%user@mail.com')).toBe(false);
  });

  // Invalid email tests - empty parts
  it(`should return 'false' for empty personal_info`, () => {
    expect(validateEmail('@mail.com')).toBe(false);
  });

  it(`should return 'false' for empty domain`, () => {
    expect(validateEmail('test@')).toBe(false);
  });

  // Invalid email tests - multiple @
  it(`should return 'false' for multiple @ symbols`, () => {
    expect(validateEmail('test@@mail.com')).toBe(false);
    expect(validateEmail('test@mail@com')).toBe(false);
  });
});
