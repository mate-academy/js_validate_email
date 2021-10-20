'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'false' for the email without username`, () => {
    expect(validateEmail('@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email without domain`, () => {
    expect(validateEmail('qwerty@')).toBe(false);
  });

  it(`should return 'true' for the
    if email pesonal_info containing numbers`, () => {
    expect(validateEmail('qwerty123@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the
    if email domain containing letters, digits, hyphens, and dots,`, () => {
    expect(validateEmail('qwerty123@gmai1-l.com')).toBe(true);
  });

  it(`should return 'true' for the email containing
    [!,$,%,&,^,*,+,-,=,/,{,},|,~,']`, () => {
    expect(validateEmail('q!$%&^*+-=/{}|~j@g.com')).toBe(true);
  });

  it(`should return 'false' for the email starting with dot`, () => {
    expect(validateEmail('.qwerty1@gmail1.com1')).toBe(false);
  });

  it(`should return 'false' for the email ending with dot`, () => {
    expect(validateEmail('qwerty1@gmailcom.')).toBe(false);
  });

  it(`should return 'false' for the email containing with double dot`, () => {
    expect(validateEmail('qwerty1@gmail.com.')).toBe(false);
  });

  it(`should return 'false' for the email containing not Latin letters`, () => {
    expect(validateEmail('фыв@gmail.com.')).toBe(false);
  });

  it(`should return 'true' for the email containing uppercase letters`, () => {
    expect(validateEmail('qWeRtY123@gmail.com.')).toBe(false);
  });

  it(`should return 'false' for the email not containing '@''`, () => {
    expect(validateEmail('qWeRtY123gmail.com.')).toBe(false);
  });
});
