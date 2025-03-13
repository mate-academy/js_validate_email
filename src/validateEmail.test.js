'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for valid email "test838@gmail.com"`, () => {
    expect(validateEmail('test838@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for valid email "t@q.c"`, () => {
    expect(validateEmail('t@q.c')).toBeTruthy();
  });

  it(`should return 'true' for valid email "user-name123@mail-domain.com"`,
    () => {
      expect(validateEmail('user-name123@mail-domain.com')).toBeTruthy();
    });

  it(`should return 'false' for email with invalid character '$' 
    in "personal_info"`,
  () => {
    expect(validateEmail('test$@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email with multiple '@' symbols 
    "test@@mail.com"`,
  () => {
    expect(validateEmail('test@@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email with no "@" symbol 
    "testmail.com"`,
  () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });

  it(`should return 'false' for email with dot at the beginning of 
    "personal_info" ".test@mail.com"`,
  () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email with dot at the end of "personal_info"
     "test.@mail.com"`,
  () => {
    expect(validateEmail('test.@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email with consecutive dots in 
    "personal_info" "test..test@mail.com"`,
  () => {
    expect(validateEmail('test..test@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email with invalid character '!' in 
    "domain" "test@mail!com"`,
  () => {
    expect(validateEmail('test@mail!com')).toBeFalsy();
  });

  it(`should return 'false' for email with dot at the beginning of 
    "domain" "test@.mail.com"`,
  () => {
    expect(validateEmail('test@.mail.com')).toBeFalsy();
  });

  it(`should return 'false' for email with dot at the end of
     "domain" "test@mail.com."`,
  () => {
    expect(validateEmail('test@mail.com.')).toBeFalsy();
  });

  it(`should return 'false' for empty string ""`, () => {
    expect(validateEmail('')).toBeFalsy();
  });

  it(`should return 'false' for email with invalid special character in domain 
    "test@mail^com"`,
  () => {
    expect(validateEmail('test@mail^com')).toBeFalsy();
  });

  it(`should return 'true' for valid email "test@sub-domain.mail.com"`, () => {
    expect(validateEmail('test@sub-domain.mail.com')).toBeTruthy();
  });

  it(`should return 'false' for email without domain after '@' "test@"`, () => {
    expect(validateEmail('test@')).toBeFalsy();
  });
});
