'use strict';

const validateEmail = require('./validateEmail');

describe("Function 'validateEmail'", () => {
  it('should be declared', () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it('should return true for valid emails', () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
    expect(validateEmail('user.name-123@example.co')).toBe(true);
  });

  it('should return false when @ is missing or too many @', () => {
    expect(validateEmail('falseemail.com')).toBe(false);
    expect(validateEmail('user@@example.com')).toBe(false);
  });

  it('should return false for personalInfo dot rules', () => {
    expect(validateEmail('.user@example.com')).toBe(false);
    expect(validateEmail('user.@example.com')).toBe(false);
    expect(validateEmail('us..er@example.com')).toBe(false);
  });

  it('should return false for invalid domains', () => {
    expect(validateEmail('user@.example.com')).toBe(false);
    expect(validateEmail('user@examplecom')).toBe(false);
  });

  it('should return false for disallowed characters in personalInfo', () => {
    expect(validateEmail('us!er@example.com')).toBe(false);
    expect(validateEmail('us/er@example.com')).toBe(false);
  });
});
