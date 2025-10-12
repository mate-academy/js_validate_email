'use strict';

const validateEmail = require('./validateEmail');

describe(`Function 'validateEmail':`, () => {

  it('should be declared', () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    const result = validateEmail('test@example.com');
    expect(typeof result).toBe('boolean');
  });

  it('should return true for valid emails', () => {
    expect(validateEmail('test838@gmail.com')).toBe(true);
    expect(validateEmail('user.name@sub.domain.com')).toBe(true);
  });

  it('should return false for invalid emails', () => {
    expect(validateEmail('user@.com')).toBe(false);
    expect(validateEmail('user@com')).toBe(false);
    expect(validateEmail('user@domain.')).toBe(false);
    expect(validateEmail('user@domain.c')).toBe(false); // TLD < 2
    expect(validateEmail('@domain.com')).toBe(false);
    expect(validateEmail('userdomain.com')).toBe(false);
  });
});


