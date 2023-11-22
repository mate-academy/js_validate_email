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

    it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('test838@gmail..com')).toBeFalsy();
    expect(validateEmail('test838@.com')).toBeFalsy();
    expect(validateEmail('.test838@gmail.com')).toBeFalsy();
    expect(validateEmail('test838@gmail.com.')).toBeFalsy();
    expect(validateEmail('test838@gmail com')).toBeFalsy();
    expect(validateEmail('test838@gmail,com')).toBeFalsy();
    expect(validateEmail('test838@gmail@com')).toBeFalsy();
    expect(validateEmail('test838@gmail!com')).toBeFalsy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
    expect(validateEmail('t@q.c')).toBeTruthy();
    expect(validateEmail('test.name_838@gmail.com')).toBeTruthy();
    expect(validateEmail('test-name_838@gmail.com')).toBeTruthy();
    expect(validateEmail('test.name_838@subdomain.domain.com')).toBeTruthy();
  });

  it(`should return 'false' for the email without '@'`, () => {
    expect(validateEmail('test838gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email starting with '.'`, () => {
    expect(validateEmail('.test838@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email ending with '.'`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for the email with '..'`, () => {
    expect(validateEmail('test838..test@gmail.com')).toBeFalsy();
  });
