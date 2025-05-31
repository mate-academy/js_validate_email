'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test')).toBe('boolean');
  });

  it('should return "false" for the invalid email', () => {
    expect(validateEmail('')).toBeFalsy();

    expect(validateEmail('testmail.com')).toBeFalsy();

    expect(validateEmail('tes./t@gmail..')).toBeFalsy();

    expect(validateEmail('1@g`mail')).toBeFalsy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(
      validateEmail('test838@gmail.com.')
    ).toBeTruthy();

    expect(validateEmail('user@example.com')).toBeTruthy();

    expect(
      validateEmail('john.doe@sub.domain')
    ).toBeTruthy();

    expect(validateEmail('test@mail.com')).toBeTruthy();
    expect(validateEmail('t@q.c')).toBeTruthy();
  });
});
