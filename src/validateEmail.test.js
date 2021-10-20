'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it(`should return 'false' if email is without "@"`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return 'false' if dot(.) is the first char.`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return 'false' if top domain starts with dot(.)`, () => {
    expect(validateEmail('test@.mailcom')).toBe(false);
  });

  it(`should return 'false' if personal info has double dots (..)`, () => {
    expect(validateEmail('tes..t@mailcom')).toBe(false);
  });

  it(`should return 'false' if email is without personal info`, () => {
    expect(validateEmail('@mail.com')).toBe(false);
  });

  it(`should return 'false' if email is without domain`, () => {
    expect(validateEmail('test@')).toBe(false);
  });

  it(`should return 'false' if email is without domain name part`, () => {
    expect(validateEmail('test@.com')).toBe(false);
  });

  it(`should return 'false' if email is without second part of domain`, () => {
    expect(validateEmail('test@mail')).toBe(false);
  });
});
