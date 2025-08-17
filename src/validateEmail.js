'use strict';

const { validateEmail } = require('./validateEmail');

describe('validateEmail', () => {
  test('standard email', () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  test('minimal valid email', () => {
    expect(validateEmail('t@q.c')).toBe(true);
  });

  test('email with dash and underscore', () => {
    expect(validateEmail('first-last_name@domain.com')).toBe(true);
  });

  test('email with multiple dots in domain', () => {
    expect(validateEmail('user.name@mail.example.com')).toBe(true);
  });

  test('missing @ symbol', () => {
    expect(validateEmail('invalidemail.com')).toBe(false);
  });

  test('missing domain', () => {
    expect(validateEmail('user@')).toBe(false);
  });

  test('missing personal_info', () => {
    expect(validateEmail('@domain.com')).toBe(false);
  });

  test('invalid characters in personal_info', () => {
    expect(validateEmail('user!name@mail.com')).toBe(false);
    expect(validateEmail('user$name@mail.com')).toBe(false);
    expect(validateEmail('user%name@mail.com')).toBe(false);
  });

  test('personal_info starting or ending with dot', () => {
    expect(validateEmail('.username@mail.com')).toBe(false);
    expect(validateEmail('username.@mail.com')).toBe(false);
  });

  test('consecutive dots in personal_info', () => {
    expect(validateEmail('user..name@mail.com')).toBe(false);
  });

  test('invalid domain', () => {
    expect(validateEmail('username@domain')).toBe(false);
  });
});
