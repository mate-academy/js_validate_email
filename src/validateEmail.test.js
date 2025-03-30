'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('luckyGuy@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it('returns "false" for email with not latin alphabet', () => {
    expect(validateEmail('тест@alpha.com')).toBeFalsy();
  });

  it('returns "false" for email without @', () => {
    expect(validateEmail('hamsteralpha.com')).toBeFalsy();
  });

  it('returns "false" for email starting with dot', () => {
    expect(validateEmail('.bigguy@gmail.com')).toBeFalsy();
  });

  it('returns "false" for email with domain starting with dot', () => {
    expect(validateEmail('bigboss@.gmail.com')).toBeFalsy();
  });

  it("returns 'false' for email with ! $ % & ' * + / = ? ^ { | } ~", () => {
    const symbols = "!$%&'*+/=?^{|}~";

    for (const s of symbols) {
      expect(validateEmail(`bad${s}email@gmail.com`)).toBeFalsy();
    }
  });

  it('returns "false" for email with double dots in personal part', () => {
    expect(validateEmail('big:boss@gmail.com')).toBeFalsy();
  });
});
