'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test_8.38@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email with non-English letters`, () => {
    expect(validateEmail('тест838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with dot at the start`, () => {
    expect(validateEmail('.test838@gmail.com'))
      .toBeFalsy();
  });

  it.skip(`should return 'false' for the email with dot at the end`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email 
  with 2 dots in a row in personal_info part`, () => {
    expect(validateEmail('te..st838@gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email with no '@'`, () => {
    expect(validateEmail('test838gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'false' for the email 
  with ! $ % & ' * + / = ? ^ { | } ~ characters`, () => {
    expect(validateEmail('test!838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test$838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test%838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test^838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test&838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail(`test838'@gmail.com`))
      .toBeFalsy();

    expect(validateEmail('test{838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test}838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test*838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test?838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test|838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test~838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test+838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test=838@gmail.com'))
      .toBeFalsy();

    expect(validateEmail('test/@838gmail.com'))
      .toBeFalsy();
  });

  it(`should return 'true' for the email 
  with digits in domain name part`, () => {
    expect(validateEmail('test838@gmail234.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email 
  with hyphens in domain name part`, () => {
    expect(validateEmail('test838@gmail---.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email 
  with dots in domain name part`, () => {
    expect(validateEmail('test838@gm.a.il.com'))
      .toBeTruthy();
  });
});
