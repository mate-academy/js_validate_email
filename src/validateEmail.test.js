'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const boolean = validateEmail('');

    expect(typeof boolean).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email that`
    + ` contains non-English letters`, () => {
    expect(validateEmail('тест838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email that`
    + ` starts with a dot`, () => {
    expect(validateEmail('.test838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return false if personal information`
    + ` ends with a dot`, () => {
    expect(validateEmail('test838.@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email that`
    + ` contains multiple periods in a row`, () => {
    expect(validateEmail('test..838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return false if the domain`
    + ` start to dot`, () => {
    expect(validateEmail('test838@.gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email `
    + ` contains ':'`, () => {
    expect(validateEmail('test:838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email`
    + ` does not contain '@'`, () => {
    expect(validateEmail('test838gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email contains`
    + ` not allowed characters: ! $ % & ' * + / = ? ^ { | } ~`, () => {
    expect(validateEmail('test$838@gmail.com.'))
      .toBeFalsy();
  });
});
