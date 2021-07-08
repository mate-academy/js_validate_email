'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail)
      .toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail(''))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid email 
    including only digits`, () => {
    expect(validateEmail('123@mail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email 
    including uppercase latin characters`, () => {
    expect(validateEmail('TESTabc@mail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email 
    including all allowed characters`, () => {
    expect(validateEmail('t.est.123@mail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the valid email, 
    but with dot as the first character`, () => {
    expect(validateEmail('.test123@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the valid email, 
    but with 2 '.' that come one after the other'`, () => {
    expect(validateEmail('te..st123@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email 
    containing cyrillic characters'`, () => {
    expect(validateEmail('Тестabs123@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the valid email, 
    but with no '@' symbol'`, () => {
    expect(validateEmail('test123mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with no personal_info'`, () => {
    expect(validateEmail('@mail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with no domain'`, () => {
    expect(validateEmail('testInfo123@mail'))
      .toBeFalsy();
  });
});
