'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false'`
  + ` for the email with dot in the end of personal_info`, () => {
    expect(validateEmail('test838.@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if the email starts with dot`, () => {
    expect(validateEmail('.test838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if domain starts with dot`, () => {
    expect(validateEmail('test838@.gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email with double dots`, () => {
    expect(validateEmail('test..838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email without @`, () => {
    expect(validateEmail('test838.gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email without domain`, () => {
    expect(validateEmail('test838@'))
      .toBe(false);
  });

  it(`should return 'false' for the email without personal_info`, () => {
    expect(validateEmail('@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email with '!'`, () => {
    expect(validateEmail('test!838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email with '$'`, () => {
    expect(validateEmail('test$838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email with '%'`, () => {
    expect(validateEmail('test%838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email with '?'`, () => {
    expect(validateEmail('test?838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the email with '*'`, () => {
    expect(validateEmail('test*838@gmail.com'))
      .toBe(false);
  });
});
