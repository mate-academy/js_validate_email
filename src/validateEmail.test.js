'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('wrong-email')).toBe('boolean');
  });

  it(`should return true for valid emails`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
    expect(validateEmail('user_123@gmail.com')).toBe(true);
    expect(validateEmail('my-test.email@yahoo.com')).toBe(true);
  });

  it(`should return false if email has no @ symbol`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return false if domain has no dot`, () => {
    expect(validateEmail('false@email')).toBe(false);
  });

  it(`should return false if personal part starts with dot`, () => {
    expect(validateEmail('.test@gmail.com')).toBe(false);
  });

  it(`should return false if personal part ends with dot`, () => {
    expect(validateEmail('test.@gmail.com')).toBe(false);
  });

  it(`should return false if domain starts with dot`, () => {
    expect(validateEmail('test@.gmail.com')).toBe(false);
  });

  it(`should return false if email contains double dots in personal part`, () => {
    expect(validateEmail('te..st@gmail.com')).toBe(false);
  });

  it(`should return false if email contains forbidden symbols`, () => {
    expect(validateEmail('test!@gmail.com')).toBe(false);
    expect(validateEmail('test$@gmail.com')).toBe(false);
    expect(validateEmail('test%@gmail.com')).toBe(false);
  });

  it(`should return false if domain ends with dot`, () => {
    expect(validateEmail('test838@gmail.com.')).toBe(false);
  });

  it(`should return false if domain contains underscore`, () => {
    expect(validateEmail('test@gmail_com')).toBe(false);
  });

  it(`should return false for empty string`, () => {
    expect(validateEmail('')).toBe(false);
  });
});
