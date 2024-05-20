'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test12@mail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'true' for email`
  + `with letters, digits, hypens and dots`, () => {
    expect(validateEmail('te-s.t_er123@mail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for email with special characters`, () => {
    expect(validateEmail('test!er@mail.com'))
      .toBe(false);
  });

  it(`should return 'false' for email without dot`, () => {
    expect(validateEmail('tester@mailcom'))
      .toBe(false);
  });

  it(`should return 'false' for email that starts with dot`, () => {
    expect(validateEmail('.tester@mail.com'))
      .toBe(false);
  });

  it(`should return 'false' for email with domain that starts with dot`, () => {
    expect(validateEmail('tester@.mail.com'))
      .toBe(false);
  });

  it(`should return 'false' for email with double dots`, () => {
    expect(validateEmail('tes..ter@mail.com'))
      .toBe(false);
  });

  it(`should return 'false' for email without '@'`, () => {
    expect(validateEmail('testermail.com'))
      .toBe(false);
  });
});
