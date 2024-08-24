'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('')).toBe('boolean');
  });

  it(`may contain english letters Aa-Zz`, () => {
    expect(validateEmail('Test@gmail.com.'))
      .toBeTruthy();
  });

  it(`may contain digits`, () => {
    expect(validateEmail('test123@gmail.com.'))
      .toBeTruthy();
  });

  it(`may contain characters '-', '_'`, () => {
    expect(validateEmail('te_st-t@gmail.com.'))
      .toBeTruthy();
  });

  it(`should not contain '.' at the beginning or the end`
    + `and not come one after the other`, () => {
    expect(validateEmail('.te..st.@gmail.com.'))
      .toBeFalsy();
  });

  it(`domain should not start with '.'`, () => {
    expect(validateEmail('falsy@.gmail.com.'))
      .toBeFalsy();
  });

  it(`should contain '@'`, () => {
    expect(validateEmail('testgmail.com.'))
      .toBeFalsy();
  });

  it(`shouldn't contain special characters '! $ % & ' * + / = ? ^ { | } ~'`,
    () => {
      expect(validateEmail('!t$e/=st*@gmail.com.'))
        .toBeFalsy();
    });

  it(`domain may contain letters, digits, hyphens, and dots.`, () => {
    expect(validateEmail('test@gm.ail-mail1.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });
});
