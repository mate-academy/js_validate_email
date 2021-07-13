'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('email')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('Email@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' if the personal_info part 
  contain not English letter`, () => {
    expect(validateEmail('кirillic@gmail.com')).toBeFalsy();
  });

  it(`should return 'true' if '.' character isn't first or last character
  and not come after the one`, () => { // in the personal_info part
    expect(validateEmail('e.mai.l@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' if character '.'is the first character`, () => {
    // in the personal_info part
    expect(validateEmail('.e.mai.l@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if character '.' is the last character`, () => {
    // in the personal_info part
    expect(validateEmail('e.mai.l.@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if character '.' come one after the other`, () => {
    // in the personal_info part
    expect(validateEmail('ema..il@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if email doesn't contain '@'`, () => {
    expect(validateEmail('emailgmail.com')).toBeFalsy();
  });

  it(`should return 'false' if top Level domain start with dot \`.\``, () => {
    expect(validateEmail('email@.gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if email contain double dots`, () => {
    expect(validateEmail('em:ail@gmail.com')).toBeFalsy();
  });
});
