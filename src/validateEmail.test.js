'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('example@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email format`, () => {
    expect(validateEmail('test12@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email without "@" symbol`, () => {
    expect(validateEmail('test_mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email contains spaces`, () => {
    expect(validateEmail('user mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email starts with dot`, () => {
    expect(validateEmail('.my@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email with 
    domain part contains special characters`, () => {
    expect(validateEmail('koala@m$il.com')).toBeFalsy();
  });

  it(`should return 'false' for the email contains double dots`, () => {
    expect(validateEmail('alias..2@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email contains 
    dot before "@" symbol`, () => {
    expect(validateEmail('mail1.@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email contains 
    after "@" symbol`, () => {
    expect(validateEmail('lama@.gmail.com')).toBeFalsy();
  });
});
