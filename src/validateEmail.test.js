'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('abcd')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it(`should return 'false' for the empty string`, () => {
    expect(validateEmail('')).toBeFalsy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('false@email')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('.false@gmail.com')).toBeFalsy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('_false@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('!$%&*+/=?^{|}~test@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('test@@gmail.com')).toBeFalsy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('mate.academy@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the invalid email
    with cyryllic alphabet`, () => {
    expect(validateEmail('українська@gmail.com')).toBeFalsy();
  });
});
