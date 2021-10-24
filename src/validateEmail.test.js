'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email 'test@mail.com'`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  // write more tests here
  it(`should return 'false' for the email with non-Latin letters`, () => {
    expect(validateEmail('тest@mail.com')).toBeFalsy();
  });

  it(`should return 'true' for the email with numbers`, () => {
    expect(validateEmail('test8@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the email with special character '-'`, () => {
    expect(validateEmail('test-1@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email with special character '&'`, () => {
    expect(validateEmail('test&1@mail.com')).toBeFalsy();
  });

  it(`should return 'true' for the email
    where personal_info part contains a dot`, () => {
    expect(validateEmail('test.1@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email
    where personal_info part starts with a dot`, () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email
    where personal_info part ends with a dot`, () => {
    expect(validateEmail('test.@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email
    where personal_info part contains two dots one after the other`, () => {
    expect(validateEmail('test..1@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without '@'`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email
    where domain starts with a dot`, () => {
    expect(validateEmail('test@.mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without top domain`, () => {
    expect(validateEmail('test@mail')).toBeFalsy();
  });

  it(`should return 'true' for the email
    where domain contains digits and hyphens`, () => {
    expect(validateEmail('test.1@mail-8.com')).toBeTruthy();
  });
});
