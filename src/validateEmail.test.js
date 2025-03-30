'use strict';

describe(`validateEmail function:`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be a function`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@example.com')).toBe('boolean');
  });

  it(`should return true for valid email`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
  });

  it(`should return false for invalid email`, () => {
    expect(validateEmail('abcb')).toBeFalsy();
  });

  it(`should return true for personal_info with letters`, () => {
    expect(validateEmail('JohnyEnglish@gmail.com')).toBeTruthy();
  });

  it(`should return true for minimal valid email`, () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it(`should return false for email without valid domain`, () => {
    expect(validateEmail('invalid.email@domain')).toBeFalsy();
  });

  it(`should return false for email with double dots`, () => {
    expect(validateEmail('test..email@example.com')).toBeFalsy();
  });

  it(`should return false for email starting with dot`, () => {
    expect(validateEmail('.test.email@example.com')).toBeFalsy();
  });

  it(`should return false for email ending with dot in local part`, () => {
    expect(validateEmail('test.email.@example.com')).toBeFalsy();
  });

  it(`should return true for email ending with dot in domain`, () => {
    expect(validateEmail('test.email@example.com.')).toBeTruthy();
  });

  it(`should return false for email with '!'`, () => {
    expect(validateEmail('test!email@example.com')).toBeFalsy();
  });

  it(`should return false for email with space`, () => {
    expect(validateEmail('test.email@ex ample.com')).toBeFalsy();
  });

  it(`should return false for domain starting with hyphen`, () => {
    expect(validateEmail('test.email@-example.com')).toBeFalsy();
  });

  it(`should return false for email with '$'`, () => {
    expect(validateEmail('test$email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '%'`, () => {
    expect(validateEmail('test%email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '&'`, () => {
    expect(validateEmail('test&email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '''`, () => {
    expect(validateEmail("test'email@example.com")).toBeFalsy();
  });

  it(`should return false for email with '*'`, () => {
    expect(validateEmail('test*email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '+'`, () => {
    expect(validateEmail('test+email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '/'`, () => {
    expect(validateEmail('test/email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '='`, () => {
    expect(validateEmail('test=email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '?'`, () => {
    expect(validateEmail('test?email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '^'`, () => {
    expect(validateEmail('test^email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '{'`, () => {
    expect(validateEmail('test{email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '|'`, () => {
    expect(validateEmail('test|email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '}'`, () => {
    expect(validateEmail('test}email@example.com')).toBeFalsy();
  });

  it(`should return false for email with '~'`, () => {
    expect(validateEmail('test~email@example.com')).toBeFalsy();
  });

  it(`should return false for email without '@'`, () => {
    expect(validateEmail('testemail.com')).toBeFalsy();
  });

  it(`should return false for email with personal_info starting with dot`,
    () => {
      expect(validateEmail('.test.email@example.com')).toBeFalsy();
    });

  it(`should return false for email with domain starting with dot`, () => {
    expect(validateEmail('test.email@.example.com')).toBeFalsy();
  });
});
