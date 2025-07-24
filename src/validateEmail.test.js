'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com.')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.')).toBeTruthy();
  });

  it(`should return 'false' for empty email`, () => {
    expect(validateEmail('')).toBeFalsy();
  });

  it(`should return 'false' for the email 
    'personal_info' starts with dot`, () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email 'personal_info' end with dot`, () => {
    expect(validateEmail('test.@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email includes double dots`, () => {
    expect(validateEmail('te..st@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email includes 
    ! $ % & ' * + / = ? ^ { | } ~`, () => {
    expect(validateEmail('te!st@mail.com')).toBeFalsy();
  });

  it(`should return 'true' for the email include dot`, () => {
    expect(validateEmail('test.test@mail.com')).toBeTruthy();
  });

  it(`should return 'false' if email does not contain '@'`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });

  it(`should return 'false' if domain starts with dot`, () => {
    expect(validateEmail('test@.mail.com')).toBeFalsy();
  });

  it(`should return 'false' if domain contains invalid characters`, () => {
    expect(validateEmail('test@mail!.com')).toBeFalsy();
  });

  it(`should return 'true' for email with hyphen in domain`, () => {
    expect(validateEmail('test@mail-domain.com')).toBeTruthy();
  });

  it(`should return 'true' for email with underscore in personal_info`, () => {
    expect(validateEmail('test_test@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for email with space`, () => {
    expect(validateEmail('test test@mail.com')).toBeFalsy();
  });

  it(`should return 'true' for minimal valid email`, () => {
    expect(validateEmail('a@b.c')).toBeTruthy();
  });

  it(`should return 'false' for email with multiple '@' symbols`, () => {
    expect(validateEmail('test@@mail.com')).toBeFalsy();
  });
});
