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
    expect(validateEmail('mariya@mail.net')).toBeTruthy();
  });

  it(`should return 'false' for the email with
   an extra dot in front of the domain name`, () => {
    expect(validateEmail('mariya@.mail.net')).toBeFalsy();
  });

  it(`should return 'false' for the email with symbol(s)
   in the front of name`, () => {
    expect(validateEmail('!mariya@mail.a.cademy')).toBeFalsy();
  });

  it(`should return 'false' for the email with symbol(s) in the domain`, () => {
    expect(validateEmail('mariya@ma!a.cademy')).toBeFalsy();
  });

  it(`should return 'false' for the email without symbol @`, () => {
    expect(validateEmail('mariyamail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email with symbol(s) after name`, () => {
    expect(validateEmail('mariya~@mail.com')).toBeFalsy();
  });

  it(`should return 'true' for the email with symbol(s) 
  in the middle of the name`, () => {
    expect(validateEmail('mari_123@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for a email with two dots 
  in a row in the name`, () => {
    expect(validateEmail('mari..ya@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for a email with cyrillic 
  symbols in the name`, () => {
    expect(validateEmail('ффедор@mail.com')).toBeFalsy();
  });
});
