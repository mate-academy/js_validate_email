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
    expect(validateEmail('zuzu@gmail.com')).toBe(true);
  });

  it(`should return 'false' if personal_info contains cyryllic letters`, () => {
    expect(validateEmail('мама@gmail.com')).toBe(false);
  });

  it(`should return 'true' if personal_info contains digits`, () => {
    expect(validateEmail('52875@gmail.com')).toBe(true);
  });

  it(`should return 'true' if personal_info contains special symbols`, () => {
    expect(validateEmail('ab-8cd@gmail.com')).toBe(true);
  });

  it(`should return 'false' if first symbol of personal_info is .`, () => {
    expect(validateEmail('.abcde@gmail.com')).toBe(false);
  });

  it(`should return 'false' if last symbol of personal_info is .`, () => {
    expect(validateEmail('abcde.@gmail.com')).toBe(false);
  });

  it(`should return 'false' if there are .. inside personal_info`, () => {
    expect(validateEmail('ab..cde@gmail.com')).toBe(false);
  });

  it(`should return 'true' if there are . inside personal_info`, () => {
    expect(validateEmail('ab.cde@gmail.com')).toBe(true);
  });

  it(`should return 'false' if there are is no @ inside e-mail`, () => {
    expect(validateEmail('ab.cde.gmail.com')).toBe(false);
  });

  it(`should return 'false' if first symbol of domain is .`, () => {
    expect(validateEmail('ab.cde@.gmail.com')).toBe(false);
  });

  it(`should return 'false' if domain contains special symbols .`, () => {
    expect(validateEmail('ab.cde@gmai$l.com')).toBe(false);
  });
});
