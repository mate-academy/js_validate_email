'use strict';

const validateEmail = require('./validateEmail');

describe('validateEmail', () => {
  test('returns true for a valid email', () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
  });

  test('returns false for an email missing @ symbol', () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  test('returns false for an email'
    + 'with invalid characters in personal_info', () => {
    expect(validateEmail('te!st@mail.com')).toBe(true);
    expect(validateEmail('te$st@mail.com')).toBe(true);
  });

  test('returns false for an email with double dots in personal_info', () => {
    expect(validateEmail('te..st@mail.com')).toBe(false);
  });

  test('returns false for an email starting with a dot', () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  test('returns false for an email with domain missing a dot', () => {
    expect(validateEmail('test@mailcom')).toBe(false);
  });

  test('returns false for an email with invalid characters in domain', () => {
    expect(validateEmail('test@mail!com')).toBe(false);
  });

  test('returns false for an email ending with a dot', () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  test('returns false for an email with spaces', () => {
    expect(validateEmail('test @mail.com')).toBe(false);
  });
});
