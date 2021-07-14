'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('frog_10@li.ua')).toBe('boolean');
  });

  it(`should return 'true' for the valid email 'frog_10@li.ua`, () => {
    expect(validateEmail('frog_10@li.ua')).toBe(true);
  });

  it(`should return 'true' for the valid email 'Frog-10@li.ua'`, () => {
    expect(validateEmail('Frog-10@li.ua')).toBe(true);
  });

  it(`should return 'true' for the valid email 'fro!g&7%&218@li.uaS'`, () => {
    expect(validateEmail('fro.g218@li.ua')).toBe(true);
  });

  it(`should return 'false' for the invalid email '.frog@'`, () => {
    expect(validateEmail('.frog@')).toBe(false);
  });

  it(`should return 'true' for the invalid email 'frog@li. ua'`, () => {
    expect(validateEmail('frog@li. ua')).toBe(true);
  });

  it(`should return 'false' for the invalid email...`, () => {
    expect(validateEmail('frog..17@li.ua')).toBe(false);
  });

  it(`should return 'false' for the invalid email...`, () => {
    expect(validateEmail('frog17@ .ua')).toBe(false);
  });

  it(`should return 'false' for the invalid email 'F rog17@li.ua'`, () => {
    expect(validateEmail('F rog17@li.ua')).toBe(false);
  });

  it(`should return 'false' for the invalid email 'конь@li.ua'`, () => {
    expect(validateEmail('конь@li.ua')).toBe(false);
  });

  // write more tests here
});
