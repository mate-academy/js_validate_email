'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for the not valid email`, () => {
    expect(validateEmail('test838gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email, which starts with dot .`, () => {
    expect(validateEmail('.test838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email, which includes  characters: ! $ % & ' * + / = ? ^ { | } ~`, () => {
    expect(validateEmail('test838/@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'true' for the email there domain name part contains only one letter`, () => {
    expect(validateEmail('t@gmail.com.'))
      .toBeTruthy();
  });
});
