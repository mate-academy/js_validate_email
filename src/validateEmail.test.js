'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@mail.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    const result = validateEmail('test838@gmail.com.');

    expect(result).toBe(true);
  });

  it(`should return 'false' if email does not include @`, () => {
    const result = validateEmail('testmail.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' if email includes `
    + `not English letters (Aa-Zz)`, () => {
    const result = validateEmail('test@яmail.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' if email starts with .`, () => {
    const result = validateEmail('.test@mail.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' if email ends with .`, () => {
    const result = validateEmail('.test@mail.com.');

    expect(result).toBe(false);
  });

  it(`should return 'false' if domain starts with .`, () => {
    const result = validateEmail('test@.mail.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' if email has special symbol`, () => {
    const result = validateEmail('tes#t@mail.com');

    expect(result).toBe(false);
  });

  it(`should return 'false' if email has . come one after the other`, () => {
    const result = validateEmail('t..est@mail.com');

    expect(result).toBe(false);
  });

  it(`should return 'true' if email includes digits`, () => {
    const result = validateEmail('tes1t@mail.com');

    expect(result).toBe(true);
  });

  it(`should return 'true' if email includes - or _`, () => {
    const result = validateEmail('te_s-t@mail.com');

    expect(result).toBe(true);
  });

  it(`should return 'true' if email includes .`, () => {
    const result = validateEmail('t.est@mail.com');

    expect(result).toBe(true);
  });
});
