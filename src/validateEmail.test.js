'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com.')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it(`should return 'false' if personal-info or domaine start with dot`, () => {
    expect(validateEmail('.test838@gmail.com.')).toBeFalsy();
    expect(validateEmail('test838@.gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' if email does not contain '@'`, () => {
    expect(validateEmail('test838gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' if email contain '%' or double dots`, () => {
    expect(validateEmail('test%838@gmail.com.')).toBeFalsy();
    expect(validateEmail('test..838@gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' if email does not have Top Level Domain`, () => {
    expect(validateEmail('false@email')).toBeFalsy();
  });

  it(`should return 'false' if email contains the Cyrillic alphabet`, () => {
    expect(validateEmail('тест838@gmail.com.')).toBeFalsy();
  });
});
