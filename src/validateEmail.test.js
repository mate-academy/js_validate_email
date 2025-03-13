/* eslint-disable max-len */
'use strict';

describe('Function validateEmail:', () => {
  const validateEmail = require('./validateEmail');

  it('should be declared', () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('invalid.email')).toBe('boolean');
  });

  it('should return true for valid email "test@mail.com"', () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it('should return true for valid email "t@q.c"', () => {
    expect(validateEmail('t@q.c')).toBe(true);
  });

  it('should return true for email with dot in personal_info "user.name@domain.com"', () => {
    expect(validateEmail('user.name@domain.com')).toBe(true);
  });

  it('should return true for email with hyphen and underscore "user-name_123@sub.domain.co.uk"', () => {
    expect(validateEmail('user-name_123@sub.domain.co.uk')).toBe(true);
  });

  it('should return false for email without @ "testmail.com"', () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it('should return false for email without personal_info "@domain.com"', () => {
    expect(validateEmail('@domain.com')).toBe(false);
  });

  it('should return false for email without domain "user@"', () => {
    expect(validateEmail('user@')).toBe(false);
  });

  it('should return false for personal_info starting with dot ".user@domain.com"', () => {
    expect(validateEmail('.user@domain.com')).toBe(false);
  });

  it('should return false for personal_info ending with dot "user.@domain.com"', () => {
    expect(validateEmail('user.@domain.com')).toBe(false);
  });

  it('should return false for consecutive dots in personal_info "user..name@domain.com"', () => {
    expect(validateEmail('user..name@domain.com')).toBe(false);
  });

  it('should return false for invalid character in personal_info "user!name@domain.com"', () => {
    expect(validateEmail('user!name@domain.com')).toBe(false);
  });

  it('should return false for domain starting with dot "user@.domain.com"', () => {
    expect(validateEmail('user@.domain.com')).toBe(false);
  });

  it('should return false for domain without dot "user@domain"', () => {
    expect(validateEmail('user@domain')).toBe(false);
  });

  it('should return false for invalid character in domain "user@domain!com"', () => {
    expect(validateEmail('user@domain!com')).toBe(false);
  });

  it('should return false for multiple @ symbols "user@domain@com"', () => {
    expect(validateEmail('user@domain@com')).toBe(false);
  });
});
