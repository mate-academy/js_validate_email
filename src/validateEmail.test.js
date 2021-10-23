'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('black888@gmail.com.')).toBe(true);
  });

  // write more tests here

  it(`should return 'false' for email without '@'`, () => {
    expect(validateEmail('black888gmail.com')).toBe(false);
  });

  it(`should return 'false' for email with double '@'`, () => {
    expect(validateEmail('black@888@gmail.com')).toBe(false);
  });

  it(`should return 'false' if '.' is the first char.`, () => {
    expect(validateEmail('.black888@gmail.com')).toBe(false);
  });

  it(`should return 'false' if domain starts with '.'`, () => {
    expect(validateEmail('black888@gmailcom')).toBe(false);
  });

  it(`should return 'false' if '.' is before '.'`, () => {
    expect(validateEmail('black..888@gmail.com')).toBe(false);
  });

  it(`should return 'false' if email is without username`, () => {
    expect(validateEmail('@gmail.com')).toBe(false);
  });

  it(`should return 'false' if email is without domain`, () => {
    expect(validateEmail('black888@')).toBe(false);
  });

  it(`should return 'false' if email is without domain first part`, () => {
    expect(validateEmail('black888@.com')).toBe(false);
  });

  it(`should return 'false' if email is without domain second part`, () => {
    expect(validateEmail('black888@gmail')).toBe(false);
  });

  it(`should return 'false' if email have spaces`, () => {
    expect(validateEmail('black888@ gmail.com')).toBe(false);
  });
});
