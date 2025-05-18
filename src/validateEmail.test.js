'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test@mail.com');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'false' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
    expect(validateEmail('test@mail.com')).toBe(false);
  });

  // write more tests here
  it(`should return 'false' if email doesn't contain '@' symbol`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return 'false' if email starts with a dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return 'false' if personal_info has double dots`, () => {
    expect(validateEmail('test..email@mail.com')).toBe(false);
  });

  it(`should return 'false' if domain starts with a dot`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for email with forbidden special characters`, () => {
    expect(validateEmail('te!st@mail.com')).toBe(false);
    expect(validateEmail('te$st@mail.com')).toBe(false);
    expect(validateEmail('te&st@mail.com')).toBe(false);
  });

  it(`should return 'true' for shortest valid email`, () => {
    expect(validateEmail('t@q.c')).toBe(true);
  });

  it(`should return 'false' for email without domain`, () => {
    expect(validateEmail('false@email')).toBe(false);
  });
});
