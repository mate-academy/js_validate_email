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
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' if the email includes non-English letters`, () => {
    expect(validateEmail('тest838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email `
  + `in 'personal info' starts with '.'`, () => {
    expect(validateEmail('.test838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email `
  + `in 'personal info' ends with '.'`, () => {
    expect(validateEmail('test838.@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email includes 2 '.' in a row`, () => {
    expect(validateEmail('tes..t838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email domain starts with '.'`, () => {
    expect(validateEmail('test838@.gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email use top-level domain`, () => {
    expect(validateEmail('test838@gmail'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email missed '@'`, () => {
    expect(validateEmail('test838.gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' if the email `
  + `includes '! $ % & ' * + / = ? ^ { | } ~'`, () => {
    expect(validateEmail('test!%/@gmail.com'))
      .toBeFalsy();
  });
});
