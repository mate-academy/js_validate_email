'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('mhbb');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
  });

  it(`personal_info can contain English letters (Aa-Zz)`, () => {
    expect(validateEmail('bvjGhvKnmvBnmLvm@gmail.com')).toBeTruthy();
  });

  it(`personal_info can contain digits`, () => {
    expect(validateEmail('1234567890@gmail.com')).toBeTruthy();
  });

  it(`personal_info can contain characters: - _`, () => {
    expect(validateEmail('-_@gmail.com')).toBeTruthy();
  });

  it(`personal_info can contain character '.'`, () => {
    expect(validateEmail('--.--.--.--@gmail.com')).toBeTruthy();
  });

  it(`personal_info can NOT contain character '.' at first place`, () => {
    expect(validateEmail('.--.--.--.--@gmail.com')).toBeFalsy();
  });

  it(`personal_info can NOT contain character '.' at the end`, () => {
    expect(validateEmail('mymail2.@gmailcom')).toBeFalsy();
  });

  it(`double dots are not allowed in personal_info part`, () => {
    expect(validateEmail('--..--.--.--@gmail.com')).toBeFalsy();
  });

  it(`@ is required`, () => {
    expect(validateEmail('test838gmail.com')).toBeFalsy();
  });

  it(`domain can NOT start with dot '.'`, () => {
    expect(validateEmail('test838@.gmail.com')).toBeFalsy();
  });

  it(`'!$%&*+/=?^{|}~' are not allowed in personal_info part`, () => {
    const characters = `'!$%&*+/=?^{|}~`;

    characters.split('').forEach((char) => {
      const testEmail = 'test838' + char + '@gmail.com';

      expect(validateEmail(testEmail)).toBeFalsy();
    });
  });

  it('domain can contain letters, digits, hyphens, and dots', () => {
    expect(validateEmail('personal_part@g-m-a159il.com')).toBeTruthy();
  });

  it("valid email return 'true'", () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it("short valid email return 'true'", () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it("NOT valid email return 'false'", () => {
    expect(validateEmail('false@email')).toBeFalsy();
  });
});
