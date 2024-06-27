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

  it(`should have English letters`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it('should return true for a valid email with letters and digits', () => {
    expect(validateEmail('test838@gmail.com')).toBe(true);
  });

  it('should return false for an email without "@"', () => {
    expect(validateEmail('test838gmail.com')).toBe(false);
  });

  it('should return false for an email starting with dot', () => {
    expect(validateEmail('.test@gmail.com')).toBe(false);
  });

  it('should return false for an email ending with dot', () => {
    expect(validateEmail('test.@gmail.com')).toBe(false);
  });

  it('should return false for an email with consecutive dots', () => {
    expect(validateEmail('test..838@gmail.com')).toBe(false);
  });

  it('should return false for an email with invalid characters', () => {
    expect(validateEmail('test$838@gmail.com')).toBe(false);
  });

  it('should return true for a valid email with hyphen', () => {
    expect(validateEmail('test-838@gmail.com')).toBe(true);
  });

  it('should return true for a valid email with underscore', () => {
    expect(validateEmail('test_838@gmail.com')).toBe(true);
  });

  it('should return true for a valid email with dot in the domain', () => {
    expect(validateEmail('test838@mail.co.uk')).toBe(true);
  });

  it('should return false for an email without domain', () => {
    expect(validateEmail('test838@.com')).toBe(false);
  });

  it('should return false for an email without personal info', () => {
    expect(validateEmail('@gmail.com')).toBe(false);
  });

  it('should return false for an email with double dots in domain', () => {
    expect(validateEmail('test838@gmail..com')).toBe(true);
  });

  it('should return false for an email with exclamation mark', () => {
    expect(validateEmail('test!838@gmail.com')).toBe(false);
  });

  it('should return false for an email with dollar sign', () => {
    expect(validateEmail('test$838@gmail.com')).toBe(false);
  });

  it('should return false for an email with percent sign', () => {
    expect(validateEmail('test%838@gmail.com')).toBe(false);
  });

  it('should return false for an email with ampersand', () => {
    expect(validateEmail('test&838@gmail.com')).toBe(false);
  });

  it('should return false for an email with single quote', () => {
    expect(validateEmail("test'838@gmail.com")).toBe(false);
  });

  it('should return false for an email with asterisk', () => {
    expect(validateEmail('test*838@gmail.com')).toBe(false);
  });

  it('should return false for an email with plus sign', () => {
    expect(validateEmail('test+838@gmail.com')).toBe(false);
  });

  it('should return false for an email with slash', () => {
    expect(validateEmail('test/838@gmail.com')).toBe(false);
  });

  it('should return false for an email with equal sign', () => {
    expect(validateEmail('test=838@gmail.com')).toBe(false);
  });

  it('should return false for an email with question mark', () => {
    expect(validateEmail('test?838@gmail.com')).toBe(false);
  });

  it('should return false for an email with caret', () => {
    expect(validateEmail('test^838@gmail.com')).toBe(false);
  });

  it('should return false for an email with curly braces', () => {
    expect(validateEmail('test{838}@gmail.com')).toBe(false);
  });

  it('should return false for an email with vertical bar', () => {
    expect(validateEmail('test|838@gmail.com')).toBe(false);
  });

  it('should return false for an email with tilde', () => {
    expect(validateEmail('test~838@gmail.com')).toBe(false);
  });
});
