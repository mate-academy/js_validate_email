'use strict';

const validateEmail = require('./validateEmail');

describe(`Function 'validateEmail':`, () => {
  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@gmail.com')).toBe('boolean');
  });

  it(`should return true for valid emails`, () => {
    expect(validateEmail('test838@gmail.com')).toBe(true);
    expect(validateEmail('first.last@mail.co')).toBe(true);
    expect(validateEmail('user-name@mail-domain.com')).toBe(true);
  });

  it(`should return false for invalid emails`, () => {
    expect(validateEmail('plainaddress')).toBe(false);
    expect(validateEmail('@missinguser.com')).toBe(false);
    expect(validateEmail('user@.com')).toBe(false);
    expect(validateEmail('user@com')).toBe(false);
    expect(validateEmail('user@domain.')).toBe(false);
  });
});

