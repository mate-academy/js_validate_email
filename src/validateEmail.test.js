'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return true for valid email`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
  });

  it(`should return true for short valid email`, () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it(`should return false if email has no @`, () => {
    expect(validateEmail('testgmail.com')).toBeFalsy();
  });

  it(`should return false if personal part starts with dot`, () => {
    expect(validateEmail('.test@gmail.com')).toBeFalsy();
  });

  it(`should return false if personal part ends with dot`, () => {
    expect(validateEmail('test.@gmail.com')).toBeFalsy();
  });

  it(`should return false if personal part has double dots`, () => {
    expect(validateEmail('te..st@gmail.com')).toBeFalsy();
  });

  it(`should return false if email contains forbidden characters`, () => {
    expect(validateEmail('te!st@gmail.com')).toBeFalsy();
  });

  it(`should return false if domain starts with dot`, () => {
    expect(validateEmail('test@.gmail.com')).toBeFalsy();
  });

  it(`should return false if domain has no dot`, () => {
    expect(validateEmail('false@email')).toBeFalsy();
  });

  it(`should return true for email with hyphen and underscore in personal part`, () => {
    expect(validateEmail('test-user@mail.com')).toBeTruthy();
    expect(validateEmail('first_last@mail.com')).toBeTruthy();
  });

  it(`should return true for email with hyphen and digits in domain`, () => {
    expect(validateEmail('test@my-domain.com')).toBeTruthy();
    expect(validateEmail('test@service1.com')).toBeTruthy();
  });

  it(`should return true for email with dot in personal part`, () => {
    expect(validateEmail('first.last@mail.com')).toBeTruthy();
  });
});
