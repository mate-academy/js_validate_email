'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`Email should include English letters (Aa-Zz)`, () => {
    expect(validateEmail('тest@gmail.com')).toBeFalsy();
  });

  it(`Email can contain digits`, () => {
    expect(validateEmail('t123est@gmail.com')).toBeTruthy();
  });

  it(`Email can contain characters: _ and __`, () => {
    expect(validateEmail('t_e__st@gmail.com')).toBeTruthy();
  });

  it(`character . ( period, dot or fullstop) provided that it is not the first`
    + ` or last character and it will not come one after the other.`, () => {
    expect(validateEmail('te;;st@gmail.com')).toBeFalsy();
  });

  it('@ is required in email', () => {
    expect(validateEmail('test.gmail.com')).toBeFalsy();
  });

  it('personal_info and domain can not start with dot .', () => {
    expect(validateEmail('.test@gmail.com')).toBeFalsy();
  });

  it('double dots are not allowed in personal_info part', () => {
    expect(validateEmail('te..st@gmail.com')).toBeFalsy();
  });

  it('not allowed characters: ! $ % & \' * + / = ? ^ { | } ~', () => {
    expect(validateEmail('te!$st@gmail.com')).toBeFalsy();
  });
});
