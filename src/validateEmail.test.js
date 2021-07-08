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

  it(`The personal_info part can't contain not English letter`, () => {
    expect(validateEmail('кirillic@gmail.com')).toBeFalsy();
  });

  it(`The personal_info part can contain character '.'
  if it isn't first or last character and not come after the one`, () => {
    expect(validateEmail('e.mai.l@gmail.com')).toBeTruthy();
  });

  it(`The personal_info part can contain character '.'
  but it can't be the first character`, () => {
    expect(validateEmail('.e.mai.l@gmail.com')).toBeFalsy();
  });

  it(`The personal_info part can contain character '.'
  but it can't be the last character`, () => {
    expect(validateEmail('e.mai.l.@gmail.com')).toBeFalsy();
  });

  it(`The personal_info part can contain character '.'
  but it can't come one after the other`, () => {
    expect(validateEmail('ema..il@gmail.com')).toBeFalsy();
  });

  it(`Character '@' is required`, () => {
    expect(validateEmail('emailgmail.com')).toBeFalsy();
  });

  it(`top Level domain can not start with dot \`.\``, () => {
    expect(validateEmail('email@.gmail.com')).toBeFalsy();
  });

  it(`Double dots are not allowed`, () => {
    expect(validateEmail('em:ail@gmail.com')).toBeFalsy();
  });
});
