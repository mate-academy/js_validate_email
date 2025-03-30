'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' if email have cyrillic letters`, () => {
    expect(validateEmail('testтест838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' if email include
  dot as first letter at persoal_info`, () => {
    expect(validateEmail('.test@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email than
  include dot at the start of domain`, () => {
    expect(validateEmail('test838@.gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email
  that include double dots`, () => {
    expect(validateEmail('te...st838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email
  that do not include @`, () => {
    expect(validateEmail('test838gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'true' for the email
  that include "_" or "-"`, () => {
    expect(validateEmail('my_email-001@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' if domain include letters, numbers,
  hyphens and periods`, () => {
    expect(validateEmail('test838@gm-2ail.c.'))
      .toBeTruthy();
  });
});
