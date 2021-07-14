'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return bolean`, () => {
    expect(typeof validateEmail('email')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('emailrealniy@ukr.net')).toBe(true);
  });

  // write more tests here
  it(`should return 'false' for the email which contain 2 "." in a row`, () => {
    expect(validateEmail('mulo..@ukr.net')).toBe(false);
  });

  it(`should return 'false' for the email that begins with "."`, () => {
    expect(validateEmail('.mulo@ukr.net')).toBe(false);
  });

  it(`should return 'false' for the email that doesn't contain "@"`, () => {
    expect(validateEmail('muloukr.net')).toBe(false);
  });

  it(`should return 'false' for the email that doesn't contain name`, () => {
    expect(validateEmail('@ukr.net')).toBe(false);
  });
});
