'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const isEmailValid = validateEmail('test@com.ua');

    expect(typeof isEmailValid).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it('should return false if @ is missed', () => {
    const isEmailValid = validateEmail('testcom.ua');

    expect(isEmailValid).toBe(false);
  });

  it('should return false if domain is wrong', () => {
    const isEmailValid = validateEmail('test@12');

    expect(isEmailValid).toBe(false);
  });

  it('should return false if cyrillic characters are used', () => {
    const isEmailValid = validateEmail('testування@com.ua');

    expect(isEmailValid).toBe(false);
  });

  it('should return false if first characters is dot', () => {
    const isEmailValid = validateEmail('.test@com.ua');

    expect(isEmailValid).toBe(false);
  });

  it('should return false if domain start with dot', () => {
    const isEmailValid = validateEmail('test@.com.ua');

    expect(isEmailValid).toBe(false);
  });

  it('should return false if personal info part has double dot', () => {
    const isEmailValid = validateEmail('te..st@com.ua');

    expect(isEmailValid).toBe(false);
  });

  it('should return false if any forbidden characters are used', () => {
    const result = [];
    const forbiddenChars = `!$%&'*+/=?^{|}~`;

    forbiddenChars.split('').forEach((char) => {
      const email = `test${char}@com.ua`;

      result.push(validateEmail(email));
    });

    const isAllCorrect = result.some((item) => item);

    expect(isAllCorrect).toBe(false);
  });
});
