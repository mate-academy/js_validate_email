'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const r = validateEmail('');

    expect(typeof r).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test@mail.com'))
      .toBeTruthy();
  });


  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('t@q.c'))
      .toBeTruthy();
  });

  it(`'false' if email has not '@'`, () => {
    expect(validateEmail('test838gmail.com.')).toBe(false);
  });

  it(`'false' if email has cyrillic chars`, () => {
    expect(validateEmail('тест838@gmail.com.')).toBe(false);
  });

  it(`'false' if email has double dot in 'personal_info'`, () => {
    expect(validateEmail('test..838@gmail.com.')).toBe(false);
  });

  it(`'false' if 'personal_info' started with dot`, () => {
    expect(validateEmail('.test838@gmail.com')).toBe(false);
  });

  it(`'false' if 'domain' started with dot`, () => {
    expect(validateEmail('test838@.gmailcom')).toBe(false);
  });

  it(`'false' if 'domain' hasn't any dot`, () => {
    expect(validateEmail('test838@gmailcom')).toBe(false);
  });

  it(`'false' if email has not allowed chars`, () => {
    expect(validateEmail(`test838!$%&'*+/=?^{|}~@gmailcom`)).toBe(false);
  });

  it(`'false' if email has invalid 'domen'`, () => {
    expect(validateEmail(`false@email`)).toBe(false);
  });
});
