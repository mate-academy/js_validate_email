'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('t@t.t')).toBe('boolean');
  });

  it(`should return 'true' for the valid email 't_est.1@g-mail.com'`, () => {
    expect(validateEmail('t_est.1@g-mail.com')).toBe(true);
  });

  it(`should return 'false' for the email with Cyrillic letter`, () => {
    expect(validateEmail('гtest@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email where
  personal_info part starts with'.' `, () => {
    expect(validateEmail('.test1@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email where
  personal_info part ends with'.' `, () => {
    expect(validateEmail('test1.@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email without '@'`, () => {
    expect(validateEmail('test1.mail.com')).toBe(false);
  });

  it(`should return 'false' for the email where
  domain name part starts with'.' `, () => {
    expect(validateEmail('test1@.com')).toBe(false);
  });

  it(`should return 'false' for the email 
  with not allowed character ':'`, () => {
    expect(validateEmail('test:1@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email with double '.' 
  in personal_info `, () => {
    expect(validateEmail('test..1@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email without domain`, () => {
    expect(validateEmail('test.1@')).toBe(false);
  });

  it(`should return 'false' for the email with invalid domain (no '.')`, () => {
    expect(validateEmail('test.1@mailcom')).toBe(false);
  });

  it(`should return 'false' for the email with space`, () => {
    expect(validateEmail('test 1@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email with double '@'`, () => {
    expect(validateEmail('test1@@mail.com')).toBe(false);
  });

  // write more tests here
});
