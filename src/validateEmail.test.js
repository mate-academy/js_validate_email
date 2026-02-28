'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  // write more tests here
  it(`should return 'true' for the valid email
    even if its parts are very short`, () => {
    expect(validateEmail('t@q.c'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email
    with characters '-' and '_'`, () => {
    expect(validateEmail('test-83_8@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email
    where 'personal_info' starts with a dot`, () => {
    expect(validateEmail('.test838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email
    where 'personal_info' ends with a dot`, () => {
    expect(validateEmail('test838.@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email
    where 'personal_info' has double dots`, () => {
    expect(validateEmail('test..838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email
    where 'personal_info' has any of these characters: !$%&'*+/=?^{|}~`, () => {
    expect(validateEmail('test%838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email missing @`, () => {
    expect(validateEmail('test838gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with an invalid domain`, () => {
    expect(validateEmail('test838@gmail'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email
    where domain starts with a dot`, () => {
    expect(validateEmail('test838@.gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email
    where domain ends with a dot`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'true' for the email
    where domain includes digits and/or hyphens`, () => {
    expect(validateEmail('test838@G-M3IL.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email
    where domain includes other special characters`, () => {
    expect(validateEmail('test838@gma!l.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email
    where domain includes other special characters`, () => {
    expect(validateEmail('test838@g_mail.com'))
      .toBeFalsy();
  });
});
