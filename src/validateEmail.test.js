'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('invalid')).toBe('boolean');
  });

  it(`should return 'true' for valid email`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('test838@gmail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
    expect(validateEmail('test.name@mail.com')).toBe(true);
    expect(validateEmail('test_name@mail.com')).toBe(true);
    expect(validateEmail('test-name@mail.com')).toBe(true);
    expect(validateEmail('user@sub.domain.com')).toBe(true);
  });

  it(`should return 'false' when '@' is missing`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  it(`should return 'false' when domain has no TLD`, () => {
    expect(validateEmail('false@email')).toBe(false);
    expect(validateEmail('test@')).toBe(false);
  });

  it(`should return 'false' when personal_info is missing`, () => {
    expect(validateEmail('@mail.com')).toBe(false);
  });

  it(`should return 'false' when personal_info starts with dot`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
  });

  it(`should return 'false' when personal_info ends with dot`, () => {
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  it(`should return 'false' when personal_info has consecutive dots`, () => {
    expect(validateEmail('test..name@mail.com')).toBe(false);
  });

  it(`should return 'false' when email contains invalid characters`, () => {
    expect(validateEmail('test!@mail.com')).toBe(false);
    expect(validateEmail('test$@mail.com')).toBe(false);
    expect(validateEmail('te st@mail.com')).toBe(false);
  });
});
