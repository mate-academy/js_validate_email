'use strict';

describe('Function validateEmail:', () => {
  const validateEmail = require('./validateEmail');

  it('should return boolean', () => {
    expect(typeof validateEmail('qweqwe@qweqwe.com')).toBe('boolean');
  });

  it('should return true for valid email with letters', () => {
    expect(validateEmail('qweqwe@qweqwe.com')).toBeTruthy();
  });

  it('should return true for valid email with capital letters', () => {
    expect(validateEmail('QweQwe@qweqwe.com')).toBeTruthy();
  });

  it('should return true for valid email with digits', () => {
    expect(validateEmail('qweqwe1@qweqwe.com')).toBeTruthy();
  });

  it('should return true for valid email with special characters', () => {
    expect(validateEmail('qwe_qwe@qweqwe.com')).toBeTruthy();
  });

  it('should return true for valid email with dot in personal_info', () => {
    expect(validateEmail('qwe.qwe@qweqwe.com')).toBeTruthy();
  });

  it('should return true for valid email with @ and domain', () => {
    expect(validateEmail('qwe.qwe@qweqwe.com')).toBeTruthy();
  });

  it('should return true for valid email with dot in domain', () => {
    expect(validateEmail('qwe.qwe@qweqwe.com')).toBeTruthy();
  });

  it('should return false for email with dot at domain start', () => {
    expect(validateEmail('qweqwe@.qweqwe.com')).toBeFalsy();
  });

  it('should return false for email with dot at personal_info start', () => {
    expect(validateEmail('.qweqwe@qweqwe.com')).toBeFalsy();
  });

  it('should return false for email with double dots', () => {
    expect(validateEmail('qwe..qwe@qweqwe.com')).toBeFalsy();
  });

  it('should return false for email without @', () => {
    expect(validateEmail('qweqweqweqwe.com')).toBeFalsy();
  });

  it('should return false for email without domain', () => {
    expect(validateEmail('qweqwe@qweqwe')).toBeFalsy();
  });
});
