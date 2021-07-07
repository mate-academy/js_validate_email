'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('V.Zelen$k1y@ukr.net')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('V.Zel3nsk1y@ukr.net')).toBe(true);
  });

  it(`should return 'false' for email without '@'`, () => {
    expect(validateEmail('V.Zel3nsk1yukr.net')).toBe(false);
  });

  it(`should return 'false' for email without top-level domain`, () => {
    expect(validateEmail('V.Zel3nsk1y@ukr')).toBe(false);
  });

  it(`should return 'false' for email without domain`, () => {
    expect(validateEmail('V.Zel3nsk1y@.net')).toBe(false);
  });

  it(`should return 'false' for email without personal info part`, () => {
    expect(validateEmail('@ukr.net')).toBe(false);
  });

  it(`should return 'false' if email field is empty`, () => {
    expect(validateEmail('')).toBe(false);
  });

  it(`should return 'false' if entered only '@'`, () => {
    expect(validateEmail('@')).toBe(false);
  });

  it(`should return 'false' if email starts on '.'`, () => {
    expect(validateEmail('.V.Zel3nsk1y@.net')).toBe(false);
  });

  it(`should return 'false' if email have ':'`, () => {
    expect(validateEmail('V:Zel3nsk1y@.net')).toBe(false);
  });

  it(`should return 'false' if email only with 
  domain and top-level domain`, () => {
    expect(validateEmail('gmail.com')).toBe(false);
  });

  it(`should return 'false' if email have spaces in domain`, () => {
    expect(validateEmail('V.Zel3nsk1y@u k r.net')).toBe(false);
  });

  it(`should return 'false' if email have cyrillic`, () => {
    expect(validateEmail('V.Zel3nsk1й@ukr.net')).toBe(false);
  });

  // it(`should return 'true' if email have special symbols`, () => {
  //   expect(validateEmail('spe$cialsymbols@gmail.com')).toBe(true);
  // });
});
