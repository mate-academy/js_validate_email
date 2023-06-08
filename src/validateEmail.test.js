'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test')).toBe('boolean')
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' if email includes non-english letters`, () => {
    expect(validateEmail('тест123@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if email includes dot which locates in the end of the personal_info part`, () => {
    expect(validateEmail('test.@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if email includes dot which locates in the beginning of personal_info part`, () => {
    expect(validateEmail('.test@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if email does not include @ symbol`, () => {
    expect(validateEmail('test.com')).toBeFalsy();
  });

  it(`should return 'false' for an email which has a double dots in the personal_info part`, () => {
    expect(validateEmail('te..st@gmail.com')).toBeFalsy();

  });

  it(`should return 'false' for an email which includes these characters:
    '! $ % & ' * + / = ? ^ { | } ~'`, () => {
    expect(validateEmail('tes!t@gmail.com')).toBeFalsy();
  });
});
