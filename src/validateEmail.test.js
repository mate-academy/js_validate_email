/* eslint-disable max-len */
'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail.js');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com.')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'false' for email without @ symbol`, () => {
    expect(validateEmail('test838gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for email with dot at beginning of the personal info`, () => {
    expect(validateEmail('.test838@gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for email with dot at the first char of the domain`, () => {
    expect(validateEmail('test838@.gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for email with multiply dots in personal info not at the beginning`, () => {
    expect(validateEmail('test..838@gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for email with dot at the last char of personal info`, () => {
    expect(validateEmail('test838.@gmail.com.')).toBeFalsy();
  });

  it(`should return 'false' for email with specials characters`, () => {
    expect(validateEmail('test!8$38@gmail~.com.')).toBeFalsy();
  });

  it(`should return 'true' for the valid email with capital letters`, () => {
    expect(validateEmail('TEST838@gmail.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with dashes in domain`, () => {
    expect(validateEmail('test838@gmail--post.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with numbers in domain`, () => {
    expect(validateEmail('test838@gmail123.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with dashes in personal info`, () => {
    expect(validateEmail('test--838@gmailpost.com.'))
      .toBeTruthy();
  });

  it(`should return 'true' for the email with minimal length`, () => {
    expect(validateEmail('t@q.c'))
      .toBeTruthy();
  });

  it(`should return 'false' for the email with no domain`, () => {
    expect(validateEmail('false@email'))
      .toBeFalsy();
  });
});
