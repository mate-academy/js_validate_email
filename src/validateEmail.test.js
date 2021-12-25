'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('email')).toBe('boolean');
  });

  it(`should return 'true' for the email "Adolas_0-9@ua.1-mail.com"`, () => {
    expect(validateEmail('Adolas_0-9@ua.1-mail.com')).toBeTruthy();
  });

  // write more tests here
  it(`should return 'false' for the email without "@" symbol
  like "alex2000gmail.com"`, () => {
    expect(validateEmail('alex2000gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email starting with dot "." symbol
  like ".alex2000@gmail.com"`, () => {
    expect(validateEmail('.alex2000@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if there is dot "." symbol
  before at "@" symbol in an email like "alex2000.@gmail.com"`, () => {
    expect(validateEmail('alex2000.@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if personal_info part contains two dot "." symbols
  one after the other in an email like "alex..2000@gmail.com"`, () => {
    expect(validateEmail('alex..2000@gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if first char after at "@" symbol
  is dot "." symbol in an email like "alex2000@.gmail.com"`, () => {
    expect(validateEmail('alex2000@.gmail.com')).toBeFalsy();
  });

  it(`should return 'false' if personal_info part contains [:!$%&'*+/=?^{|}~]
  symbols in an email like "alex:!$%&'*+/=?^{|}~2000@gmail.com"`, () => {
    expect(validateEmail(`alex:!$%&'*+/=?^{|}~2000@gmail.com`)).toBeFalsy();
  });

  it(`should return 'false' if domain part contains other symbols accept hyphens
  and dots in an email like "alex2000@ua:!$%&'*+/=?^{|}~mail.com"`, () => {
    expect(validateEmail(`alex2000@ua:!$%&'*+/=?^{|}~mail.com`)).toBeFalsy();
  });

  it(`should return 'false' if the email contains nonprinting chars
  like ".alex2000@gmail.com"`, () => {
    expect(validateEmail('alex2000 @gmail.com')).toBeFalsy();
  });

  it(`should return 'false' for the email without top-domain
  like ".alex2000@gmail"`, () => {
    expect(validateEmail('alex2000@gmail')).toBeFalsy();
  });

  it(`should return 'false' for the email without personal_info part
  like "@gmail"`, () => {
    expect(validateEmail('@gmail.com')).toBeFalsy();
  });
});
