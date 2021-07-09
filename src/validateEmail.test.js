'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('alina.t01@gmail.com')).toEqual('boolean');
  });

  it(`should return 'true' for the valid email...`, () => {
    expect(validateEmail('alina_t01@gmail.com')).toBeTruthy();
  });

  // write more tests here

  it(`should return 'false' for the email with special symbols`, () => {
    expect(validateEmail('alina.t$1@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email that starts with dot`, () => {
    expect(validateEmail('.tim1@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email that ends with dot`, () => {
    expect(validateEmail('atim1.@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email that doesn't contain "@"`, () => {
    expect(validateEmail('alina_t01gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email that contains only "@"`, () => {
    expect(validateEmail('@')).toBeFalsy();
  });

  it(`should return 'false' for the email that contains two "@"`, () => {
    expect(validateEmail('alina_t01@@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' where contains 2 dots one after the other`, () => {
    expect(validateEmail('a..tim1@mail.com')).toBeFalsy();
  });

  it(`should return 'false' if there is non-English letters `, () => {
    expect(validateEmail('a_Тим1@mail.com')).toBeFalsy();
  });
});
