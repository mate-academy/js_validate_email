'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('adolas+666@gmail.com.')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it(`should return 'false' if email includes a letter`
   + ` from another alphabet`, () => {
    expect(validateEmail('teФst@mail.com')).toBeFalsy();
  });

  it(`should return 'false' if email without '@' or '.'`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
    expect(validateEmail('test@mailcom')).toBeFalsy();
  });

  it(`should return 'false' if email includes not allowed characters`, () => {
    expect(validateEmail('t!est@mail.com')).toBeFalsy();
    expect(validateEmail('t$est@mail.com')).toBeFalsy();
    expect(validateEmail('test@mai*l.com')).toBeFalsy();
    expect(validateEmail('test@mai:l.com')).toBeFalsy();
  });

  it(`should return 'false' if email begins with '.'`, () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`should return 'false' if email includes double dots`
    + ` in personal_info part`, () => {
    expect(validateEmail('te:st@mail.com')).toBeFalsy();
  });

  it(`should return 'false' if email is empty`, () => {
    expect(validateEmail('')).toBeFalsy();
  });
});
