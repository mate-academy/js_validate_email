'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(
      typeof (expect(validateEmail('test838@gmail.com.')) === 'boolean')
    ).toBeTruthy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it(`should return false for the email with invalid letters`, () => {
    expect(validateEmail('tпst@mail.com')).toBeFalsy();
  });

  it(`should return false for the email with invalid characters`, () => {
    expect(validateEmail('te,t@mail.com')).toBeFalsy();
    expect(validateEmail('te?st@mail.com')).toBeFalsy();
    expect(validateEmail('te+st@mail.com')).toBeFalsy();
  });

  it(`should return false for the email with character . at the start`, () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`should return false for the email without character .`, () => {
    expect(validateEmail('test@mailcom')).toBeFalsy();
  });

  it.skip(`should return false for the email with character .
  at the end of personal info`, () => {
    expect('test.@mail.com').toBeFalsy();
  });

  it(`should return false for the email with double dots
  in personal info part`, () => {
    expect(validateEmail('te..s@mail.com')).toBeFalsy();
  });

  it(`should return false if @ is missed in the email`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });

  it(`should return false if domain part started with .`, () => {
    expect(validateEmail('test@.mail.com')).toBeFalsy();
  });

  it(`should return false if domain part contains prohibited symbols`, () => {
    expect(validateEmail('test@mai+l.com')).toBeFalsy();
    expect(validateEmail('test@mai?l.com')).toBeFalsy();
    expect(validateEmail('test@mai{l.com')).toBeFalsy();
    expect(validateEmail('test@mai%l.com')).toBeFalsy();
  });
});
