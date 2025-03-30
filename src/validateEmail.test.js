'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test838@gmail.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for an email with a domain starting
  with a dot`, () => {
    expect(validateEmail('test838@.gmail.com')).toBe(false);
  });

  it(`should return 'false' for an email with a personal_info starting
  with a dot`, () => {
    expect(validateEmail('.test838@gmail.com')).toBe(false);
  });

  it(`should return 'false' for an email with a personal_info ending
  with a dot`, () => {
    expect(validateEmail('test838.@gmail.com')).toBe(false);
  });

  it(`should return "false" for an email with consecutive dots`, () => {
    expect(validateEmail('test..838@gmail.com')).toBe(false);
  });

  it(`should return 'false' for an email with double dots
  in personal_info part`, () => {
    expect(validateEmail('test:838@gmail.com')).toBe(false);
  });

  it(`should return 'false' for an email without @ symbol`, () => {
    expect(validateEmail('test838gmail.com')).toBe(false);
  });

  it(`should return 'false' for email with invalid characters
  '! $ % & ' * + / = ? ^ { | } ~' in the personal_info part`, () => {
    expect(validateEmail('tes$t838@gmail.com')).toBe(false);
  });

  it(`should return 'false' if the email contains
  non-English characters`, () => {
    expect(validateEmail('тест838@gmail.com')).toBe(false);
  });
});
