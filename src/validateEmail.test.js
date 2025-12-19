'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email 'test838@gmail.com'`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email 'test@mail.com`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email 't@q.c`, () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it(`should return false for email without domain`, () => {
    expect(validateEmail('false@email')).toBe(false);
  });

  it(`should return false for email without @`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return false for email starting with dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return false for email ending with dot in personal info`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return false for email with consecutive dots`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  it(`should return false for email with forbidden symbols`, () => {
    expect(validateEmail('test!@mail.com')).toBe(false);
  });

  it(`should return false for domain starting with dot`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });
});
