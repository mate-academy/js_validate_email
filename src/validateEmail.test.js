'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });
  it(`should return 'false' if email doesn't contain English letters (Aa-Zz)`, () => {
    expect(validateEmail('тестлап838@gmail.com.'))
      .toBeFalsy();
  });
  it(`should return 'true' if email contains digits`, () => {
    expect(validateEmail('test678@gmail.com.'))
      .toBeTruthy();
  });
  it(`should return 'true' if email contains '- _'`, () => {
    expect(validateEmail('te_s-t@gmail.com.'))
      .toBeTruthy();
  });
  it(`should return 'true' if email contains '.' ,
      provided that it is not the first or last character
      and it will not come one after the other.`, () => {
    expect(validateEmail('t.estt@gmail.com.'))
      .toBeTruthy();
    expect(validateEmail('t..estt@gmail.com.'))
      .toBeFalsy();
    expect(validateEmail('test.@gmail.com.'))
      .toBeFalsy();
    expect(validateEmail('.test@gmail.com.'))
      .toBeFalsy();
  });
  it(`should return 'false' if personal_info contains ':'`, () => {
    expect(validateEmail('te:st@gmail.com.'))
      .toBeFalsy();
  });
  it(`should return 'false' if email doesn't contain @`, () => {
    expect(validateEmail('testgmail.com.'))
      .toBeFalsy();
  });
  it(`should return 'false' if email contains '! $ % & ' * + / = ? ^ { | } ~'`, () => {
    expect(validateEmail('te!$stgmail.com.'))
      .toBeFalsy();
  });
  it(`should return 'false' if personal_info and domain start with dot .`, () => {
    expect(validateEmail('test.@gmail.com.'))
      .toBeFalsy();
    expect(validateEmail('.test@gmail.com.'))
      .toBeFalsy();
  });
});
