'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean for valid and invalid emails`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('false@email')).toBe('boolean');
  });

  it.each([
    'test@mail.com',
    't@q.c',
    'Test838@Mail.com',
    'first.last@mail.com',
    'first_last@mail.com',
    'first-last@mail.com',
    'test@mail123.com',
    'test@my-mail.com',
    'test@mail.example.com',
  ])(`should return true for valid email '%s'`, (email) => {
    expect(validateEmail(email)).toBe(true);
  });

  it.each([
    '',
    'testmail.com',
    'test@@mail.com',
    'test@other@mail.com',
    '@mail.com',
    'test@',
    'false@email',
    '.test@mail.com',
    'test.@mail.com',
    'first..last@mail.com',
    'test@.mail.com',
    'first last@mail.com',
    'test@my mail.com',
    'test@my_mail.com',
    'test@mail.com ',
    'test@mail.com!',
  ])(`should return false for invalid email '%s'`, (email) => {
    expect(validateEmail(email)).toBe(false);
  });

  it.each([
    '!',
    '$',
    '%',
    '&',
    "'",
    '*',
    '+',
    '/',
    '=',
    '?',
    '^',
    '{',
    '|',
    '}',
    '~',
  ])(`should reject '%s' in personal info`, (character) => {
    expect(validateEmail(`first${character}last@mail.com`)).toBe(false);
  });
});
