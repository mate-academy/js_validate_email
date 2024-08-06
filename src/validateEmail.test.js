/* eslint-disable max-len */
'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should be boolean`, () => {
    expect(typeof validateEmail('test@gmail.com')).toBe('boolean');
  });

  it(`should be 'true' for the valid email`, () => {
    expect(validateEmail('user@example.com')).toBeTruthy();
  });

  it(`should be 'true' for email with digits only in username`, () => {
    expect(validateEmail('123@gmail.com')).toBeTruthy();
  });

  it(`should be 'true' for email with '-' in username`, () => {
    expect(validateEmail('-@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email without @`, () => {
    const invalidEmail = validateEmail('test838gmail.com');

    expect(invalidEmail)
      .toBeFalsy();
  });

  it(`should be 'true' for email with '_' in username`, () => {
    expect(validateEmail('_@gmail.com')).toBeTruthy();
  });

  it(`should be 'false' for email starts with dot '.' in username`, () => {
    expect(validateEmail('.example@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email ends with dot '.' in username`, () => {
    expect(validateEmail('example.@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email starts with dot '.' in domain`, () => {
    expect(validateEmail('test838@.gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email includes double dot '..' in username`, () => {
    expect(validateEmail('..example@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email includes exclamation mark '!' in username`, () => {
    expect(validateEmail('example!@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email includes question mark '?' in username`, () => {
    expect(validateEmail('example?@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email includes quote "'" in username`, () => {
    expect(validateEmail(`exam'ple@gmail.com`)).toBeFalsy();
  });

  it(`should be 'false' for email includes arithmetic operations mark in username`, () => {
    expect(validateEmail('exam+ple@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email includes currency symbol in username`, () => {
    expect(validateEmail('exam$ple@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email includes ampersand '&' in username`, () => {
    expect(validateEmail('exam&ple@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email includes curly brace '{' in username`, () => {
    expect(validateEmail('exam{}ple@gmail.com')).toBeFalsy();
  });

  it(`should be 'false' for email with non-English letter in username`, () => {
    expect(validateEmail('äö123@gmail.com'));
  });

  it(`should return 'false' for the email with not allowed characters`, () => {
    expect(validateEmail('tes1!$%+-t@gmail.com.')).toBeFalsy();
  });

  it('should be false for an empty string', () => {
    expect(validateEmail('')).toBeFalsy();
  });
});
