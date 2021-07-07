'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('annA12.an$d@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email an12.a@gmail.com`, () => {
    expect(validateEmail('an12.a@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email
  with digits an12345sa@gmail.com`, () => {
    expect(validateEmail('an12345sa.a@gmail.com')).toBeTruthy();
  });

  it(`should return 'false' for the email
  with double dots an..45sa@gmail.com`, () => {
    expect(validateEmail('an..45sa@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email
  with double dots an..45sa@gmail.com`, () => {
    expect(validateEmail('an..45sa@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email
  which start with dots .45sa@gmail.com`, () => {
    expect(validateEmail('.45sa@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email
  without @ 45sagmail.com`, () => {
    expect(validateEmail('45sagmail.com')).toBeFalsy();
  });

  // write more tests here
});
