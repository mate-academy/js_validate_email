'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('example@gmail.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for valid emails`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
    expect(validateEmail('user.name@subdomain.domain.com')).toBeTruthy();
    expect(validateEmail('user-name@domain.co')).toBeTruthy();
    expect(validateEmail('username@domain.co.uk')).toBeTruthy();
    expect(validateEmail('123456@numbers.com')).toBeTruthy();
    expect(validateEmail('user_name@domain.io')).toBeTruthy();
  });

  it(`should return 'false' for invalid emails`, () => {
    expect(validateEmail('')).toBeFalsy();
    expect(validateEmail('plainaddress')).toBeFalsy();
    expect(validateEmail('@missingpersonalinfo.com')).toBeFalsy();
    expect(validateEmail('username@.com')).toBeFalsy();
    expect(validateEmail('.username@domain.com')).toBeFalsy();
    expect(validateEmail('user..name@domain.com')).toBeFalsy();
    expect(validateEmail('user!name@domain.com')).toBeFalsy();
    expect(validateEmail('user@name@domain.com')).toBeFalsy();
    expect(validateEmail('user@domain')).toBeFalsy();
  });

  it(`should return 'true' for valid emails with edge cases`, () => {
    expect(validateEmail('user.name@domain.longtld')).toBeTruthy();
    expect(validateEmail('u@d.co')).toBeTruthy();
    expect(validateEmail('a-b.c_d@sub.domain.com')).toBeTruthy();
  });

  it(`should return 'false' for emails with unsupported characters`, () => {
    expect(validateEmail('user$@domain.com')).toBeFalsy();
    expect(validateEmail('user+name@domain.com')).toBeFalsy();
    expect(validateEmail('user%name@domain.com')).toBeFalsy();
  });
});
