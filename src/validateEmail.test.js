'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email 
  with english letters in personal_info`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email 
  with english letters and capital letters in personal_info`, () => {
    expect(validateEmail('tEst@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email 
  with english letters and digits in personal_info`, () => {
    expect(validateEmail('test1@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email 
  with english letters and special characters in personal_info`, () => {
    expect(validateEmail('test_r@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email 
  with one dot not on the first and last places in personal_info`, () => {
    expect(validateEmail('test.test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email 
  with '@' character between personal_info and top level domain`, () => {
    expect(validateEmail('test.test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email 
  with '.' character between top level domain and domain name`, () => {
    expect(validateEmail('test.test@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for the invalid email 
  with the first '.' character of top level domain`, () => {
    expect(validateEmail('test.test@.mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email 
  with the first '.' character of personal_info`, () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email 
  with double dots`, () => {
    expect(validateEmail('te..st@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without @`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email 
  without domain name`, () => {
    expect(validateEmail('test@mail')).toBeFalsy();
  });
});
