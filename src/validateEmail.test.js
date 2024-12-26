/* eslint-disable max-len */
'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com.')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it(`should return 'false' if email doesn't contain @`, () => {
    expect(validateEmail('test838.mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('test838.@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if mail address is invalid`, () => {
    expect(validateEmail('test838.@.com')).toBeFalsy();
  });

  it(`should return 'false' if mail name contain cyrillic symbols`, () => {
    expect(validateEmail('василий@gmail.com')).toBeFalsy();
  });

  it(`should return 'true' if mail name contain one latin symbol`, () => {
    expect(validateEmail('a@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' if contain special symbols`, () => {
    expect(validateEmail('!Vatu#saca@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if mail name contain chinese codes to bank accounts`, () => {
    expect(validateEmail('你为什么要检查这个@gmail.com')).toBeFalsy();
  });
});
