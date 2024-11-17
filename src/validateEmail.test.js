'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for an email without '@'`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return 'false' for an email with an invalid domain`, () => {
    expect(validateEmail('test@mail')).toBe(false);
  });

  it(`should return 'false' for an email starting with a dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return 'false' for an email ending with a dot`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return 'false' for an email with double dots in
    personal_info`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  it(`should return 'false' for an email with invalid characters in
    personal_info`, () => {
    expect(validateEmail('test!@mail.com')).toBe(false);
    expect(validateEmail('te$st@mail.com')).toBe(false);
  });

  it(`should return 'false' for an email with a domain containing
    invalid characters`, () => {
    expect(validateEmail('test@mail!.com')).toBe(false);
  });

  it(`should return 'false' for an email with a domain starting with
    a hyphen`, () => {
    expect(validateEmail('test@-mail.com')).toBe(false);
  });
});
