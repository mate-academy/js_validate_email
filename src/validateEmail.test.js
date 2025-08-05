'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@example.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'false' for email ending with dot`, () => {
    expect(validateEmail('test838gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for an email with invalid domain`, () => {
    expect(validateEmail('user@email')).toBe(false);
  });

  it(`should return 'false' if missing '@' symbol`, () => {
    expect(validateEmail('johngmail.com')).toBe(false);
  });

  it(`should return 'false' for email starting with dot`, () => {
    expect(validateEmail('.john@gmail.com')).toBe(false);
  });

  it(`should return 'false' for email starting with dot in domain`, () => {
    expect(validateEmail('john@.gmail.com')).toBe(false);
  });

  it(`should return 'false' for email ending with dot in personal_info`, () => {
    expect(validateEmail('jonh.@gmail.com')).toBe(false);
  });

  it(`should return 'false' for email with double dots in personal_info`,
    () => {
      expect(validateEmail('john..@gmail.com')).toBe(false);
    });

  it(`should return 'false' if contain forbidden characters`, () => {
    expect(validateEmail('john!@gmail.com')).toBe(false);
    expect(validateEmail('john$@gmail.com')).toBe(false);
  });
});
