'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared...`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean...`, () => {
    expect(typeof validateEmail('hello')).toBe('boolean');
  });

  it(`should return 'true' for the valid email 
  which consists of english characters, "@" and "." symbols`,
  () => {
    expect(validateEmail('helloworld@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email
  which consists of numbers, "@" and "." symbols`,
  () => {
    expect(validateEmail('12345@123.321')).toBe(true);
  });

  it(`should return 'false' for the email
  which contain two "." symbols in a row`,
  () => {
    expect(validateEmail('hello..@mail.ru')).toBe(false);
  });

  it(`should return 'false' for the email
  which does not contain "@" symbol`,
  () => {
    expect(validateEmail('12345123.321')).toBe(false);
  });

  it(`should return 'false' for the email
  which contain "." right after "@" symbol`,
  () => {
    expect(validateEmail('12345@.123.321')).toBe(false);
  });

  it(`should return 'false' for the email
  which contain at least one ":" symbol`,
  () => {
    expect(validateEmail('1234:5@123.321')).toBe(false);
  });

  it(`should return 'false' for the email
  which does not contain "personal data" part`,
  () => {
    expect(validateEmail('@123.321')).toBe(false);
  });

  it(`should return 'false' for the email
  which contain non-latin characters`,
  () => {
    expect(validateEmail('привет@123.321')).toBe(false);
  });

  it(`should return 'false' for the email
  which starts with dot-symbol`,
  () => {
    expect(validateEmail('.hello@123.321')).toBe(false);
  });
});
