'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test@mail.com')).toBe('boolean');
  });

  it(`should return true for valid emails`, () => {
    expect(validateEmail('test@mail.com')).toBe(true);
    expect(validateEmail('t@q.c')).toBe(true);
    expect(validateEmail('test838@gmail.com')).toBe(true);
    expect(validateEmail('user.name@sub.domain.com')).toBe(true);
  });

  it(`should return false for invalid emails`, () => {
    // wiodąca/końcowa/podwójna kropka w local-part
    expect(validateEmail('.user@domain.com')).toBe(false);
    expect(validateEmail('user.@domain.com')).toBe(false);
    expect(validateEmail('us..er@domain.com')).toBe(false);

    // niedozwolone znaki w local-part
    expect(validateEmail('user!@domain.com')).toBe(false);
    expect(validateEmail('user%name@domain.com')).toBe(false);

    // problemy z domeną
    expect(validateEmail('user@.com')).toBe(false);
    expect(validateEmail('user@com')).toBe(false);
    expect(validateEmail('user@domain.')).toBe(false);
    expect(validateEmail('user@do_main.com')).toBe(false);
    expect(validateEmail('user@.domain.com')).toBe(false);

    // wiele znaków @
    expect(validateEmail('a@b@c.com')).toBe(false);
  });
});



