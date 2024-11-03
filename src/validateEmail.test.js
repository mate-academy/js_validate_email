'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('goodEmail@.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
    expect(validateEmail('userName.userSurname@gmail.com.')).toBeTruthy();
    expect(validateEmail('anabella123Syphora@g.com.')).toBeTruthy();
    expect(validateEmail('SirkoIvan@uk.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test!@#!@#!@gmail.com.')).toBeFalsy();
    expect(validateEmail('.userName.userSurname.@gmail.com.')).toBeFalsy();
    expect(validateEmail('anabella123Syphorag.com.')).toBeFalsy();
    expect(validateEmail('hjkhkjh5675.v')).toBeFalsy();
  });

  it(`should throw an error if email is not a string`, () => {
    expect(() => validateEmail()).toThrow();
    expect(() => validateEmail({})).toThrow();
    expect(() => validateEmail([])).toThrow();
    expect(() => validateEmail(null)).toThrow();
    expect(() => validateEmail(NaN)).toThrow();
    expect(() => validateEmail(false)).toThrow();
    expect(() => validateEmail(4)).toThrow();
  });
});
