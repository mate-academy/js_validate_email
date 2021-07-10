'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('qwerty')).toEqual('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('lozhnikovve@gmail.com')).toBe(true);
  });

  it(`should return 'false' for the email that starts with dot ('.')`, () => {
    expect(validateEmail('.lozhnikovve@gmail.com')).toBe(false);
  });

  it(`should return 'false' if personal_info part ends with dot ('.')`, () => {
    expect(validateEmail('lozhnikovve.@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email that contains
  double dots ('..')`, () => {
    expect(validateEmail('lozhnikov..ve@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email that doesn't contain
  '@' symbol`, () => {
    expect(validateEmail('lozhnikovvegmail.com')).toBe(false);
  });

  it(`should return 'false' if top level domain of email starts
  with dot ('.')`, () => {
    expect(validateEmail('lozhnikovve@.gmail.com')).toBe(false);
  });

  it(`should return 'false' if email is without personal info`, () => {
    expect(validateEmail('@gmail.com')).toBe(false);
  });

  it(`should return 'false' if email is without domain`, () => {
    expect(validateEmail('lozhnikovve@')).toBe(false);
  });
  // write more tests here
});
