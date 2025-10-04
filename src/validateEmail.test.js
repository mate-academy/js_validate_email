/* eslint-disable max-len */
'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('invalid-email')).toBe('boolean');
  });

  it(`should return true for a valid email`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it(`should return true for short valid email 't@q.c'`, () => {
    expect(validateEmail('t@q.c')).toBe(true);
  });

  it(`should return false for email missing top-level domain`, () => {
    expect(validateEmail('false@email')).toBe(false);
  });

  it(`should return false for email with leading dot before @`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return false for email with trailing dot before @`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return false for email with leading dot in domain`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  it(`should return false for email with multiple @ symbols`, () => {
    expect(validateEmail('a@b@c.com')).toBe(false);
  });

  it(`should return false for email with disallowed '+' in local part`, () => {
    expect(validateEmail('test+name@mail.com')).toBe(false);
  });

  it(`should return false for email with disallowed '!' in local part`, () => {
    expect(validateEmail('test!name@mail.com')).toBe(false);
  });

  it(`should return false for email with disallowed character in domain`, () => {
    expect(validateEmail('test@mail!.com')).toBe(false);
  });

  it(`should return false for email with spaces`, () => {
    expect(validateEmail('test name@mail.com')).toBe(false);
  });
});
