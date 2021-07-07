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
    expect(validateEmail('hello96@ukr.net')).toBe(true);
  });

  it(`should return 'false' if email starts with dot`, () => {
    expect(validateEmail('.hello96@ukr.net')).toBe(false);
  });

  it(`should return 'false' if level domain starts with dot`, () => {
    expect(validateEmail('hello96@.ukr.net')).toBe(false);
  });

  it(`should return 'true' if email contain special character`, () => {
    expect(validateEmail('hel-lo96@ukr.net')).toBe(true);
  });

  it(`should return 'false' if email doesn't contain @`, () => {
    expect(validateEmail('hello96ukr.net')).toBe(false);
  });
});
