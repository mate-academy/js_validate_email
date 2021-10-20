'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('email')).toBe('boolean');
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email with "." 
  inside email usernamename`, () => {
    expect(validateEmail('te.st@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email with "1" 
  inside email usernamename`, () => {
    expect(validateEmail('te1st@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email with latin letters`, () => {
    expect(validateEmail('тест@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without " @ " 
  between email username and domain`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without " . " 
  between domain and top level domain`, () => {
    expect(validateEmail('test@mailcom')).toBeFalsy();
  });

  it(`should return 'false' for the email with " . " before username`, () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email with " : " character`, () => {
    expect(validateEmail('test@mail:com')).toBeFalsy();
  });

  it(`should return 'false' for the email with " . " 
  before domain`, () => {
    expect(validateEmail('test@.mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email with " . " 
  before "@" `, () => {
    expect(validateEmail('test.@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email with " " 
  before "@" `, () => {
    expect(validateEmail('test @mail.com')).toBeFalsy();
  });
});
