'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('some@email.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for valid emails`, () => {
    expect(validateEmail('test838@gmail.com')).toBe(true);
    expect(validateEmail('john_doe-123@example.co.uk')).toBe(true);
    expect(validateEmail('my.name123@example-domain.com')).toBe(true);
  });

  it(`should return 'false' for missing @ symbol`, () => {
    expect(validateEmail('invalid.email.com')).toBe(false);
    expect(validateEmail('testemail.com')).toBe(false);
  });

  it(`should return 'false' for invalid characters in personal_info`, () => {
    expect(validateEmail('user!name@example.com')).toBe(false);
    expect(validateEmail('name+surname@example.com')).toBe(false);
  });

  it(`should return 'false' for starting or ending with dot`, () => {
    expect(validateEmail('.username@example.com')).toBe(false);
    expect(validateEmail('username.@example.com')).toBe(false);
    expect(validateEmail('username@.example.com')).toBe(false);
  });

  it(`should return 'false' for double dots in personal_info`, () => {
    expect(validateEmail('my..name@example.com')).toBe(false);
  });

  it(`should return 'false' for domain with invalid characters`, () => {
    expect(validateEmail('user@exam!ple.com')).toBe(false);
    expect(validateEmail('user@domain,com')).toBe(false);
  });

  it(`should return 'false' for missing domain`, () => {
    expect(validateEmail('username@')).toBe(false);
    expect(validateEmail('username@.')).toBe(false);
  });

  it(`should return 'false' for missing personal_info`, () => {
    expect(validateEmail('@domain.com')).toBe(false);
  });

  it(`should handle uppercase letters`, () => {
    expect(validateEmail('John.Doe@Example.COM')).toBe(true);
  });
});
