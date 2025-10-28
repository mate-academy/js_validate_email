'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('false@email')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test@mail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with digits`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with characters - and _`, () => {
    expect(validateEmail('test_83-8@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with min allowed symbols`, () => {
    expect(validateEmail('t@q.c'))
      .toBeTruthy();
  });

  it(`should return 'false' when email contains not English letters`, () => {
    expect(validateEmail('тест@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' when email contains
    double dots in personal_info part`, () => {
    expect(validateEmail('test..@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' when email contains not allowed characters`, () => {
    expect(validateEmail(`te!s$d%f&a'*+/=?^{|}~@mail.com`))
      .toBeFalsy();
  });

  it(`should return 'false' when email wihout @`, () => {
    expect(validateEmail(`testmail.com`))
      .toBeFalsy();
  });

  it(`should return 'false' when personal_info part starts with .`, () => {
    expect(validateEmail(`.test@mail.com`))
      .toBeFalsy();
  });

  it(`should return 'false' when personal_info part ends with .`, () => {
    expect(validateEmail(`test.@mail.com`))
      .toBeFalsy();
  });

  it(`should return 'false' when domain part starts with .`, () => {
    expect(validateEmail(`test@.mail.com`))
      .toBeFalsy();
  });

  it(`should return 'false' when email fails multiple rules`, () => {
    expect(validateEmail(`false@email`))
      .toBeFalsy();
  });

  it(`should return 'false' when email contains more than one @ symbol`, () => {
    expect(validateEmail(`test@test@mail.com`))
      .toBeFalsy();
  });
});
