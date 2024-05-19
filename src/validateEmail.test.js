'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it(`should return 'true' for email with digits only in username`, () => {
    expect(validateEmail('838@gmail.com.')).toBeTruthy();
  });

  it(`should return 'true' for email with underscore '_' in username`, () => {
    expect(validateEmail('_@gmail.com.')).toBeTruthy();
  });

  it(`should return 'true' for email with hyphen '-' in username`, () => {
    expect(validateEmail('-@gmail.com.')).toBeTruthy();
  });

  it(`should return 'false' for email starts with dot '.' in username`, () => {
    expect(validateEmail('.test838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email ends with dot '.' in username`, () => {
    expect(validateEmail('test838.@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email includes
  double dot '..' in username`, () => {
    expect(validateEmail('test..838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email includes
  exclamation mark '!' in username`, () => {
    expect(validateEmail('test!838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email includes
  question mark '?' in username`, () => {
    expect(validateEmail('test?838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email includes
  quote "'" in username`, () => {
    expect(validateEmail(`test'838@mail.com`)).toBeFalsy();
  });

  it(`should return 'false' for email includes
  arithmetic operations mark in username`, () => {
    expect(validateEmail('test+838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email includes
  currency symbol in username`, () => {
    expect(validateEmail('test$838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email includes
  ampersand '&' in username`, () => {
    expect(validateEmail('test&838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email includes
  curly brace '{' in username`, () => {
    expect(validateEmail('test&838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email with
  non-English letter in username`, () => {
    expect(validateEmail('tßäö838@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email starts with dot '.' in domain`, () => {
    expect(validateEmail('test838@.mail.com')).toBeFalsy();
  });
});
