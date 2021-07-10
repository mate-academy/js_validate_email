'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('email@kmail.xom')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('email@kmail.xom')).toBe(true);
  });

  // eslint-disable-next-line max-len
  it(`should return 'true' for the valid email with one special character`, () => {
    expect(validateEmail('check$thismaili@kmail.xom')).toBe(true);
  });

  // eslint-disable-next-line max-len
  it(`should return 'true' for the valid email with multiple special characters`, () => {
    expect(validateEmail("cheсk!'$%&*+-/=?^_{|}~maili@kmail.xom")).toBe(true);
  });

  it(`should return 'true' for the valid email with dots`, () => {
    expect(validateEmail('ema.i.l@kmail.xom')).toBe(true);
  });

  it(`should return 'false' for the email starts with dots`, () => {
    expect(validateEmail('.email@kmail.xom')).toBe(false);
  });

  it(`should return 'false' for the email ends with dots`, () => {
    expect(validateEmail('email.@kmail.xom')).toBe(false);
  });

  it(`should return 'false' for the email with double dots`, () => {
    expect(validateEmail('ema..il@kmail.xom')).toBe(false);
  });

  it(`should return 'false' for valid email without @ symbol`, () => {
    expect(validateEmail('emailkmail.xom')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for the email with top level domain start with dot`, () => {
    expect(validateEmail('email@.kmail.xom')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for the email with top level domain ends with dot`, () => {
    expect(validateEmail('email@kmail.xom.')).toBe(false);
  });
});
