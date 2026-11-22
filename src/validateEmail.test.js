'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(validateEmail('test838@gmail.com')).toEqual(expect.any(Boolean));
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it('should return true if personal_info contains a digit', () => {
    expect(validateEmail('test838@gmail.com')).toBe(true);
  });

  it(`should return true if the personal_info contains '-'`, () => {
    expect(validateEmail('test-838@gmail.com')).toBe(true);
  });

  it(`should return true if the personal_info contains '_'`, () => {
    expect(validateEmail('test_838@gmail.com')).toBe(true);
  });

  it(`should return true if personal_info contains '.'`, () => {
    expect(validateEmail('test.838@gmail.com')).toBe(true);
  });

  it(`should return false for emails containing non-Latin letters`, () => {
    expect(validateEmail('testл838@gmail.com')).toBe(false);
  });

  it(`should return false if the personal_info starts '.'`, () => {
    expect(validateEmail('.test838@gmail.com')).toBe(false);
  });

  it(`should return false if personal_info ends '.'`, () => {
    expect(validateEmail('test838.@gmail.com')).toBe(false);
  });

  it(`should return false if the domain starts '.'`, () => {
    expect(validateEmail('test838@.gmail.com')).toBe(false);
  });

  it(`should return false if the domain hasn't '.'`, () => {
    expect(validateEmail('false@gmailcom')).toBe(false);
  });

  it(`should return false if email without '@'`, () => {
    expect(validateEmail('falsegmail.com')).toBe(false);
  });

  it(`should return false if personal_info contains '..'`, () => {
    expect(validateEmail('test..838@gmail.com')).toBe(false);
  });

  it(`should return false if email contains '!'`, () => {
    expect(validateEmail('!test838@gmail.com')).toBe(false);
  });

  it(`should return false if email contains '+'`, () => {
    expect(validateEmail('+test838@gmail.com')).toBe(false);
  });

  it(`should true if domain contains didgit`, () => {
    expect(validateEmail('test@gmail1.com')).toBe(true);
  });

  it(`should true if domain contains '-'`, () => {
    expect(validateEmail('test@gmail-test.com')).toBe(true);
  });

  it(`should true if domain contains '.'`, () => {
    expect(validateEmail('test@gmail.test.com')).toBe(true);
  });

  it(`should true if emeil contains only letters`, () => {
    expect(validateEmail('test@gmail.com')).toBe(true);
  });
});
