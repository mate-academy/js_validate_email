'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test')).toBeTruthy();
  });

  it(`should return 'true' for the valid email
  "Olena.Vdovychenko1997@gmail.com"`, () => {
    expect(validateEmail('Olena.Vdovychenko1997@gmail.com')).toBeTruthy();
  });

  it(`should return 'true' for the valid email "Olena.Vd@i-mail7.com"`, () => {
    expect(validateEmail('Olena.Vd@i-mail7.com')).toBeTruthy();
  });

  it(`should return 'false' for the invalid email "Ena$Vd@icloud.com"`, () => {
    expect(validateEmail('Ena$Vd@icloud.com')).toBeFalsy();
  });

  it(`should return 'false' for the invalid email "Ena!Vd@ukr.net"`, () => {
    expect(validateEmail('Ena!Vd@ukr.net')).toBeFalsy();
  });

  it(`email should not start with dot symbol`, () => {
    expect(validateEmail('.Olena@gmail.com')).toBeFalsy();
  });

  it(`domain should not start with dot symbol`, () => {
    expect(validateEmail('Olena@.mail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email with double dot`, () => {
    expect(validateEmail('Olena:1997@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without "@"`, () => {
    expect(validateEmail('Olenagmail.com')).toBeFalsy();
  });
});
