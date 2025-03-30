'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com.'))
      .toEqual('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for the invalid email with dot`, () => {
    expect(validateEmail('.test838@gmail.com.'))
      .toBeFalsy();
  });

  it(`2should return 'false' for the invalid email with double dot`, () => {
    expect(validateEmail('test..838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the invalid email with special symbols`, () => {
    expect(validateEmail('test8!%38@gmail.com.'))
      .toBeFalsy();
  });
});
