'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('pwd@1.com')).toEqual(true);
  });

  // write more tests here
  it(`should return 'false' for the non-Latin chars [personal_info]`, () => {
    expect(validateEmail('цpwd@1.com')).toEqual(false);
  });

  it(`should return 'false' char '~' is present in [personal_info]`, () => {
    expect(validateEmail('1~a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '}' is present in [personal_info]`, () => {
    expect(validateEmail('1}a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '{' is present in [personal_info]`, () => {
    expect(validateEmail('1{a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '|' is present in [personal_info]`, () => {
    expect(validateEmail('1|a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '^' is present in [personal_info]`, () => {
    expect(validateEmail('1^a@1.com')).toEqual(false);
  });

  it(`should return 'true' char '_' is present in [personal_info]`, () => {
    expect(validateEmail('1_a@1.com')).toEqual(true);
  });

  it(`should return 'false' char '?' is present in [personal_info]`, () => {
    expect(validateEmail('1?a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '!' is present in [personal_info]`, () => {
    expect(validateEmail('1!a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '$' is present in [personal_info]`, () => {
    expect(validateEmail('1$a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '%' is present in [personal_info]`, () => {
    expect(validateEmail('1%a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '&' is present in [personal_info]`, () => {
    expect(validateEmail('1&a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '*' is present in [personal_info]`, () => {
    expect(validateEmail('1*a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '+' is present in [personal_info]`, () => {
    expect(validateEmail('1+a@1.com')).toEqual(false);
  });

  it(`should return 'true' char '-' is present in [personal_info]`, () => {
    expect(validateEmail('1-a@1.com')).toEqual(true);
  });

  it(`should return 'false' char '/' is present in [personal_info]`, () => {
    expect(validateEmail('1/a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '=' is present in [personal_info]`, () => {
    expect(validateEmail('1=a@1.com')).toEqual(false);
  });

  it(`should return 'false' char '\`' is present in [personal_info]`, () => {
    expect(validateEmail('1`a@1.com')).toEqual(false);
  });

  it(`should return 'false' for [personal_info] starts w/dot`, () => {
    expect(validateEmail('.pwd@1.com')).toEqual(false);
  });

  it(`should return 'false'if [personal_info] contains 2 adjacent '.'`, () => {
    expect(validateEmail('p..wd@1.com')).toEqual(false);
  });

  it(`should return 'false'if [personal_info] ends w/'.'`, () => {
    expect(validateEmail('pwd.@1.com')).toEqual(false);
  });

  it(`should return 'false' if '@' is missing `, () => {
    expect(validateEmail('pwd1.com')).toEqual(false);
  });

  it(`should return 'false' if [domain] starts w/dot`, () => {
    expect(validateEmail('pwd@.1.com')).toEqual(false);
  });

  it(`should return 'true' if[domain]contains chars,digits,hyphen,dot`, () => {
    expect(validateEmail('pwd@1.paraguay-airforce.mil')).toEqual(true);
  });
});
