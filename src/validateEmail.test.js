'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for standard valid emails`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
  });

  it(`should return 'true' for emails with digits, hyphens, underscores and valid dots`, () => {
    expect(validateEmail('my-test.123_email@mail.com')).toBe(true);
  });

  it(`should return 'false' if the email is missing the '@' symbol`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return 'false' if the domain lacks a dot separator`, () => {
    expect(validateEmail('false@email')).toBe(false);
  });

  it(`should return 'false' if personal_info contains forbidden special characters`, () => {
    expect(validateEmail('test!@mail.com')).toBe(false);
    expect(validateEmail('user$name@mail.com')).toBe(false);
    expect(validateEmail('email%test@mail.com')).toBe(false);
  });

  it(`should return 'false' if a dot is placed at the start or at the end of personal_info`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return 'false' if personal_info contains consecutive double dots`, () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });
});
