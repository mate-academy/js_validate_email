'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('qwerty123@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for email with english letters`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for email with english letters and numbers`, () => {
    expect(validateEmail('test123@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for email with english letters,
   numbers and special symbol`, () => {
    expect(validateEmail('test12!3@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for email that starts with dot '.'`, () => {
    expect(validateEmail('.test123@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email that ends with dot '.'`, () => {
    expect(validateEmail('test123@mail.com.')).toBeFalsy();
  });

  it(`should return 'false' for email that contains dots '.'
   that come one after the other`, () => {
    expect(validateEmail('te..st123@mail.com')).toBeFalsy();
  });

  it(`should return 'true' for email that contains dots '.'`, () => {
    expect(validateEmail('te.st123@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for email with cyrylic letters`, () => {
    expect(validateEmail('testБ@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email without '@' symbol`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });
});
