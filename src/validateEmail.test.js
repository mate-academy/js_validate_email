'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
    expect(validateEmail('test-test@mail.com')).toBe(true);
    expect(validateEmail('test_test@mail.com')).toBe(true);
    expect(validateEmail('test.test@mail.com')).toBe(true);
    expect(validateEmail('test.test-test@mail.com')).toBe(true);
  });

  it(`should return 'false' for the invalid email - missing @`, () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for the invalid email - invalid characters in personal_info`, () => {
    expect(validateEmail('test!@mail.com')).toBe(false);
    expect(validateEmail('test$@mail.com')).toBe(false);
    expect(validateEmail('test%@mail.com')).toBe(false);
    expect(validateEmail('test&@mail.com')).toBe(false);
    expect(validateEmail("test'@mail.com")).toBe(false);
    expect(validateEmail('test*@mail.com')).toBe(false);
    expect(validateEmail('test+@mail.com')).toBe(false);
    expect(validateEmail('test/@mail.com')).toBe(false);
    expect(validateEmail('test=@mail.com')).toBe(false);
    expect(validateEmail('test?@mail.com')).toBe(false);
    expect(validateEmail('test^@mail.com')).toBe(false);
    expect(validateEmail('test{@mail.com')).toBe(false);
    expect(validateEmail('test|@mail.com')).toBe(false);
    expect(validateEmail('test}@mail.com')).toBe(false);
    expect(validateEmail('test~@mail.com')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for the invalid email - dot at the beginning or end of personal_info`, () => {
    expect(validateEmail('.test@mail.com')).toBe(false);
    expect(validateEmail('test.@mail.com')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for the invalid email - double dots in personal_info`, () => {
    expect(validateEmail('test..test@mail.com')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for the invalid email - dot at the beginning of domain`, () => {
    expect(validateEmail('test@.mail.com')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' for the invalid email - invalid characters in domain`, () => {
    expect(validateEmail('test@mail!.com')).toBe(false);
    expect(validateEmail('test@mail$.com')).toBe(false);
    expect(validateEmail('test@mail%.com')).toBe(false);
    expect(validateEmail('test@mail&.com')).toBe(false);
    expect(validateEmail("test@mail'.com")).toBe(false);
    expect(validateEmail('test@mail*.com')).toBe(false);
    expect(validateEmail('test@mail+.com')).toBe(false);
    expect(validateEmail('test@mail/.com')).toBe(false);
    expect(validateEmail('test@mail=.com')).toBe(false);
    expect(validateEmail('test@mail?.com')).toBe(false);
    expect(validateEmail('test@mail^.com')).toBe(false);
    expect(validateEmail('test@mail{.com')).toBe(false);
    expect(validateEmail('test@mail|.com')).toBe(false);
    expect(validateEmail('test@mail}.com')).toBe(false);
    expect(validateEmail('test@mail~.com')).toBe(false);
  });
});
