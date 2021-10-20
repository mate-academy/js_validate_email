'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email with dots`, () => {
    expect(validateEmail('te.s.t@mail.com')).toBe(true);
  });

  it(`should return 'false' for the email starts with dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email with double dots`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email ends with dot`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email 
  with domain starts with dot`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  it(`should return 'false' for email without @ symbol`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return 'false' for email with cyrillic letters`, () => {
    expect(validateEmail('тест@mail.com')).toBe(false);
  });

  it(`should return 'true' for valid email with digits`, () => {
    expect(validateEmail('test.123@mail.com')).toBe(true);
  });
});
