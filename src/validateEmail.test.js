'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should accept string input data`, () => {
    const email = 'test838@gmail.com.';

    validateEmail(email);

    const result = typeof email;

    expect(result).toBe('string');
  });

  it(`should return boolean`, () => {
    const result = typeof validateEmail('test838@gmail.com.');

    expect(result).toBe('boolean');
  });

  it(`should return 'false' for the email`
  + `with empty input data`, () => {
    expect(validateEmail(''))
      .toBeFalsy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email`
     + `with cyrilic letters`, () => {
    expect(validateEmail('фest838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'true' for the valid email`
     + `with hyphen`, () => {
    expect(validateEmail('test-838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email`
  + `with lowercase underline`, () => {
    expect(validateEmail('test_838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email`
  + `with with one  dot in the word's center`, () => {
    expect(validateEmail('te.st838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email`
  + `with with two inconsistent dots`, () => {
    expect(validateEmail('te.st.838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email`
  + `starts with a dot`, () => {
    expect(validateEmail('.test838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email`
  + `ends with a dot`, () => {
    expect(validateEmail('test838.@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email`
  + `without @`, () => {
    expect(validateEmail('test838gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email`
  + `if domen name starts with dot`, () => {
    expect(validateEmail('test838@.gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email`
  + `with prohibited special characters`, () => {
    expect(validateEmail('test?838@gmail.com.'))
      .toBeFalsy();
  });
});
