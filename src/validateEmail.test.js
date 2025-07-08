'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@mail.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return true for a valid standard email`, () => {
    expect(validateEmail('john.doe@mail-server.com')).toBe(true);
  });

  it(`should return true for valid minimal email`, () => {
    expect(validateEmail('a@b.c.')).toBe(true);
  });

  it(`should return false for missing domain part`, () => {
    expect(validateEmail('test@com')).toBe(false);
  });

  it(`should return false for email with double dots`, () => {
    expect(validateEmail('john..doe@mail.com')).toBe(false);
  });

  it(`should return false for email starting with dot in local part`, () => {
    expect(validateEmail('.johndoe@mail.com')).toBe(false);
  });

  it(`should return false for email ending with dot in local part`, () => {
    expect(validateEmail('johndoe.@mail.com')).toBe(false);
  });

  it(`should return false for email with invalid character !`, () => {
    expect(validateEmail('john!doe@mail.com')).toBe(false);
  });

  it(`should return false for email missing @`, () => {
    expect(validateEmail('johndoemail.com')).toBe(false);
  });

  it(`should return false for email with domain starting with dot`, () => {
    expect(validateEmail('john@.mail.com')).toBe(false);
  });

  it(`should return false for email ending with @`, () => {
    expect(validateEmail('john.doe@')).toBe(false);
  });
});
