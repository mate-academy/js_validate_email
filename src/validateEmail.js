'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('mail@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the email: u.ser.2021@ma-il.com`, () => {
    expect(validateEmail('u.ser.2021@ma-il.com')).toBeTruthy();
  });

  it(`should return 'false' for the email with non English letters`, () => {
    expect(validateEmail('юзер2021@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without @`, () => {
    expect(validateEmail('user2021.mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email with double dot '..'`, () => {
    expect(validateEmail('user..2021@mail.com')).toBeFalsy();
  });

  it(`should return 'true' for the email a@a.a`, () => {
    expect(validateEmail('a@a.a')).toBeTruthy();
  });

  it(`should return 'false' for the email starts with dot '.'`, () => {
    expect(validateEmail('.mail@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without domain name`,
    () => {
      expect(validateEmail('mail@.com')).toBeFalsy();
    });

  it(`should return 'false' for the email with 'personal_info'`, () => {
    expect(validateEmail('@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email with domain starts with dot '.'`,
    () => {
      expect(validateEmail('usermail@.mail.com')).toBeFalsy();
    });
});
