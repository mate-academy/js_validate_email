'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email test@mail.com`, () => {
    expect(validateEmail('test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email with digits`, () => {
    expect(validateEmail('test1@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email with characters`, () => {
    expect(validateEmail('test_test@mail.com')).toBeTruthy();
  });

  it(`should return 'true' for the email, if domain part contain digit`, () => {
    expect(validateEmail('test@mail1.com')).toBeTruthy();
  });

  it(`should return 'true' for the email,
   if domain part contain hyphen`, () => {
    expect(validateEmail('test@ma-il.com')).toBeTruthy();
  });

  it(`should return 'true' for the email,
   if personal info part contain capital`, () => {
    expect(validateEmail('Test@mail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email, if first character is dot`, () => {
    expect(validateEmail('.test@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email, 
  if last character of personal info is dot`, () => {
    expect(validateEmail('test.@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email,
   if top level domain starts with dot`, () => {
    expect(validateEmail('test@.mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email,
   if two dot is come one after the other`, () => {
    expect(validateEmail('te..st@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email, if double dots are exist`, () => {
    expect(validateEmail('tes:t@mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without @`, () => {
    expect(validateEmail('testmail.com')).toBeFalsy();
  });
  // write more tests here
});
