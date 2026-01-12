'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'false' for email with trailing dot`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the invalid email`, () => {
    expect(validateEmail('invalid-email@com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the empty string`, () => {
    expect(validateEmail(''))
      .toBeFalsy();
  });

  it(`should return 'false' for the missing '@' symbol`, () => {
    expect(validateEmail('invalidemail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the missing domain`, () => {
    expect(validateEmail('invalid-email@.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the missing username`, () => {
    expect(validateEmail('@domain.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with spaces`, () => {
    expect(validateEmail('invalid email'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with special characters`, () => {
    expect(validateEmail('special!@emal.com'))
      .toBeFalsy();
  });

  it(`should return 'true' for email without trailing dot`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for 'test@mail.com'`, () => {
    expect(validateEmail('test@mail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for 't@q.c'`, () => {
    expect(validateEmail('t@q.c'))
      .toBeTruthy();
  });

  it(`should return 'false' for 'false@email'`, () => {
    expect(validateEmail('false@email'))
      .toBeFalsy();
  });

  it(`should return 'false' for dot at the beginning of username`, () => {
    expect(validateEmail('.test@example.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for dot at the end of username`, () => {
    expect(validateEmail('test.@example.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for consecutive dots in username`, () => {
    expect(validateEmail('test..123@example.com'))
      .toBeFalsy();
  });
});
