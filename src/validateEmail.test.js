'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = validateEmail('test838@gmail.com.');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email with not english letters`, () => {
    expect(validateEmail('tдst838@gmail.com.'))
      .toBe(false);
  });

  it(`should return 'false' for the email starts with dot`, () => {
    expect(validateEmail('.test838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for the domian starts with dot`, () => {
    expect(validateEmail('test838@.gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' for double dot`, () => {
    expect(validateEmail('test..838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email without @`, () => {
    expect(validateEmail('test838gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '!'`, () => {
    expect(validateEmail('test!838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '~'`, () => {
    expect(validateEmail('test~838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '$'`, () => {
    expect(validateEmail('test$838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '%'`, () => {
    expect(validateEmail('test%838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '&'`, () => {
    expect(validateEmail('test&838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains "'"`, () => {
    expect(validateEmail("test'838@gmail.com"))
      .toBe(false);
  });

  it(`should return 'false' if email contains '*'`, () => {
    expect(validateEmail('test*838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '+'`, () => {
    expect(validateEmail('test+838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '/'`, () => {
    expect(validateEmail('test/838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '='`, () => {
    expect(validateEmail('test=838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '?'`, () => {
    expect(validateEmail('test?838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '^'`, () => {
    expect(validateEmail('test^838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '{'`, () => {
    expect(validateEmail('test{838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '}'`, () => {
    expect(validateEmail('test}838@gmail.com'))
      .toBe(false);
  });

  it(`should return 'false' if email contains '|'`, () => {
    expect(validateEmail('test|838@gmail.com'))
      .toBe(false);
  });
});
