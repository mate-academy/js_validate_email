'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@gmail.com')).toBe('boolean');
  });

  it(`should return 'false' for the valid email
    with special characters`, () => {
    expect(validateEmail('Tes&t@gmail.com')).toBeFalsy();
  });

  it(`should return 'true' for the valid email
    with english letters`, () => {
    expect(validateEmail('Test@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email
    with digits`, () => {
    expect(validateEmail('Tes13@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the invalid email with
    no characters after @ symbol`, () => {
    expect(validateEmail('Test!@')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email
      with double dots in personal_info part`, () => {
    expect(validateEmail('Tes!?3@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email
      with character . ( period, dot or fullstop) where it is the first
      character in the personal_info part`, () => {
    expect(validateEmail('.Test?3@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email
      with character . ( period, dot or fullstop) where it is the last
      character in email`, () => {
    expect(validateEmail('Test?3@gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email
      without @ symbol`, () => {
    expect(validateEmail('Test?3gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email
      with dot after @ symbol`, () => {
    expect(validateEmail('Test?3@.gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email
      with dot come one after the other`, () => {
    expect(validateEmail('Test..?3@gmail.com')).toBeFalsy();
  });

  it(`should return 'true' for the valid email
   that contains letters, digits, hyphens, and dots
   in domain name`, () => {
    expect(validateEmail('Test@gm.a-i2l.com')).toBeTruthy();
  });
});
