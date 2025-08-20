'use strict';

const { validateEmail } = require('./validateEmail');

describe('validateEmail', () => {
  it('should return boolean', () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('invalid')).toBe('boolean');
  });

  it('should return true for valid email', () => {
    expect(validateEmail('john.doe@mail-server.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
  });

  it('should return false for email with trailing dot', () => {
    expect(validateEmail('test838@gmail.com.')).toBe(false);
  });

  it('should return false for domain ending with dot', () => {
    expect(validateEmail('a@b.c.')).toBe(false);
  });

  it('should return false for missing domain part', () => {
    expect(validateEmail('test@com')).toBe(false);
  });

  it('should return false for double dots in local part', () => {
    expect(validateEmail('john..doe@mail.com')).toBe(false);
  });

  it('should return false for dot at start of local part', () => {
    expect(validateEmail('.johndoe@mail.com')).toBe(false);
  });

  it('should return false for dot at end of local part', () => {
    expect(validateEmail('johndoe.@mail.com')).toBe(false);
  });

  it('should return false for missing @', () => {
    expect(validateEmail('johndoemail.com')).toBe(false);
  });

  it('should return false for domain starting with dot', () => {
    expect(validateEmail('john@.mail.com')).toBe(false);
  });

  it('should return false for ending with @', () => {
    expect(validateEmail('john.doe@')).toBe(false);
  });

  it('should return false for invalid character in local part (!)', () => {
    expect(validateEmail('john!doe@mail.com')).toBe(false);
  });

  it('should return false if domain is empty', () => {
    expect(validateEmail('john@')).toBe(false);
  });

  it('should return false if local part is empty', () => {
    expect(validateEmail('@domain.com')).toBe(false);
  });

  it('should return false if domain has double dots', () => {
    expect(validateEmail('john@domain..com')).toBe(false);
  });

  it('should return false if domain has invalid chars', () => {
    expect(validateEmail('john@do!main.com')).toBe(false);
  });
});
