'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test123@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should not accept characters outside of \`Aa-Zz, 0-9\``, () => {
    expect(validateEmail('testŞ@mail.com')).toBeFalsy();
  });

  it(`should not accept  characters outside of \`Aa-Zz, 0-9\``, () => {
    expect(validateEmail('testС@mail.com')).toBeFalsy();
  });

  it(`should not contain spaces`, () => {
    expect(validateEmail('tes t@mail.com')).toBeFalsy();
  });

  it(`should contain '@'`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });

  it(`should contain only one '@'`, () => {
    expect(validateEmail('test@@mail.com')).toBeFalsy();
  });

  it(`should contain a dot`, () => {
    expect(validateEmail('test@mailcom')).toBeFalsy();
  });

  it(`should not accept special characters
  ! $ % & ' * + / = ? ^ { | } ~`, () => {
    expect(validateEmail('%test#-|}one!!$%&\'*+/=?^{|}~$@mail.com'))
      .toBeFalsy();
  });

  it(`should accept digits`, () => {
    expect(validateEmail('0test12@mail.com')).toBeTruthy();
  });

  it(`should not have a dot as the first character`, () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`domain should not start with a dot`, () => {
    expect(validateEmail('test@.mail.com')).toBeFalsy();
  });

  it(`should not have double dots in a row`, () => {
    expect(validateEmail('te:st@mail.com')).toBeFalsy();
  });

  it(`should not have two or more dots in a row`, () => {
    expect(validateEmail('te...st@mail.com')).toBeFalsy();
  });

  it(`should accept a dot in email body`, () => {
    expect(validateEmail('te.st@mail.com')).toBeTruthy();
  });
});
