'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it('should be declared', () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
    expect(typeof validateEmail('invalid')).toBe('boolean');
  });

  it.each([
    'test@mail.com',
    't@q.c',
    'JohnDoe@Example.COM',
    'test838@gmail.com',
    'john.doe@mail.com',
    'john-doe@mail.com',
    'john@mail.example.com',
    'john@my-domain.com',
    'john@mail123.com',
    'false@email',
  ])('should accept a valid email: %s', (email) => {
    expect(validateEmail(email)).toBe(true);
  });

  it.each([
    '',
    'invalid',
    'testmail.com',
    'test@@mail.com',
    'test@other@mail.com',
    '@mail.com',
    'test@',
    'test@mail.com.',
    'test@mail.com!',
    'test@mail.com@other.com',
  ])('should reject an email with invalid structure: %s', (email) => {
    expect(validateEmail(email)).toBe(false);
  });

  it.each([
    '.john@mail.com',
    'john.@mail.com',
    'john..doe@mail.com',
    'john@.mail.com',
  ])('should reject an email with misplaced dots: %s', (email) => {
    expect(validateEmail(email)).toBe(false);
  });

  it.each([
    'john doe@mail.com',
    'john@mail example.com',
    'john@mail!host.com',
    'john@mail_host.com',
    'józef@mail.com',
  ])('should reject an email with invalid characters: %s', (email) => {
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
  ])(
    'should reject the forbidden character %s in personal_info',
    (character) => {
      expect(validateEmail(`john${character}doe@mail.com`)).toBe(false);
    },
  );
});
