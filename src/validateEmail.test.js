'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@mail.com');

    expect(typeof result).toBe(typeof true);
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with latin letters`, () => {
    expect(validateEmail('test@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email with cyrillic letters`, () => {
    expect(validateEmail('тест@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'true' for the email with digits`, () => {
    expect(validateEmail('12312838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with -`, () => {
    expect(validateEmail('test-test@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with _`, () => {
    expect(validateEmail('test_test@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with .`, () => {
    expect(validateEmail('test.test@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email with . at the start`, () => {
    expect(validateEmail('.testtest@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with . at the end`, () => {
    expect(validateEmail('testtest.@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with . one after the other`, () => {
    expect(validateEmail('test..test@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email without @`, () => {
    expect(validateEmail('testtestmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' when second level domain starts with .`, () => {
    expect(validateEmail('testtest@.gmail.com'))
      .toBeFalsy();
  });

  it(`should return error for email with each `
    + `invalid special character in the local part`, () => {

  // eslint-disable-next-line max-len
  const ch = ['!', '$', '%', '&', "'", '*', '+', '/', '=', '?', '^', '{', '|', '}', '~'];

    ch.forEach((char) => {
      const email = `t${char}_st-t@mail.com`;
      const result = validateEmail(email, 'P@ssword2');

      expect(result).toBeFalsy();
    });
  });

  it(`should return 'false' when no domain`, () => {
    expect(validateEmail('false@email'))
      .toBeFalsy();
  });
});
