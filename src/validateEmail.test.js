'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@example.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('testemail.com')).toBeFalsy();
  });

  it(`should return 'true' for the 'test@mail.com'`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for the 'false@email'`, () => {
    expect(validateEmail('false@email')).toBeFalsy();
  });

  it(`should return 'true' for 't@q.c'`, () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it(`should return false for not english letters`, () => {
    expect(validateEmail('тест@приклад.ком')).toBeFalsy();
  });

  it(`should return 'false' for dot at the start`, () => {
    expect(validateEmail('.test@example.com')).toBeFalsy();
  });

  it(`should return 'false' for dot at the end`, () => {
    expect(validateEmail('test.@example.com')).toBeFalsy();
  });

  it(`should return 'false' for double dots`, () => {
    expect(validateEmail('tes..t@example.com')).toBeFalsy();
  });

  it(`should return 'false' for special symbol`, () => {
    expect(validateEmail('t!est@example.com')).toBeFalsy();
  });

  it(`should return 'false' for email, domain starts with .`, () => {
    expect(validateEmail('test@.example.com')).toBeFalsy();
  });
});
