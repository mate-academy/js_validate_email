'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(validateEmail('oriana_grande_yes')).toBe(false);
  });

  it(`should return 'true' for the valid email oriana@grande.yes`, () => {
    expect(validateEmail('oriana@grande.yes')).toBe(true);
  });

  it(`should return 'true' for the valid email oriana.ana@grande.yes`, () => {
    expect(validateEmail('oriana.ana@grande.yes')).toBe(true);
  });

  it(`should return 'true' for the valid email oriana_ana@grande.yes`, () => {
    expect(validateEmail('oriana_ana@grande.yes')).toBe(true);
  });

  it(`should return 'true' for the valid email oriana@grande.yes.no`, () => {
    expect(validateEmail('oriana@grande.yes.no')).toBe(true);
  });

  it(`should return 'true' for the valid email oriana@gra_nde.yes`, () => {
    expect(validateEmail('oriana@gra_nde.yes')).toBe(true);
  });

  it(`should return 'true' for the invalid email @grande.yes`, () => {
    expect(validateEmail('@grande.yes')).toBe(false);
  });

  it(`should return 'true' for the invalid email orianagrande.yes`, () => {
    expect(validateEmail('orianagrande.yes')).toBe(false);
  });

  it(`should return 'true' for the invalid email oriana@grande`, () => {
    expect(validateEmail('oriana@grande')).toBe(false);
  });

  it(`should return 'true' for the invalid email .oriana@grande.yes`, () => {
    expect(validateEmail('.oriana@grande.yes')).toBe(false);
  });

  it(`should return 'true' for the invalid email oriana@.grande.yes`, () => {
    expect(validateEmail('oriana@.grande.yes')).toBe(false);
  });

  it(`should return 'true' for the invalid email оріана@grande.yes`, () => {
    expect(validateEmail('оріана@grande.es')).toBe(false);
  });

  it(`should return 'true' for the invalid email ori:ana@grande.yes`, () => {
    expect(validateEmail('ori:ana@grande.es')).toBe(false);
  });
});
