'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test1@gmail.com')).toEqual('boolean');
  });

  it(`should return 'true' for the`
  + `valid email if it contains '@' symbol`, () => {
    expect(validateEmail('true@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the`
  + `email with Cyrilic letters`, () => {
    expect(validateEmail('тест@джмаил.ком')).toBeFalsy();
  });

  it(`should return 'true' for the valid email with 1 dot`, () => {
    expect(validateEmail('test@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email with 2 dots`, () => {
    expect(validateEmail('t..est@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email if the 1st character is dot`, () => {
    expect(validateEmail('.test@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email if the last character is dot`, () => {
    expect(validateEmail('test.@gmail.com')).toBeFalsy();
  });

  it(`should return 'true' for the valid email with digits`, () => {
    expect(validateEmail('test1@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email without digit`, () => {
    expect(validateEmail('false@email')).toBeFalsy();
  });

  it(`should return 'true' for the valid email with special symbils`, () => {
    expect(validateEmail('test_case@gmail.com')).toBeTruthy();
  });
});
