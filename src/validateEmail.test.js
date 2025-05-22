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
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
  });

  it('should return error when email does not contain @', () => {
    const result = validateEmail('testamail.com');

    expect(result).toBe(false);
  });

  it('should return error when email starts with a dot', () => {
    const result = validateEmail('.test@mail.com');

    expect(result).toBe(false);
  });

  it('should return error when top-level domain starts with a dot', () => {
    const result = validateEmail('test@.mail.com');

    expect(result).toBe(false);
  });

  it('should return error when email contains double dots', () => {
    const result = validateEmail('te:st@mail.com');

    expect(result).toBe(false);
  });

  it('should return "false" if email contains forbidden characters', () => {
    const result = validateEmail('тест@exam ple.com');

    expect(result).toBe(false);
  });

  it('should return error when email starts or ends with a dot', () => {
    const result = validateEmail('.test@mail.com.');

    expect(result).toBe(false);
  });
});
