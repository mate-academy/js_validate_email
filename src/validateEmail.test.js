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

  // write more tests here
  it(`should return 'false' for the email with the characters
    not from ASCII`, () => {
    expect(validateEmail('Ыpersonal_info@gmail.com')).toBe(false);
  });

  it(`should return 'true' for the email with the digits`, () => {
    expect(validateEmail('personal_info123@gmail.com')).toBe(true);
  });

  it(`should return 'true' for the email with "_"`, () => {
    expect(validateEmail('personal_info@gmail.com')).toBe(true);
  });

  it(`should return 'false' for the email starts with "." `, () => {
    expect(validateEmail('.personal_info@gmail.com')).toBe(false);
  });

  it(`should return 'false' for the email without @`, () => {
    expect(validateEmail('personal_infogmail.com')).toBe(false);
  });

  it(`should return 'false' for the email where domain starts with "."`, () => {
    expect(validateEmail('personal_infog@.mail.com')).toBe(false);
  });

  it(`should return 'false' for the email where
    domain don't includes "."`, () => {
    expect(validateEmail('personal_info@gmailcom')).toBe(false);
  });

  it(`should return 'true' for the email where
    domain don't includes digits`, () => {
    expect(validateEmail('personal_info@gmail1.com')).toBe(true);
  });

  it(`should return 'false' for an email which has a double dots'
  + in the personal_info part`, () => {
    expect(validateEmail('te:st@gmail.com')).toBe(false);
  });

  it(`should return 'false' for an email which includes these characters:
    '! $ % & ' * + / = ? ^ { | } ~'`, () => {
    expect(validateEmail('te&s!t@gmail.com')).toBe(false);
  });
});
