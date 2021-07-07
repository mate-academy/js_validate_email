'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it(`should return 'true' if email consists
   only with Latin characters`, () => {
    expect(validateEmail('keepcalm@mail.com')).toBe(true);
  });

  it(`should return 'false' if symbol "@" is omited`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return 'false' if symbols period, dot or
   fullstop come one after the other`, () => {
    expect(validateEmail('test..@mail.com')).toBe(false);
  });

  it(`should return 'false' if email stars with dot "."`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return 'false' if domain starts with dot "."`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  // write more tests here
});
