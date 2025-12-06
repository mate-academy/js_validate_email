'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const isEmailValid = validateEmail('test@mail.com');

    expect(typeof isEmailValid).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email
    with just English letters`, () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it(`should return 'true' for the valid email
    with just digits`, () => {
    expect(validateEmail('1234@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email
    with character '-'`, () => {
    expect(validateEmail('123-4@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email
    with character '_'`, () => {
    expect(validateEmail('123_4@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for email
    with Cyrillic letters`, () => {
    const isEmailValid = validateEmail('tesт@mail.com');

    expect(isEmailValid).toBe(false);
  });

  it(`should return 'false' for email with not allowed character`, () => {
    const isEmailValid = validateEmail('test}@mail.com');

    expect(isEmailValid).toBe(false);
  });

  it(`should return 'false' for email without required '@'`, () => {
    const isEmailValid = validateEmail('test.mail.com');

    expect(isEmailValid).toBe(false);
  });

  it(`should return 'false' for email
     without required dot in top Level domain`, () => {
    const isEmailValid = validateEmail('false@email');

    expect(isEmailValid).toBe(false);
  });

  it(`should return 'false' for email with dot 
    in the start of the first part of it`, () => {
    const isEmailValid = validateEmail('.test@mail.com');

    expect(isEmailValid).toBe(false);
  });

  it(`should return 'false' for email 
    with dot in the end of the first part of it`, () => {
    const isEmailValid = validateEmail('test.@mail.com');

    expect(isEmailValid).toBe(false);
  });

  it(`should return 'false' for email
    with double dot in the first part of it`, () => {
    const isEmailValid = validateEmail('test..test@mail.com');

    expect(isEmailValid).toBe(false);
  });

  it(`should return 'false' for email with dot 
    in the start of top Level domain`, () => {
    const isEmailValid = validateEmail('test@.mail.com');

    expect(isEmailValid).toBe(false);
  });
});
