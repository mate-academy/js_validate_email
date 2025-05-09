'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(validateEmail('test@test.test')).toBe(true);
    expect(validateEmail('test')).toBe(false);
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for the invalid email without @`, () => {
    expect(validateEmail('test838gmail.com.'))
      .toBe(false);
  });

  it(`should return 'false' for the email starting with .`, () => {
    expect(validateEmail('.test838@gmail.com.'))
      .toBe(false);
  });

  it(`should return 'false' for the email  with double dot`, () => {
    expect(validateEmail('t..st838@gmail.com.'))
      .toBe(false);
  });

  it(`should return 'false' for the email  with characters`, () => {
    expect(validateEmail('t$%%st838@gmail.com.'))
      .toBe(false);
  });

  it(`should return 'false' for the email  with dot at the end`, () => {
    expect(validateEmail('test.@gmail.com.'))
      .toBe(false);
  });

  it(`should return 'true' for the email  with '-' '_' characters`, () => {
    expect(validateEmail('te_s-t@gmail.com.'))
      .toBe(true);
  });

  it(`should return 'false' for the email  without string after @`, () => {
    expect(validateEmail('test@gmail'))
      .toBe(false);
  });
  // write more tests here
});
