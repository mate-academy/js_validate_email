'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('qas@mail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('q@m.c')).toBe(true);
  });

  it(`should return 'false' for the valid email...`, () => {
    expect(validateEmail('*@*.*')).toBe(false);
  });

  it(`should return 'false' for the valid email...`, () => {
    expect(validateEmail('вася@мыло.ком')).toBe(false);
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('123@mail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('456@47.com')).toBe(true);
  });

  it(`should return 'false' for the email...`, () => {
    expect(validateEmail('qas.mail.com')).toBe(false);
  });

  it(`should return 'false' for the email...`, () => {
    expect(validateEmail('.qas@mail.com')).toBe(false);
  });

  it(`should return 'true' for the email...`, () => {
    expect(validateEmail('QAS@MAIL.COM')).toBe(true);
  });

  it(`should return 'false' for the email...`, () => {
    expect(validateEmail('qas@mail:com')).toBe(false);
  });

  it(`should return 'false' for the email...`, () => {
    expect(validateEmail('qas@mail')).toBe(false);
  });

  it(`should return 'false' for the email...`, () => {
    expect(validateEmail('!qas@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email...`, () => {
    expect(validateEmail('qas..das@mail.com')).toBe(false);
  });

  it(`should return 'false' for the email...`, () => {
    expect(validateEmail('qas&A@mail.com')).toBe(false);
  });

  // write more tests here
});
