'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email with -`, () => {
    expect(validateEmail('test-838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email with . as a first character`, () => {
    expect(validateEmail('.test838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with . as a last character`, () => {
    expect(validateEmail('test838.@gmail.com'))
      .toBeFalsy();
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for the email with two dots one after another`, () => {
    expect(validateEmail('test..838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with special characters`, () => {
    expect(validateEmail('test$/@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email without @`, () => {
    expect(validateEmail('test123gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for with dot at the start of domain`, () => {
    expect(validateEmail('test123@.gmail.com'))
      .toBeFalsy();
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for email with special characters in the domain`, () => {
    expect(validateEmail('test123@gmail&.com'))
      .toBeFalsy();
  });
});
