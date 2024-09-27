'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const boolean = validateEmail('');

    expect(typeof boolean).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
  });

  describe('Invalid email formats', () => {
    it(`contains not allowed characters: ! $ % & ' * + / = ? ^ { | } ~`, () => {
      expect(validateEmail('test$838@gmail.com.')).toBeFalsy();
    });

    it(`does not contain '@'`, () => {
      expect(validateEmail('test838gmail.com')).toBeFalsy();
    });

    it(`contains ':'`, () => {
      expect(validateEmail('test:838@gmail.com')).toBeFalsy();
    });

    it(
      `contains non-English letters`,
      () => {
        expect(validateEmail('тест838@gmail.com')).toBeFalsy();
      }
    );

    it(`email starts with a dot`, () => {
      expect(validateEmail('.test838@gmail.com')).toBeFalsy();
    });

    it(`personal information ends with a dot`, () => {
      expect(validateEmail('test838.@gmail.com')).toBeFalsy();
    });

    it(
      `contains multiple periods in a row`,
      () => {
        expect(validateEmail('test..838@gmail.com')).toBeFalsy();
      }
    );

    it(`domain start to dot`, () => {
      expect(validateEmail('test838@.gmail.com')).toBeFalsy();
    });
  });
});
