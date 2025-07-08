'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should contain only English letters (Aa-Zz)`, () => {
    expect(validateEmail('tesт838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' if double dots in personal_info part`, () => {
    expect(validateEmail('tes..838@gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' without @`, () => {
    expect(validateEmail('tes838gmail.com.'))
      .toBeFalsy();
  });

  it(`should return 'false' for not allowed
    characters: ! $ % & ' * + / = ? ^ { | } ~`, () => {
    expect(validateEmail(`!$%&'*+/=?^{|}~@gmail.com.`))
      .toBeFalsy();
  });

  it(`can not start with dot`, () => {
    expect(validateEmail(`.tesт838@gmail.com.`))
      .toBeFalsy();
  });

  // write more tests here
});
